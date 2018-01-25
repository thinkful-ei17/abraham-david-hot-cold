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
      randNum: Math.floor(Math.random() * (100) ) + 1
    };
  }
    
  reset() {
    this.setState({
      inputList: [],
      randNum: Math.floor(Math.random() * (100) ) + 1
    });
  }

  // hotOrCold(){
  //   let distance = this.state.inputList[this.state.inputList.length-1] - this.state.randNum;
  //   if(Math.abs(distance) <=5) {console.log('HOT');}
  //   else { console.log('COLD');}
  // }

  render() {
    if (this.state.inputList.indexOf(this.state.randNum.toString())!==-1) {
      console.log('number found!');
    }

    let distance = this.state.inputList[this.state.inputList.length-1] - this.state.randNum;
    if(Math.abs(distance) <=5) {console.log('HOT');}
    else { console.log('COLD');}

    return (
            <div>
                <Header resetGame={() => this.reset()}/> 
                <GuessSection onSubmit={inputNum=> this.setState({inputList: [...this.state.inputList, inputNum]})} feedback="Make your guess!" />
                <GuessCount count={this.state.inputList.length} />
                <GuessList guesses={this.state.inputList} />
            </div>
        );
  }
}

