import React from 'react';
import styles from './main_title.css';


class MainTitle extends React.Component {
    render(){

        return (
            <div id="main_box">
                <h1>
                    <span id="head_word1">Bitpodium</span>
                    <span id="head_word2">암호화폐 모의 거래를 한번</span>
                    <span id="head_word3">경험해보세요~</span>
                </h1>
            </div>
        );
    }
}

export default MainTitle;