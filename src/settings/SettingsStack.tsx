import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {BLUETOOTH_SCREEN, SETTINGS_SCREEN} from '../constants';
import SettingsPage from './SettingsPage';
import BluetoothPage from './BluetoothPage';

type Props = {};
const MyStack = createStackNavigator();

const SettingsStack: React.FC<Props> = ({}) => {
  return (
    <MyStack.Navigator>
      <MyStack.Screen
        name={SETTINGS_SCREEN}
        component={SettingsPage}
      />
      <MyStack.Screen
        name={BLUETOOTH_SCREEN}
        component={BluetoothPage}
      />
    </MyStack.Navigator>
  );
};

SettingsStack.displayName = 'SettingsStack';

export default SettingsStack;
