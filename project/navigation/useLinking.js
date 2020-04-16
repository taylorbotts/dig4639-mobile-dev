import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'Root',
        screens: {
          Home: 'contacts',
          AddContact: 'add',
          Profile: 'profile'
        },
      },
    },
  });
}
