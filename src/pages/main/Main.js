import React from 'react';

import Jumbotron from '../../components/jumbotron';

import Cookies from 'js-cookie';


const Main = () => {
    return (
        <div>
            <Jumbotron/>           
            {Cookies.get('쿠키이름')} 
            {Cookies.get('user')} 
            {Cookies.get('JSESSIONID')} 
        </div>
    );
};

export default Main;