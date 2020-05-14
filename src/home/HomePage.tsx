import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {HOME_TAB, PROFILE_SCREEN} from '../constants';
import {StackNavigationProp} from '@react-navigation/stack';

type Props = {};

const HomePage: React.FC<Props> = ({}) => {
  const {params} = useRoute();

  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomePage</Text>
      <Text>params: {JSON.stringify(params, undefined, 4)}</Text>
      <Button title="Navigate to Profile" onPress={()=>navigation.navigate(PROFILE_SCREEN)} />

    </View>
  );
};

HomePage.displayName = 'HomePage';

export default HomePage;
