import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import IconClose from '@expo/vector-icons/FontAwesome';
import T from 'prop-types';

import s from './styles';
import MainTitle from '../../components/mainTitle';
import { images } from '../../constants/images';
import BtnGrey from '../../components/btnGrey';
import InputInfo from '../../components/inputInfo';

const WonLoseScreen = ({
  active,
  win,
  activeModal,
  toggleModal,
  labelButton,
  finishGame,
  navigation,
  name,
  card,
  phoneNumber,
  setName,
  setCard,
  setPhoneNumber,
}) => (
  <View style={s.main}>
    <Modal
      isVisible={activeModal}
      style={s.modalStyle}
    >
      <View style={s.modalWrap}>
        <View style={s.inputsBlock}>
          <View>
            <MainTitle style={s.mainTitle} text='Payment Details' />
            <InputInfo
              placeholderText='Name (in Arabic)'
              type='default'
              style={s.inputInfo}
              onChange={setName}
              value={name}
            />
            <InputInfo
              placeholderText='IBAN Number'
              type='numeric'
              style={s.inputInfo}
              onChange={setCard}
              value={card}
            />
            <View style={s.inputPhone}>
              <InputInfo
                placeholderText='Phone number'
                type='phone-pad'
                onChange={setPhoneNumber}
                style={[s.inputInfo, s.inputInfoPhone]}
                value={phoneNumber}
              />
              <Text style={s.phoneCode}>+966</Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
    <MainTitle style={s.MainTitle} text={win ? 'You won!' : 'You lose'} />
    {
      win ?
        <Text style={[s.text, s.regular, s.paddingRight]}>
          <Text style={s.bold}>
            Congratulations!
          </Text>
          The tournament prize will be sent to your account.
        </Text>
      :
        <Text style={[s.text, s.regular, s.paddingRight]}>
          Better luck next time.
        </Text>
    }
    <Image
      source={win ? images.win.uri : images.lose.uri}
      style={[s.img, !win ? { width: 198, height: 198 } : null]}
    />
    {
      win ?
        <View style={s.round}>
          <Text style={[s.text, s.bold, s.roundCount]}>$5</Text>
        </View> : null
    }
    {
      win ?
        <Text style={[s.text, s.date]}>07:44am, 28 Jan 2018 </Text> : null
    }
    {
      !activeModal ?
        <BtnGrey onPress={finishGame} style={s.BtnGrey} active text={labelButton} />
        : null
    }
  </View>
);

WonLoseScreen.propTypes = {
  active: T.bool.isRequired,
  win: T.bool.win.isRequired,
  activeModal: T.bool.isRequired,
  toggleModal: T.func,
  labelButton: T.string,
  finishGame: T.func,
  name: T.string,
  card: T.string,
  phoneNumber: T.string,
  setName: T.func.isRequired,
  setCard: T.func.isRequired,
  setPhoneNumber: T.func.isRequired,
};

export default WonLoseScreen;
