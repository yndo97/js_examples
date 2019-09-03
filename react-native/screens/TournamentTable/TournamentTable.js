import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import IconRight from '@expo/vector-icons/Entypo';
import IconDash from '@expo/vector-icons/Octicons';
import PropTypes from 'prop-types';

import s from './styles';
import MainTitle from '../../components/mainTitle';
import MainSubTitle from '../../components/mainSubTitle';
import { images } from '../../constants/images';
import typeGame from '../../constants/games';
import { formatTime } from '../../utils/timeHelper';

const TournamentTableScreen = ({
  navigation, goToRules, gameType, textTournament, tournamentUsers, round
}) => (
  <View style={s.main}>
    <Image
      source={
        gameType === typeGame.DifferenceGameType ?
          images.tournamentTableBg.uri :
          images.backgroundSudoku.uri
      }
      style={s.imgBg}
    />
    <MainTitle style={s.MainTitle} text={`Round ${round} `} />
    <MainSubTitle
      style={s.MainTitle}
      text={textTournament}
    />
    <TouchableOpacity onPress={goToRules} style={s.gameRulesRow}>
      <Text style={[s.gameRulesRowText, s.bold]}>GAME RULES</Text>
      <IconRight style={s.IconRight} name='chevron-small-right' size={30} color='#fff' />
    </TouchableOpacity>
    <View style={s.tournamentTable}>
      <Text style={[s.text, s.bold, s.tournamentTableText]}>Tournament Table</Text>
      <ScrollView>
        <FlatList
          data={tournamentUsers}
          renderItem={({ item }) => (
            <View style={s.tournamentItem}>
              <Text style={[s.text]}>{item.key}</Text>
              <Image source={images.someAvatar.uri} style={s.avatar} />
              <Text style={[s.text]}>{item.name}</Text>
              {
                item.timeElapsed &&
                <Text style={[s.text]}>
                  {formatTime(item.timeElapsed)}
                </Text>
              }
              {
                !item.timeElapsed && <IconDash style={[s.absolute]} name='dash' size={20} color='#fff' />
              }
            </View>
          )}
        />
      </ScrollView>
    </View>
  </View>
);

TournamentTableScreen.propTypes = {
  tournamentUsers: PropTypes.array.isRequired,
  textTournament: PropTypes.string.isRequired,
  goToRules: PropTypes.func,
  gameType: PropTypes.number.isRequired,
  round: PropTypes.number.isRequired,
};


export default TournamentTableScreen;
