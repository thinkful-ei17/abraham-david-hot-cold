import React from 'react';

import GuessForm from './guess-form';

import './guess-section.css';

export default function GuessSection(props) {
  return (
        <section>
            <h2 id="feedback">{props.feedback}</h2>
            <GuessForm onSubmit={inputNum=>{
                console.log(props.isDisabled);
                props.onSubmit(inputNum)}} 
                isDisabled={props.isDisabled}/>
        </section>
    );
}

