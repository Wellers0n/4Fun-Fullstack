/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';

if (__DEV__) {
    require('react-devtools');
}

AppRegistry.registerComponent('app', () => App);
