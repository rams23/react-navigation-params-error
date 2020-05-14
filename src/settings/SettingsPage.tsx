import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {HOME_TAB, PROFILE_SCREEN} from '../constants';

type Props = {};

const SettingsPage: React.FC<Props> = ({}) => {
  const {params} = useRoute();

  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SettingsPage</Text>
      <Text>params: {JSON.stringify(params, undefined, 4)}</Text>

      <View style={{marginTop:20}}>
        <Button
          title="Navigate to Profile"
          onPress={() => navigation.navigate(HOME_TAB, {
            screen: PROFILE_SCREEN
          })}
        />
      </View>

      <View style={{marginTop:20}}>
        <Button
          title="Navigate to Profile with params"
          onPress={() => navigation.navigate(HOME_TAB, {
            screen: PROFILE_SCREEN,
            params: {
              foo: 'bar'
            }
          })}
        />
      </View>
    </View>
  );
};

SettingsPage.displayName = 'SettingsPage';

export default SettingsPage;
