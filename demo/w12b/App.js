import React from 'react'
import { StyleSheet, Text, View, Button, ListView, TextInput } from 'react-native'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.rows = ['this is 1', 'this is 2', 'this is 3']
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      content: 'Hello world!',
      dataSource: ds.cloneWithRows(this.rows),
      currentItem: 3
    }
  }

  onPressHandler (e) {
    console.log('Clicked!')
    console.log(this.state)
    this.setState({ content: 'Hello React Native world!' })
    this.rows.push('new data')
    this.setState({ dataSource: this.state.dataSource.cloneWithRows([this.rows]) })
    console.log(this.state)
  }

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Enter a new task:</Text>
        <TextInput></TextInput>
        <Button title='Click Me' onPress={(e) => this.onPressHandler(e)}></Button>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View>
              <Button title="Complete"></Button>
              <Text key={rowData.id}>{rowData}</Text>
            </View>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
