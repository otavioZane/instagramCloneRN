import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faImage} from '@fortawesome/free-regular-svg-icons';
import {faCameraRetro} from '@fortawesome/free-solid-svg-icons';
import style from './StyleSheet'

export default class Toolbar extends React.Component {
  render() {
    return (
      <View style={style.container}>

        <StatusBar backgroundColor='#bc2a8d' />

        <FontAwesomeIcon
          color="#bc2a8d"
          icon={faCameraRetro}
          size={32}
          style={style.icon} />

        <Text style={style.textTitle}>
          InstagramClone
        </Text>
      </View>
    );
  }
}
