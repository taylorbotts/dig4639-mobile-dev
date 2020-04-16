import { Ionicons } from '@expo/vector-icons'
import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Card } from 'react-native-elements'

export default class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      numContacts: ''
    }
  }

  componentDidMount () {
    fetch('http://plato.mrl.ai:8080/profile', {
      method: 'GET',
      headers: {
        API: 'botts',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    })
      .then(res => res.json())
      .then(body => {
        this.setState({ userName: body.name, numContacts: body.count })
      })
  }

  render () {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {
          (this.state.userName !== '')
            ? <Card title={this.state.userName}>
              <Text style={{ textAlign: 'center' }}>Number of Contacts: {this.state.numContacts}</Text>
            </Card>
            : null
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  },
  contentContainer: {
    paddingTop: 15
  }
})
