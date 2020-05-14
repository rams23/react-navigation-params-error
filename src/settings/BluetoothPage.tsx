import React from 'react';
import {Text, View} from 'react-native';
import {useRoute} from '@react-navigation/native';

type Props = {};

const BluetoothPage: React.FC<Props> = ({}) => {
  const {params} = useRoute();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>BluetoothPage</Text>
      <Text>params: {JSON.stringify(params, undefined, 4)}</Text>
    </View>
  );
};

BluetoothPage.displayName = 'BluetoothPage';

export default BluetoothPage;
