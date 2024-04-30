import React from 'react';

const LoginBar = () => {

    const loginUser = JSON.parse(sessionStorage.getItem('쿠키'));
    return (
        <div>
            { loginUser? loginUser.userId : '유저없음' }
        </div>
    );
};

export default LoginBar;