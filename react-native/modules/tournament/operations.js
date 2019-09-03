import I18n from 'ex-react-native-i18n';
import R from 'ramda';

import { tournamentSelectors, tournamentActions } from './';
import { settingsSelectors } from '../settings';
import { gameSelectors, gameActions } from '../game';
import { GameService, TournamentRoomSpot, TournamentRoomSudoku } from '../../api';
import games from '../../constants/games';
import screens from '../../constants/screens';

const getTypeGame = gameType => {
  if (gameType === games.SudokuGameType) {
    return TournamentRoomSudoku;
  } else if (gameType === games.DifferenceGameType) {
    return TournamentRoomSpot;
  }
};

const formattingText = (countRemain, countAll, countRegistered) => {
  let countRemainText = null;
  const countRegisteredText = I18n.t('games.infoCountUserTournament', { countRegistered, countAll });
  if (countRemain) {
    countRemainText = I18n.t('games.waiting', { countRemain });
  }
  return countRegisteredText + countRemainText;
};

export const userConnectToRoom = ({ roomInfo, setTextTournament }) => (dispatch, getState) => {
  const tournamentId = tournamentSelectors.getTournamentId(getState());
  const gameType = gameSelectors.getTypeGame(getState());
  const typeTournament = getTypeGame(gameType);
  typeTournament.viewTournamentRoom({ tournamentId, setTextTournament, formattingText });
  const textRoomTournament = formattingText(
    roomInfo.countRemain,
    roomInfo.countAll,
    roomInfo.countRegistered,
  );
  setTextTournament(textRoomTournament);
};

export const joinTournament = navigation => (dispatch, getState) => {
  const tournamentId = tournamentSelectors.getTournamentId(getState());
  const gameType = gameSelectors.getTypeGame(getState());
  const typeTournament = getTypeGame(gameType);

  dispatch(tournamentActions.joinTournament({ joinTournament: tournamentId }));

  typeTournament.tournamentCancel();
  typeTournament.leaveTournamentTimeOut();

  typeTournament.joinTournament({
    tournamentId,
    round: 4,
    status: games.UserStatusWait,
    startReadyTime: ({ start, round }) => {
      if (start) {
        dispatch(tournamentActions.startReadyTime({ startReadyTime: start }));
        setTimeout(() => {
          dispatch(tournamentActions.startRound({ round }));
          navigation.navigate('GameTimer');
        }, 500);
      }
    },
    lose: () => {
      dispatch(tournamentActions.setResult({ result: games.ResultStatusLose }));
      navigation.navigate(screens.WonLose);
    },
    won: () => {
      dispatch(tournamentActions.setResult({ result: games.ResultStatusWin }));
      navigation.navigate(screens.WonLose);
    },
  });
  navigation.navigate(screens.TournamentTable);
};

export const canUserJoin = () => (dispatch, getState) => {
  const tournamentId = tournamentSelectors.getTournamentId(getState());
  const joinTournamentId = tournamentSelectors.getJoinTournament(getState());
  if (!joinTournamentId) {
    return true;
  } else if (tournamentId === joinTournamentId) {
    return true;
  }
  return false;
};

export const getTournaments = gameType => async () => {
  const { data } = await GameService.getTournaments(gameType);
  return data;
};

export const getCountUsersTournament = () => async (dispatch, getState) => {
  const tournamentId = tournamentSelectors.getTournamentId(getState());
  const round = tournamentSelectors.getRound(getState());
  const { data } = await GameService.getRoomInfoTournament(tournamentId, round);
  return data;
};

export const getTournamentTable = () => async (dispatch, getState) => {
  const tournamentId = tournamentSelectors.getTournamentId(getState());
  const round = tournamentSelectors.getRound(getState());
  const onlineUserId = settingsSelectors.getUserId(getState());
  const { data } = await GameService.getTournamentTable(tournamentId, round);
  const checkUserId = user => user.id === onlineUserId ? (user.name = 'You') : user.name;
  R.map(checkUserId, data);
  return data;
};

export const getOnlineSpotImages = () => async (dispatch, getState) => {
  const tournamentId = tournamentSelectors.getTournamentId(getState());
  const round = tournamentSelectors.getRound(getState());
  const { data } = await GameService.getOnlineSpotImages({tournamentId, round });
  const onlineImages = [];
  const images = {
    basicImage: data.compareImages.basic_image,
    compareImage: data.compareImages.compare_image,
    basicWidth: data.compareImages.basic_width,
    basicHeight: data.compareImages.basic_height,
    diff: JSON.parse(data.compareImages.diff_marks),
  };
  onlineImages.push(images);
  return onlineImages;
};

export const getSudokuPuzzle = ({ tournamentId, round }) => async () => {
  const { data } = await GameService.getSudokuPuzzle({ tournamentId, round });
  const puzzle = JSON.parse(data.sudoku_puzzle);
  return puzzle;
};

export const completedRoundTournament = ({
  timeElapsed,
  navigation,
}) => async (dispatch, getState) => {
  const round = tournamentSelectors.getRound(getState());
  const tournamentId = tournamentSelectors.getTournamentId(getState());
  const gameType = gameSelectors.getTypeGame(getState());
  const typeGameTournament = getTypeGame(gameType);
  typeGameTournament.completedRound({
    round,
    timeElapsed,
    tournamentId,
    navigation,
  });
};

export const onlineTournamentTable = ({
  tournamentData,
  updateUsers,
  updateText,
}) => async (dispatch, getState) => {
  const gameType = gameSelectors.getTypeGame(getState());
  const typeTournament = getTypeGame(gameType);
  const textTournament = formattingText(
    tournamentData.countRemain,
    tournamentData.countAll,
    tournamentData.countRegistered,
  );
  updateText(textTournament);
  typeTournament.listenTournamentTable({
    updateUsers,
    updateText,
    formattingText,
  });
};

export const infoUserAboutFinishedRound = ({
  setDataUserFinished,
  setPlacesInfo,
  setFinished,
}) => async (dispatch, getState) => {
  const startTournament = tournamentSelectors.getStartTournament(getState());
  if (startTournament) {
    const gameType = gameSelectors.getTypeGame(getState());
    const typeTournament = getTypeGame(gameType);
    typeTournament.infoUserAboutFinishedRound({
      setDataUserFinished,
      setPlacesInfo,
      setFinished,
    });
  }
};

export const startRound = ({
  setDialogActive,
  gameChoose,
  navigation,
}) => async (dispatch, getState) => {
  const tournamentId = tournamentSelectors.getTournamentId(getState());
  await GameService.updateUserTournamentStatus({ tournamentId, status: games.UserPlayRound });
  dispatch(tournamentActions.startReadyTime({ startReadyTime: false, tournamentStart: true }));
  setDialogActive(false);
  if (gameChoose === games.DifferenceGameType) {
    navigation.navigate(screens.DifferenceGame);
  } else {
    navigation.navigate(screens.SudokuGame);
  }
};

export const loseTournament = ({ timerAction, navigation }) => (dispatch, getState) => {
  const gameType = gameSelectors.getTypeGame(getState());
  const typeTournament = getTypeGame(gameType);
  const tournamentId = tournamentSelectors.getTournamentId(getState());
  const round = tournamentSelectors.getRound(getState());
  dispatch(gameActions.finishGame({ finishGame: true }));
  timerAction();
  typeTournament.roundTimeEnded({ tournamentId, round, navigation });
};
