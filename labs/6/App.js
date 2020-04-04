import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-elements'
import questions from './questions.json'

const TITLE_STATE = 0
const QUESTION_STATE = 1

export default class App extends React.Component {
  constructor (props) {
    super()
    this.state = {
      currentState: TITLE_STATE,
      currentQuestion: 0,
      score: 0
    }
  }

  nextQuestion (a) {
    if (a.correct) {
      this.setState({ score: this.state.score + 1 })
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }

  scoreMessage () {
    if (this.state.score / questions.length > 0.8) {
      return 'What are you a doctor or something? You really know your stuff!'
    } else if (this.state.score / questions.length >= 0.8) {
      return 'Good job! Keep washing your hands and quarantining you Corona Soldier!'
    } else {
      return 'I think you may need to spend the next 30 days in isolation watching YouTube tutorials on how to wash your hands.'
    }
  }

  render () {
    return (
      <Card containerStyle={styles.container}>
        {(this.state.currentState === TITLE_STATE)
          ? <>
            <Text style={styles.title}>The Corona Quiz 🦠</Text>
            <Text style={styles.text}>In this short quiz you will test your knowledge of the 2020 pandemic known as the "coronavirus".</Text>
            <br /><br />
            <Button title="START QUIZ" buttonStyle={styles.button} onClick = {() => this.setState({ currentState: QUESTION_STATE })}/>
          </>
          : (this.state.currentQuestion < questions.length)
            ? <>
              <Text style={styles.title}>{questions[this.state.currentQuestion].question}</Text>
              <View>
                {questions[this.state.currentQuestion].answers.map((ans, i) => {
                  return <Button title={ans.text} key={i} buttonStyle={styles.button} onClick={() => this.nextQuestion(ans)} />
                })}
              </View>
            </>
            : <>
              <Text style={styles.title}>Quiz Done!</Text>
              <Text style={styles.title}>Score: {this.state.score}/{questions.length}</Text>
              <Text style={styles.text}>{this.scoreMessage()}</Text>
              <Button title="Start Over" buttonStyle={styles.button} onClick={() => this.setState({ currentState: TITLE_STATE, currentQuestion: 0, score: 0 })}/>
            </>
        }
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 500,
    maxWidth: 700,
    margin: 'auto',
    padding: 50,
    textAlign: 'center'
  },
  text: {
    fontSize: 26,
    marginBottom: 30
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    paddingBottom: 30
  },
  button: {
    backgroundColor: '#34830b',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 40,
    paddingRight: 40,
    margin: 15,
    fontWeight: '700'
  }

})
