import React from 'react';
import { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

import ButtonProduct from '../../components/ButtonProduct';
import axios from 'axios';

function PurchaseView() {

    const history = useHistory();
    const location = useLocation();
    const { users, products } = location.state;
    console.log(users,products);


    const [purchaseVO, setPurchaseVO] = useState();


    const handleChange = (e) => {
        
        const {name,value} = e.target;
        setPurchaseVO( x => ({
            ...x, 
            [name]:value
        }));

    }

    // 구매확정하는함수
    const PurchaseProductButtonClick = async () => {
        console.log("상품구매시작");
        await axiosPurchaseproduct();
    }

    ////////////////미완성 (products.concat(purchaseVO))????????
    const axiosPurchaseproduct = () => {

        console.log("구매서버 넘겨줄정보", products.concat(purchaseVO));

        try{
            axios.post('http://192.168.0.13:55747/product/json/execPurchase', purchaseVO)
            .then((res)=>{
                console.log(res.data);
                history.push('/purchaseConfirmView');
            })
            }catch(e){
                console.log(e);
            }
    }

    return (

        <div style={{ width: '70%', margin: '100px auto' }}>

                <div className="container">
                    <input type="hidden" name="buyer.userId" value={users.userId} />
                    <input type="hidden" name="purchaseProd.prodNo" value={products.prodNo} />
                    <input type="hidden" name="purchaseProd.proTranCode" value="" />
                    
                    <div className="page-header">
                        <h3 className="text-info">상품정보조회</h3>
                        <h5 className="text-muted">상품 정보를 <strong className="text-danger">업데이트</strong>해 주세요.</h5>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>상품번호</strong></div>
                        <div className="col-xs-8 col-md-4">{products.prodNo}</div>
                    </div>	

                    <hr/>
                    
                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>상품명</strong></div>
                        <div className="col-xs-8 col-md-4">{products.prodName}</div>
                    </div>

                    <hr/>
                    
                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>상품상세정보</strong></div>
                        <div className="col-xs-8 col-md-4">{products.prodDetail}</div>
                    </div>

                    <hr/>
                    
                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>제조일자</strong></div>
                        <div className="col-xs-8 col-md-4">{products.regDate}</div>
                    </div>

                    <hr/>
                    
                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>가격</strong></div>
                        <div className="col-xs-8 col-md-4">{products.price}</div>
                    </div>

                    <hr/>
                    
                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>등록일자</strong></div>
                        <div className="col-xs-8 col-md-4">{products.regDate}</div>
                    </div>	

                    <hr/>
                    
                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>구매자아이디</strong></div>
                        <div className="col-xs-8 col-md-4">{users.userId}</div>
                    </div>	

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>구매방법</strong></div>
                        <div className="col-xs-8 col-md-4">
                            <select name="paymentOption" className="form-control"  onChange={handleChange} style={{ width: '100px' }}>
                                <option value="1" selected>현금구매</option>
                                <option value="2">신용구매</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>구매자이름</strong></div>
                        <div className="col-xs-8 col-md-4">
                            <input type="text" name="receiverName" className="form-control" onChange={handleChange} style={{ width: '100px' }} maxLength="20" />
                        </div>
                    </div>

                    <hr/>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>구매자연락처</strong></div>
                        <div className="col-xs-8 col-md-4">
                            <input type="text" name="receiverPhone" className="form-control" onChange={handleChange} style={{ width: '100px' }} maxLength="20" />
                        </div>
                    </div>

                    <hr/>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>구매자주소</strong></div>
                        <div className="col-xs-8 col-md-4">
                            <input type="text" name="divyAddr" className="form-control" onChange={handleChange} style={{ width: '100px' }} maxLength="20" />
                        </div>
                    </div>

                    <hr/>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>구매요청사항</strong></div>
                        <div className="col-xs-8 col-md-4">
                            <input type="text" name="divyRequest" className="form-control" onChange={handleChange} style={{ width: '100px' }} maxLength="20" />
                        </div>
                    </div>                        

                    <hr/>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>배송희망일자</strong></div>
                        <div className="col-xs-8 col-md-4">
                            <input type="text" name="divyDate" className="form-control" onChange={handleChange} style={{ width: '100px' }} maxLength="20" />
                        </div>
                    </div>

                    <hr/>

                    </div>
                
                <ButtonProduct flagPurchaseConfirmButton={true} AxiosPurchaseProductFunction={PurchaseProductButtonClick} />
        </div>
    );
};

export default PurchaseView;
