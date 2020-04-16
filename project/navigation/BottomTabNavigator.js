import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import Profile from '../screens/Profile'
import AddContact from '../screens/AddContact'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Contacts',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="ios-contacts" />,
        }}
      />
      <BottomTab.Screen
        name="add"
        component={AddContact}
        options={{
          title: 'Add Contact',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add" />,
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-person" />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

  switch (routeName) {
    case 'home':
      return 'Contacts'
    case 'profile':
      return 'Profile'
    case 'add':
      return 'Add New Contact'
  }
}
