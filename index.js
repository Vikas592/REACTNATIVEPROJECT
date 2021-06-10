/**
 * @format
 */

import { AppRegistry } from 'react-native';
import NotSubmittedApp from './src/containers/NotSubmittedApp';
// import ToDoApp from './src/containers/ToDoApp';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => NotSubmittedApp);
