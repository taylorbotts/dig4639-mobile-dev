import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const CONTACT_SCREEN = 0
const ADD_CONTACT_SCREEN = 1
const HEADERS = {
  'method': 'GET',
  'headers': {
    'API': 'botts',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      contacts: [],
      currentScreen: CONTACT_SCREEN,
      newContactName: '',
      newContactNum: ''
    }
    this.focusListener = props.navigation.addListener('focus', () => this.componentDidMount())
  }

  componentDidMount () {
    //const { contact } = this.props.route.params
    fetch('http://plato.mrl.ai:8080/contacts', HEADERS)
      .then(response => response.json())
      .then(result => {
        this.setState({
          contacts: result.contacts
        })
      })
  }

  addContact () {
    const newHeaders = {
      ...HEADERS,
      method: 'POST',
      body: JSON.stringify({ name: this.state.newContactName, number: this.state.newContactNum })
    }
    fetch('http://plato.mrl.ai:8080/contacts/add', newHeaders)
      .then(response => response.json())
      .then(() => this.setState({ currentScreen: CONTACT_SCREEN, newContactName: '', newContactNum: '' }))
    this.componentDidMount()
  }

  removeContact (p) {
    const delHeaders = {
      ...HEADERS,
      method: 'POST',
      body: JSON.stringify({ position: p })
    }
    fetch('http://plato.mrl.ai:8080/contacts/remove', delHeaders)
      .then(response => response.json())
      .then((body) => {
        if (!body.error) {
          const currentContacts = this.state.contacts.filter((v, i) =>
            (i !== p))
          this.setState({ contacts: currentContacts })
        }
      })
  }

  render () {
    return (
      <>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {this.state.contacts.map((contact, i) =>
            <Card key={i}
              title={
                <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10 }}>
                  <Text style={{ fontSize: 20 }}>{contact.name}</Text>
                  <View style={{ flexGrow: 1 }} />
                  <Text style={{ color: 'red', fontSize: 20, cursor: 'pointer' }} onPress={() => this.removeContact(i)}>&times;</Text>
                </View>
              }>
              <Text>{contact.number}</Text>
            </Card>
          )}
        </ScrollView>
      </>
    )
  }
}

HomeScreen.navigationOptions = {
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa'
  }
})
