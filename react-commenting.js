// ASSESSMENT 3: React Commenting Challenge
// Add comments to the React Robot Listening Challenge
// Explain the purpose and functionality of the code directly below the 10 comment tags


// App.js
class App extends Component{
  constructor(){
    super()
    // 1.Components use state in their constructors to remember things, so this.state is where we want to store the user's input and it will change once we setState from an empty string to whatever the user puts in.
    this.state = {
      userInput: "",
    }
  }

  robot = (e) => {
    // 2. this.setState is changing what we have in state from an empty string to whatever the user types in, this is triggered by the event of someone typing something into the box.  The value is whatever they type.
    this.setState({ userInput: e.target.value })
  }

  render(){
    // 3. We are setting userInput as a variable that equals this.state and making sure that is rendered on the screen, thus changing from empty " " to whatever they are typing.
    let { userInput } = this.state

    return(
      <div>
        <h1>Robot Challenge</h1>

        <h3>Enter text here:</h3>
        <input
          {/* 4. onChange is referring to when the userInput changes from an empty string to them typing, to call on the robot method, which says in the event of someone typing something in, to change this.setState to whatever they are typing */}
          onChange={ this.robot }
          {/* 5. value is whatever the user types in, referring to the key value: pair in this.state */}
          value={ userInput }
        />

        <div>
          {/* 6. This is calling on the nested component, GoodRobot and all of its contents */}
          <GoodRobot
            {/* 7. This allows the GoodRobot component to call on userInput by using this.props within the GoodRobot component */}
            userInput={ userInput }
          />
          <BadRobot
            userInput={ userInput }
          />
          <KanyeBot
            userInput={ userInput }
          />
        </div>
      </div>
    )
  }
}
export default App


// GoodRobot.js
class GoodRobot extends Component{
  render(){
    return(
      // 8. This div contains what the component GoodRobot will output on screen.  We have a title "Good Robot" and the prompt it will return which is exactly what the user types in between "I hear you saying" and "Is that correct?".
      <div>
        <h3>Good Robot</h3>
        {/* 9. The prompt that the nested component GoodRobot will return when the user inputs text.  It will be exactly whatever the user types in the box, indicated by the {}, and it uses props which was passed down in the App.js's return div section where we have userInput = { userInput } */}.
        <h4>I hear you saying { this.props.userInput }. Is that correct?</h4>
      </div>
    )
  }
}
// 10. Allows GoodRobot to be imported into App.js.  
export default GoodRobot
