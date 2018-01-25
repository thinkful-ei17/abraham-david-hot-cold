import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
  return (
        <form onSubmit={(e)=> {
          e.preventDefault();
          console.log(document.querySelector('[name=userGuess]').value);
          props.onSubmit(document.querySelector('[name=userGuess]').value);
          document.querySelector('[name=userGuess]').value='';
          console.log(props.isDisabled);
        //   props.isDisabled ? disabled : ''
        }
            }>
            <input disabled={props.isDisabled} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input disabled={props.isDisabled} type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
}

