import React, { useState } from 'react';

const AddUser = () => {
  const [formData, setFormData] = useState({
    userId: '',
    password: '',
    passwordConfirm: '',
    userName: '',
    ssn: '',
    addr: '',
    phone1: '010',
    phone2: '',
    phone3: '',
    email: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddUser = () => {
    const { userId, password, passwordConfirm, userName, ssn, addr, phone1, phone2, phone3, email } = formData;

    if (!userId) {
      alert('아이디를 입력해주세요.');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }
    if (!userName) {
      alert('이름을 입력해주세요.');
      return;
    }
    // 주민번호 유효성 검사 등은 여기에 추가합니다.

    // 회원가입 API 호출 등의 로직을 수행합니다.
  };

  const handleCancel = () => {
    setFormData({
      userId: '',
      password: '',
      passwordConfirm: '',
      userName: '',
      ssn: '',
      addr: '',
      phone1: '010',
      phone2: '',
      phone3: '',
      email: '',
    });
  };

  return (
    <div>
      <h1>회원가입</h1>
      <table>
        <tbody>
          <tr>
            <td>아이디</td>
            <td>
              <input type="text" name="userId" value={formData.userId} onChange={handleInputChange} />
              {/* <button onClick={handleCheckDuplication}>ID 중복확인</button> */}
            </td>
          </tr>
          <tr>
            <td>비밀번호</td>
            <td><input type="password" name="password" value={formData.password} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td>비밀번호 확인</td>
            <td><input type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td>이름</td>
            <td><input type="text" name="userName" value={formData.userName} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td>주민번호</td>
            <td><input type="text" name="ssn" value={formData.ssn} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td>주소</td>
            <td><input type="text" name="addr" value={formData.addr} onChange={handleInputChange} /></td>
          </tr>
          <tr>
            <td>휴대전화번호</td>
            <td>
              <select name="phone1" value={formData.phone1} onChange={handleInputChange}>
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              <input type="text" name="phone2" value={formData.phone2} onChange={handleInputChange} /> -
              <input type="text" name="phone3" value={formData.phone3} onChange={handleInputChange} />
            </td>
          </tr>
          <tr>
            <td>이메일</td>
            <td><input type="text" name="email" value={formData.email} onChange={handleInputChange} /></td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleAddUser}>가입</button>
      <button onClick={handleCancel}>취소</button>
    </div>
  );
};

export default AddUser;
