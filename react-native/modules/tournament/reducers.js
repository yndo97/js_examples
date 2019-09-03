import { handleActions } from 'redux-actions';
import types from './types';
import { mergeIn } from '../../utils/stateHelpers';
import games from '../../constants/games';

const initialState = {
  gameType: games.SudokuGameType,
  startReadyTime: false,
  round: 4,
  tournamentStart: false,
  tournamentId: null,
  joinTournament: null,
  result: games.ResultStatusLose,
};

const gameReducer = handleActions({
  [types.CHOOSE_GAME]: mergeIn(action => action.payload),
  [types.CHOOSE_TOURNAMENT]: mergeIn(action => action.payload),
  [types.START_READY_TIME]: mergeIn(action => action.payload),
  [types.START_ROUND]: mergeIn(action => action.payload),
  [types.SET_RESULT]: mergeIn(action => action.payload),
  [types.JOIN_TOURNAMENT]: mergeIn(action => action.payload),
}, initialState);

export default gameReducer;
