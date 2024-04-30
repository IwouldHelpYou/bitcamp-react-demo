import React, { useState } from 'react';

import axios from 'axios';
import { useHistory } from 'react-router-dom';

const LoginView = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { userId, password } = formData;
    if (!userId || !password) {
      alert('아이디와 패스워드를 입력하세요.');
      return;
    }
    // 서버로 로그인 요청 보내기

    axiosLoginPost();
    console.log('로그인 요청:', formData);
  };

  // 쿠키 가져옴 (라이브러리로 대체함)
  function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";  
  }

  const axiosLoginPost = () => {
    try{
        axios.post(`http://192.168.0.13:55747/user/json/login`,{
          userId : formData.userId,
          password: formData.password
        },{withCredentials:true})
        .then((res)=>{
            console.log("response",res);
            // 받은 정보를 sessionstorage 저장하던가 하기
            const cookies = res.headers['set-cookie'];
            console.log(cookies);
            console.log(res.headers);

            const user = {
              userRole : res.data.role,
              userId : res.data.userId
            }
            sessionStorage.setItem('쿠키', JSON.stringify(user));
            console.log(sessionStorage.getItem('쿠키'));
            window.location.href="/";
        })
    }catch(e){
        console.log(e);
    }
}

  return (
    <div style={{ width: '70%', margin: '100px auto' }}>
      <div className="container">
        <div className="col-md-offset-3 col-md-6 mx-auto">
          <div>
            <h1 className="text-center">로 &nbsp;&nbsp;그 &nbsp;&nbsp;인</h1>
            <form className="form-horizontal" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="userId" className="col-sm-3 control-label">아 이 디</label>
                <div className="col-sm-6">
                  <input type="text" className="form-control" name="userId" id="userId" placeholder="아이디" onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password" className="col-sm-3 control-label">패 스 워 드</label>
                <div className="col-sm-6">
                  <input type="password" className="form-control" name="password" id="password" placeholder="패스워드" onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-3 col-sm-6 text-center">
                  <button type="submit" className="btn btn-primary">로 &nbsp;그 &nbsp;인</button>
                  <a className="btn btn-primary btn" href="/user/addUser" role="button">회 &nbsp;원 &nbsp;가 &nbsp;입</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
