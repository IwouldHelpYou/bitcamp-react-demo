import React, { useState } from 'react';
import ButtonUser from '../../components/ButtonUser';
import {useLocation, useHistory } from 'react-router-dom';

const UpdateUser = () => {


    const location = useLocation();
    const { user } = location.state;

    console.log("updateUser, 넘어온 데이터는",user);
    
    const [userData, setUserData] = useState(user);

    const handleChange = (e) => {

        const {name,value} = e.target;
        console.log(e.target)
        console.log(name,value);

        setUserData( x => ({
            ...x, 
            [name]:value
        }));

        console.log(userData);
    };


    return (
        <div style={{ width: '70%', margin: '100px auto' }}>
        <div className="container">
            <div className="page-header">
            <h3 className="text-info">회원정보수정</h3>
            <h5 className="text-muted">내 정보를 <strong className="text-danger">최신정보로 관리</strong>해 주세요.</h5>
            </div>

            <form className="form-horizontal" >
            <div className="form-group">
                <label htmlFor="userId" className="col-sm-2 control-label">아 이 디</label>
                <div className="col-sm-4">
                <input type="text" className="form-control" id="userId" name="userId" value={userData.userId} readOnly />
                <span id="helpBlock" className="help-block">
                    <strong className="text-danger">아이디는 수정불가</strong>
                </span>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="userName" className="col-sm-2 control-label">이름</label>
                <div className="col-sm-4">
                <input type="text" className="form-control" id="userName" name="userName" value={userData.userName} onChange={handleChange} placeholder="변경회원이름" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="addr" className="col-sm-2 control-label">주소</label>
                <div className="col-sm-4">
                <input type="text" className="form-control" id="addr" name="addr" value={userData.addr} onChange={handleChange} placeholder="변경주소" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="phone" className="col-sm-2 control-label">휴대전화번호</label>
                <div className="col-sm-2">
                <select className="form-control" name="phone1" id="phone1" value={userData.phone} onChange={handleChange}>
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="email" className="col-sm-2 control-label">이메일</label>
                <div className="col-sm-4">
                <input type="text" className="form-control" id="email" name="email" value={userData.email} onChange={handleChange} placeholder="변경이메일" />
                </div>
            </div>

            </form>

            <hr/>
        </div>
            <ButtonUser flagUserUpdateButton = {false} flagUserUpdateConfirmButton={true}/>
        </div>
    );
};

export default UpdateUser;
