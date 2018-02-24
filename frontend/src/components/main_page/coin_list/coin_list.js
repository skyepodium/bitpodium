import React from 'react';
import styles from './coin_list.css';

import axios from 'axios';

class CoinList extends React.Component {
/*
    componentDidMount() {
        let getNumber = () => {
            axios.get('https://api.korbit.co.kr/v1/ticker?currency_pair=btc_krw').then(response => {
               console.log(response);
            });
        }

        getNumber();
    }
*/


    render(){

        return (
            <div id="coin_list">

                <div className="coin">
                    <div className="coin_image">
                    </div>
                    <div className="coin_sub_info">
                        비트코인
                    </div>
                </div>

                <div className="coin">
                    <div className="coin_image">
                    </div>
                    <div className="coin_sub_info">
                        이더리움
                    </div>
                </div>

                <div className="coin">
                    <div className="coin_image">
                    </div>
                    <div className="coin_sub_info">
                        리플
                    </div>
                </div>

                <div className="coin">
                    <div className="coin_image">
                    </div>
                    <div className="coin_sub_info">
                        비트코인 캐시
                    </div>
                </div>

                <div className="coin">
                    <div className="coin_image">
                    </div>
                    <div className="coin_sub_info">
                        비트코인 캐시
                    </div>
                </div>

                <div className="coin">
                    <div className="coin_image">
                    </div>
                    <div className="coin_sub_info">
                        비트코인 캐시
                    </div>
                </div>

                <div id="clear_both">
                </div>

            </div>
        );
    }
}

export default CoinList;