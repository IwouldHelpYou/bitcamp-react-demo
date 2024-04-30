import React from 'react';

import { useState, useEffect } from 'react';

const ListPurchase = () => {
    const [userList, setUserList] = useState([]); // 사용자 목록 상태
    const [totalRecords, setTotalRecords] = useState(0); // 전체 레코드 수 상태

    // 사용자 목록을 가져오는 비동기 함수
    const fetchUserList = async () => {
        try {
            const response = await fetch('/listUser.do');
            const data = await response.json();
            setUserList(data.result);
            setTotalRecords(data.result.length);
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    };

    // 컴포넌트가 마운트될 때 사용자 목록을 가져오는 함수 호출
    useEffect(() => {
        fetchUserList();
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 호출되도록 함

    return (
        <div style={{ width: '70%', margin: '100px auto' }}>
            <table className="table">
                <thead>
                    <tr>
                        <th align="center">No</th>
                        <th align="left">회원ID</th>
                        <th align="left">상품명</th>
                        <th align="left">주문자명</th>
                        <th align="left">주문자전화번호</th>
                        <th align="left">배송현황</th>
                        <th align="left">정보수정</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((item, index) => (
                        <tr
                            key={index}
                            className={`ct_list_pop ${
                                item.purchaseProd.proTranCode === '배송중'
                                    ? 'delivering'
                                    : ''
                            }`}
                        >
                            <td align="left">{index + 1}</td>
                            <td align="left">{item.userId}</td>
                            <td align="left">{item.purchaseProd.prodName}</td>
                            <td align="left">{item.receiverName}</td>
                            <td align="left">{item.receiverPhone}</td>
                            <td align="left">{item.purchaseProd.proTranCode}</td>
                            <td align="left">정보수정(구현중)</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListPurchase;