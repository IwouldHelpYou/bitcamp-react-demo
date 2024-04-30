import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListUser = () => {
  const [list, setList] = useState([]);
  const [searchCondition, setSearchCondition] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUserCount, setTotalUserCount] = useState(0);

  useEffect(() => {
    // API 호출하여 사용자 목록 가져오기
    const fetchUserList = async () => {
      try {
        const response = await axios.post(`http://192.168.0.13:55747/user/json/listUser`,{
          search : {
            currentPage : currentPage,
            searchCondition : searchCondition,
            searchKeyword : searchKeyword,
          }
        });
        
        console.log(response);
        setList(response.data.list);
        setTotalUserCount(response.data.resultPage.totalCount);

      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };
    fetchUserList();
  }, [currentPage, searchCondition, searchKeyword]);

  const handleSearch = () => {
    setCurrentPage(1);
  };

  const handleUserClick = (userId) => {
    // AJAX를 사용하여 회원 정보 가져오기
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(`/user/json/getUser/${userId}`);
        const userData = response.data;
        // 회원 정보를 표시할 수 있는 방법으로 처리
        console.log(userData);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    fetchUserInfo();
  };

  return (
    <div style={{ width: '70%', margin: '100px auto' }}>
      <div className="container">
        <div className="page-header text-info">
          <h3>회원목록조회</h3>
        </div>
        <div className="row">
          <div className="col-md-6 text-left">
            <p className="text-primary">
              전체 {totalUserCount} 건수, 현재 {currentPage} 페이지
            </p>
          </div>
          <div className="col-md-6 text-right">
            <form className="form-inline">
              <div className="form-group">
                <select
                  className="form-control"
                  value={searchCondition}
                  onChange={(e) => setSearchCondition(e.target.value)}
                >
                  <option value="0">회원ID</option>
                  <option value="1">회원명</option>
                </select>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="searchKeyword"
                  placeholder="검색어"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
              <button type="button" className="btn btn-default" onClick={handleSearch}>
                검색
              </button>
              <input type="hidden" id="currentPage" value={currentPage} />
            </form>
          </div>
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th align="center">No</th>
              <th align="left">회원 ID</th>
              <th align="left">회원명</th>
              <th align="left">이메일</th>
              <th align="left">간략정보</th>
            </tr>
          </thead>
          <tbody>
            {list.map((user, index) => (
              <tr key={index}>
                <td align="center">{index + 1}</td>
                <td align="left">{user.userId}</td>
                <td align="left">{user.userName}</td>
                <td align="left">{user.email}</td>
                <td align="left" title="Click : 회원정보 확인">
                  <i
                    className="glyphicon glyphicon-ok"
                    onClick={() => handleUserClick(user.userId)}
                    id={user.userId}
                  ></i>
                  <input type="hidden" value={user.userId} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUser;
