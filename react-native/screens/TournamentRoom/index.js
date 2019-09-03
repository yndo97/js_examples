import { connect } from 'react-redux';
import { compose, lifecycle, withState } from 'recompose';
import TournamentRoomScreen from './TournamentRoom';
import { tournamentOperations } from '../../modules/tournament';

const mapDispatchToProps = {
  getCountUsersTournament: tournamentOperations.getCountUsersTournament,
  userConnectToRoom: tournamentOperations.userConnectToRoom,
  joinTournament: tournamentOperations.joinTournament,
  canUserJoin: tournamentOperations.canUserJoin,
};

const enhance = compose(
  connect(null, mapDispatchToProps),
  withState('tournament', 'setTournament', null),
  withState('join', 'setJoin', true),
  withState('textTournament', 'setTextTournament', ''),
  lifecycle({
    async componentDidMount() {
      const { tournamentData } = await this.props.getCountUsersTournament();
      this.props.setTournament(tournamentData);
      this.props.userConnectToRoom({
        roomInfo: tournamentData,
        setTextTournament: this.props.setTextTournament,
      });
    },
  }),
);

export default enhance(TournamentRoomScreen);
