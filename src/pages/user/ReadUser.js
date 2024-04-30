import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {Container, Col, Row, Form, Table} from 'react-bootstrap';
import ButtonUser from '../../components/ButtonUser';

const ReadUser = () => {

  const initList =
    {
      userId : 'test01',
      userName : '테스트',
      addr : '테스트주소',
      phone : '010-4242-4242',
      email : 'test@naver.com',
      regDate : '24-11-11'
    }

  console.log(initList);
 
  const [user, setUser] = useState(initList);

  console.log(user); 

  console.log("유저목록조회 컴포넌트");

  useEffect(()=>{
      console.log("유저목록조회 서버요청");
      axiosReadUser();
  },[])

  const axiosReadUser = () => {
    try{
      axios.post('http://192.168.0.13:55747/user/json/ReadUser',{
        //userNo 넣기
    })
    .then((res)=>{
      console.log(res.data);
      setUser(res.data.list);
    })
    }catch(e){
      console.log(e);
    }
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ width: '70%', margin: '100px auto' }}>

      <Container>

      <div>
        <h3> 유저목록조회</h3>
      </div>

      <Table>
        
      <tbody>
      
      <tr>
        <td className="ct_write"><Row><Col xs={4} md={8}><strong>아이디</strong></Col></Row></td>
        <td>{user.userId}</td>
      </tr>
      
      <tr>
        <td className="ct_write"><Row><Col xs={4} md={8}><strong>이름</strong></Col></Row></td>
        <td>{user.userName}</td>
      </tr>
      
      <tr>
        <td className="ct_write"><Row><Col xs={4} md={8}><strong>주소</strong></Col></Row></td>
        <td>{user.addr}</td>
      </tr>
      
      <tr>
        <td className="ct_write"><Row><Col xs={4} md={8}><strong>휴대전화번호</strong></Col></Row></td>
        <td>{user.phone}</td>
      </tr>
      
      <tr>
        <td className="ct_write"><Row><Col xs={4} md={8}><strong>이메일</strong></Col></Row></td>
        <td>{user.email}</td>
      </tr>

      <tr>
        <td className="ct_write"><Row><Col xs={4} md={8}><strong>가입일자</strong></Col></Row></td>
        <td>{user.regDate}</td>
      </tr>
        </tbody>
        </Table>

      </Container>

      <ButtonUser userVO={user} flagUserUpdateButton={true}/>

    </div>
    
    

  );
};

export default ReadUser;
