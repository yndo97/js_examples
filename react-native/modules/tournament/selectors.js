import { createSelector } from 'reselect';
import R from 'ramda';

export const getTournamentId = createSelector(
  R.pathOr(null, ['tournament', 'tournamentId']),
  tournamentId => tournamentId,
);

export const getReadyTime = createSelector(
  R.pathOr(false, ['tournament', 'startReadyTime']),
  startReadyTime => startReadyTime,
);

export const getRound = createSelector(
  R.pathOr(null, ['tournament', 'round']),
  round => round,
);

export const getStartTournament = createSelector(
  R.pathOr(false, ['tournament', 'tournamentStart']),
  startRound => startRound,
);

export const getResultTournament = createSelector(
  R.pathOr(false, ['tournament', 'result']),
  result => result,
);

export const getJoinTournament = createSelector(
  R.pathOr(false, ['tournament', 'joinTournament']),
  result => result,
);

