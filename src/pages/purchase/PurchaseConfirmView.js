import React from 'react';

import {useState} from 'react';

const PurchaseConfirmView = () => {
    const initProduct = { 
        prodNo : 1,
        buyer: { userId : 'test' },
        paymentOption : 1,
        receiverName : 'receiver',
        receiverPhone: '010-4242-4242',
        divyAddr: '주소',
        divyRequest: '문의사항',
        divyDate: '24-01-01'
    }

    const initPurchase = {
        receiverName : '조성진',
    }

    const [product,setProduct] = useState(initProduct);
    const [purchase,setPurchase] = useState(initPurchase); 

    return (
        <div style={{ width: '70%', margin: '100px auto' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-offset-2 col-md-8">
                        <div className="receipt">
                            <div className="receipt-title">구매 영수증</div>
                            <div className="receipt-content">
                                <p>다음과 같이 구매가 되었습니다.</p>
                                <table>
                                    <tbody>
                                        <tr>
                                            <th>물품번호</th>
                                            <td>{product.prodNo}</td>
                                        </tr>
                                        <tr>
                                            <th>구매자아이디</th>
                                            <td>{purchase.buyer && <td>{purchase.buyer.userId}</td>}</td>
                                        </tr>
                                        <tr>
                                            <th>구매방법</th>
                                            <td>{purchase.paymentOption === 1 ? "현금구매" : "신용구매"}</td>
                                        </tr>
                                        <tr>
                                            <th>구매자이름</th>
                                            <td>{purchase.receiverName}</td>
                                        </tr>
                                        <tr>
                                            <th>구매자연락처</th>
                                            <td>{purchase.receiverPhone}</td>
                                        </tr>
                                        <tr>
                                            <th>구매자주소</th>
                                            <td>{purchase.divyAddr}</td>
                                        </tr>
                                        <tr>
                                            <th>구매요청사항</th>
                                            <td>{purchase.divyRequest}</td>
                                        </tr>
                                        <tr>
                                            <th>배송희망일자</th>
                                            <td>{purchase.divyDate}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div className="receipt-action">
                                <a href="/purchase/payment" className="btn btn-primary">결제하러가기</a>
                                <button type="button" className="btn btn-secondary" onClick={() => window.history.back()}>이전</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseConfirmView;