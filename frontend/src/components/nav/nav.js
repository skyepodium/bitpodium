import React from 'react';
import styles from './nav.css';


class Nav extends React.Component {
    render(){

        return (
            <div id="nav_all">
                <div id="nav">
                    <a id="nav_name" href="/">Bitpo</a>
                    <div id="nav_box">
                        <div id="nav_intro">소개</div>
                        <div id="nav_rank">랭킹</div>
                        <div id="nav_login">로그인</div>
                    </div>
                    
               </div>
            </div>
        );
    }
}

export default Nav;