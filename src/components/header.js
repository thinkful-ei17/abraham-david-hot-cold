import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
  return (
        <header>
            <TopNav displayModal={() => props.displayModal()} resetGame={() => props.resetGame()}/>
            <InfoModal isShowing={props.isShowing} displayModal={() => props.displayModal()}/> 
            <h1>HOT or COLD</h1>
        </header>
    );
}
