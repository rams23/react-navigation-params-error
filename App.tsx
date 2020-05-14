import React from 'react';
import {StatusBar,} from 'react-native';

import {NavigationContainer, useLinking} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {config} from './src/deepLinkingConfig';
import HomeStack from './src/home/HomeStack';
import SettingsStack from './src/settings/SettingsStack';
import {HOME_TAB, SETTINGS_TAB} from './src/constants';

declare const global: { HermesInternal: null | {} };

const Tab = createBottomTabNavigator();

const App = () => {

  const ref = React.useRef();

  const {getInitialState} = useLinking(ref, {
    prefixes: ['myapp://'],
    config
  });

  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  React.useEffect(() => {
    getInitialState()
      .catch(() => {
      })
      .then(state => {
        if (state !== undefined) {
          setInitialState(state);
        }
        console.debug('initialState', state);

        setIsReady(true);
      });
  }, [getInitialState]);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer
        initialState={initialState}
        ref={ref}
        onStateChange={(state) => console.debug('navigation state', state)}
      >
        <Tab.Navigator>
          <Tab.Screen
            name={HOME_TAB}
            component={HomeStack}
          />
          <Tab.Screen
            name={SETTINGS_TAB}
            component={SettingsStack}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


export default App;
