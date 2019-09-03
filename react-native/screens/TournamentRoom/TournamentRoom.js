import React from 'react';
import { FlatList, Text, View } from 'react-native';
import IconDot from '@expo/vector-icons/Octicons';
import PropTypes from 'prop-types';

import s from './styles';
import MainSubTitle from '../../components/mainSubTitle';
import MainTitle from '../../components/mainTitle';
import BtnGrey from '../../components/btnGrey';

const TournamentRoomScreen = ({
  textTournament, joinTournament, navigation, canUserJoin
}) => (
  <View style={s.main}>
    <View>
      <MainTitle style={s.MainTitle} text='Tournament Room' />
      <MainSubTitle style={s.MainSubTitle} text={textTournament} />
    </View>

    <View style={s.wrap}>
      <Text style={s.title}>Game Rules</Text>
      <FlatList
        data={[
            { key: 1, text: 'In each round you have one turn to record your time' },
            { key: 2, text: 'This tournament will last 24 minutes' },
            { key: 3, text: 'The top half fastest records will progress to the next round' },
            { key: 4, text: 'The tournament winner will win the prize' },
        ]}
        renderItem={({ item }) => (
          <View style={s.row}>
            <IconDot name='primitive-dot' size={20} color='#fff' />
            <Text style={s.rulesText}>{item.text}</Text>
          </View>
        )}
      />
    </View>
    <BtnGrey onPress={joinTournament} text='Join & Pay' />
  </View>
);

TournamentRoomScreen.propTypes = {
  textTournament: PropTypes.string.isRequired,
  canUserJoin: PropTypes.func,
  joinTournament: PropTypes.func,
  navigation: PropTypes.object,
};


export default TournamentRoomScreen;
