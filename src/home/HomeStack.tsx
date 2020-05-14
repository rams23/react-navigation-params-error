import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import {HOMEPAGE_SCREEN, PROFILE_SCREEN} from '../constants';

type Props = {};
const MyStack = createStackNavigator();

const HomeStack: React.FC<Props> = ({}) => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen name={HOMEPAGE_SCREEN} component={HomePage} />
      <MyStack.Screen name={PROFILE_SCREEN} component={ProfilePage} />
    </MyStack.Navigator>
  );
};

HomeStack.displayName = 'HomeStack';

export default HomeStack;
