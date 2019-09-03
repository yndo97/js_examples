import { combineReducers } from 'redux';
import app from './app';
import navigator from './navigator';
import settings from './settings';
import game from './game';
import timer from './timer';
import search from './search';
import gameResult from './gameRuslt';
import offlineMode from './offlineMode';
import tournament from './tournament';

const appReducer = combineReducers({
  app,
  navigator,
  settings,
  game,
  gameResult,
  timer,
  offlineMode,
  search,
  tournament,
});


export default (state, action) =>
// if (action.type === authTypes.SIGN_OUT) {
//   state = { app: state.app }; // eslint-disable-line no-param-reassign
// }
  appReducer(state, action);

