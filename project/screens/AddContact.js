import * as React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Input, Button } from 'react-native-elements'

export default class AddContact extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      submitDisabled: true,
      contactName: '',
      contactNumber: ''
    }
    this.focusListener = props.navigation.addListener('focus', () => this.setState({ contactName: '', contactNumber: '' }))
  }

  handleNameInput (text) {
    if (text.length > 0) {
      this.setState({ contactName: text })
    } else {
      this.setState({ submitDisabled: true })
    }
  }

  handleNumInput (text) {
    if (this.state.contactName.length > 0 && text.length > 0) {
      this.setState({
        submitDisabled: false,
        contactNumber: text
      })
    } else {
      this.setState({ submitDisabled: true })
    }
  }

  add () {
    fetch('http://plato.mrl.ai:8080/contacts/add', {
      method: 'POST',
      headers: {
        API: 'botts',
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({ name: this.state.contactName, number: this.state.contactNumber })
    })
      .then(res => res.json())
      .then(body => {
        if (!body.error) {
          this.setState({ contactName: '', contactNumber: '' })
          this.props.navigation.navigate('home')
        }
      })
  }

  render () {
    return (
      <>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={{ margin: 10 }}>Name</Text>
          <Input
            placholder="Name"
            onChangeText={text => this.handleNameInput(text)}
          />
          <Text style={{ margin: 10 }}>Number</Text>
          <Input
            placholder='Number'
            onChangeText={text => this.handleNumInput(text)}
          />
        </ScrollView>
        <Button title='Add Contact' onPress={() => this.add()} disabled={this.state.submitDisabled} />
        <Button title='Back' buttonStyle={{ backgroundColor: '#ff483b' }} onPress={() => this.props.navigation.navigate("home")} />
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
})