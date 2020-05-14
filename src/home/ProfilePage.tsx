import React from 'react';
import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';

type Props = {}

const ProfilePage: React.FC<Props> = ({}) => {
  const {params} = useRoute();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ProfilePage</Text>
      <Text>params: {JSON.stringify(params, undefined, 4)}</Text>
    </View>
  );
}

ProfilePage.displayName = 'ProfilePage';

export default ProfilePage;
