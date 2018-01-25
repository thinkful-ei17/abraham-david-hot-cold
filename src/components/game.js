import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
        
    this.state =  {
      inputList: [],
      randNum: Math.floor(Math.random() * (100) ) + 1,
      feedback: 'Make your guess!',
      isDisabled: false
    };
  }
    
  reset() {
    this.setState({
      inputList: [],
      randNum: Math.floor(Math.random() * (100) ) + 1,
      feedback: 'Make your guess!',
      isDisabled: false
    });
  }

  // hotOrCold(){
  //   let distance = this.state.inputList[this.state.inputList.length-1] - this.state.randNum;
  //   if(Math.abs(distance) <=5) {console.log('HOT');}
  //   else { console.log('COLD');}
  // }

  submitAnswer(inputNum) {
    console.log('submitanswer called');
    let fb = '';
    let distance = Math.abs(inputNum - this.state.randNum);
    let disabled = false;
    if (distance === 0) {fb = 'You won.'; disabled = true;}
    else if (distance <= 5) {fb = 'SUPER HOT'}
    else if (distance <= 10) {fb = 'HOT'; console.log('should be hot')}
    else {fb = 'COLD'; console.log('should be cold')}   
    this.setState({
        inputList: [...this.state.inputList, inputNum],
        feedback: fb,
        isDisabled: disabled
        });
  }

  render() {
    if (this.state.inputList.indexOf(this.state.randNum.toString())!==-1) {
      console.log('number found!');
    }
    

    return (
            <div>
                <Header resetGame={() => this.reset()}/> 
                <GuessSection onSubmit={inputNum=> {
                    this.submitAnswer(inputNum)
                }} feedback={this.state.feedback} isDisabled={this.state.isDisabled}/>
                <GuessCount count={this.state.inputList.length} />
                <GuessList guesses={this.state.inputList} />
            </div>
        );
  }
}

// need correct feedback (Make your guess!, HOT, COLD, You Won. Click new game to play again)
// on correct guess remove 'guess' button
// user can't repeat same number
// show info-modal when 'what?' button is clicked