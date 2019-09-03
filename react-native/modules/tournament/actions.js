import { createActions } from 'redux-actions';
import types from './types';

export const {
  chooseGame,
  chooseTournament,
  startReadyTime,
  startRound,
  setResult,
  joinTournament,
} = createActions(
  types.CHOOSE_GAME,
  types.CHOOSE_TOURNAMENT,
  types.START_READY_TIME,
  types.START_ROUND,
  types.SET_RESULT,
  types.JOIN_TOURNAMENT,
);
