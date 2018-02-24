import React from 'react';
import Nav from '../components/nav/nav';
import MainTitle from '../components/main_page/main_title/main_title';
import PriceTitle from '../components/main_page/price_title/price_title';
import CoinList from '../components/main_page/coin_list/coin_list';



class App extends React.Component {
    render(){

        return (
            <div>
                <Nav />
                <MainTitle />
                <PriceTitle />
                <CoinList />
            </div>
        );
    }
}

export default App;