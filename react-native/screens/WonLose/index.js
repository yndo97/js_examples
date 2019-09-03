import { connect } from 'react-redux';
import { compose, withState, lifecycle, withHandlers, withPropsOnChange } from 'recompose';
import R from 'ramda';
import WonLoseScreen from './WonLose';
import { tournamentSelectors } from '../../modules/tournament';

const mapStateToProps = state => ({
  win: tournamentSelectors.getResultTournament(state),
});

const enhance = compose(
  connect(mapStateToProps),
  withState('activeModal', 'toggleModal', false),
  withState('labelButton', 'setLabelButton', 'Add Payment Details'),
  withState('activeModalBtn', 'toggleModalBtn', false),
  withState('name', 'setName', ''),
  withState('card', 'setCard', ''),
  withState('phoneNumber', 'setPhoneNumber', ''),
  withState('active', 'setIsActive', false),
  withHandlers({
    finishGame: props => () => {
      props.win ? props.toggleModal(!props.activeModal) : props.navigation.navigate('Home');
    },
  }),
  lifecycle({
    componentDidMount() {
      if (this.props.win === false) {
        this.props.setLabelButton('Take Me Home');
      }
    },
  }),
  withPropsOnChange(['name', 'card', 'phoneNumber'], props => {
    props.setIsActive(!R.isEmpty(props.phoneNumber) &&
      !R.isEmpty(props.card) &&
      !R.isEmpty(props.name));
  }),
);

export default enhance(WonLoseScreen);
