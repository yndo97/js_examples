import { connect } from 'react-redux';
import { compose, withHandlers, withState, lifecycle } from 'recompose';

import { gameSelectors } from '../../modules/game';
import { tournamentOperations, tournamentSelectors } from '../../modules/tournament';
import games from '../../constants/games';
import TournamentTableScreen from './TournamentTable';

const mapStateToProps = state => ({
  gameType: gameSelectors.getTypeGame(state),
  tournamentId: tournamentSelectors.getTournamentId(state),
  getReadyTime: tournamentSelectors.getReadyTime(state),
  round: tournamentSelectors.getRound(state),
});

const mapDispatchToProps = {
  getCountUsersTournament: tournamentOperations.getCountUsersTournament,
  getTournamentTable: tournamentOperations.getTournamentTable,
  onlineTournamentTable: tournamentOperations.onlineTournamentTable,
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('timerStart', 'setTimerStart', false),
  withState('timerTimeout', 'setTimerTimeout', ''),
  withState('textTournament', 'setTextTournament', ''),
  withState('tournamentUsers', 'setTournamentUsers', null),
  withHandlers({
    goToRules: props => () => {
      props.setTimerStart(true);
      props.navigation.navigate('GameRules');
    },
  }),
  lifecycle({
    async componentDidMount() {
      const { tournamentData } = await this.props.getCountUsersTournament();
      const tournamentUsers = await this.props.getTournamentTable({
        round: this.props.round,
        status: games.UserStatusWait,
      });
      this.props.setTournamentUsers(tournamentUsers);
      this.props.onlineTournamentTable({
        tournamentData,
        updateUsers: this.props.setTournamentUsers,
        updateText: this.props.setTextTournament,
      });
    },
  }),
);

export default enhance(TournamentTableScreen);
