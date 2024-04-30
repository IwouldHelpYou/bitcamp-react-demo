import React from 'react';
import {useState} from 'react';
import {useLocation, useHistory } from 'react-router-dom';

import axios from 'axios';

const UpdateProduct = () => {

    const history = useHistory();
    const location = useLocation();
    const { productVO } = location.state;

    //console.log("readProduct 에서 받은 productVO 데이터야", productVO);

    const [product,setProduct]=useState(productVO);

    //input내용 수정하면 동작
    const handleChange = (e) => {
        const {name,value} = e.target;
        console.log(e.target)
        console.log(name,value);

        setProduct( x => ({
            ...x, 
            [name]:value
        }));

        console.log(product);
    }

    const handleUpdateProduct = async () => {
        // 수정 버튼 클릭 시 실행될 함수
        console.log("수정하러감 product 데이터는",product);
        
        const updateProdNo = await axiosUpdateProduct();

        console.log("수정완료");

        history.push(`/ReadProduct?prodNo=${updateProdNo}`);
    };

    // 수정컨펌하기
    const axiosUpdateProduct = () => {

        console.log("서버에 업데이트 요청하는데이터 ",product);
        console.log("JSON stringify 버젼", JSON.stringify(product));
        console.log(typeof product, typeof JSON.stringify(product));
        
        try{
            axios.post(`http://192.168.0.13:55747/product/json/updateProduct`,{
                productIn : product
            })
            .then((res)=>{
                console.log('업데이트한 애', res.data);
                return res.data;
            })
        }catch(e){
            console.log(e);
        }        
    }

    return (

        <div style={{ width: '70%', margin: '100px auto' }}>

            <ul>
                    {Object.entries(productVO).map(([key, value]) => (
                    <li key={key}>
                        <strong>{key}:</strong> {value}
                    </li>
                    ))}
            </ul>

            <form name="detailForm" method="post">

                {/* 상품 번호 */}
                <input type="hidden" name="prodNo" value={product.prodNo}/>

                <div className="container">
                    <div className="page-header">
                        <h3 className="text-info">상품업데이트</h3>
                        <h5 className="text-muted">상품 정보를 <strong className="text-danger">업데이트</strong>해 주세요.</h5>
                    </div>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>상품번호</strong></div>
                        <div className="col-xs-8 col-md-4"><input type="text" name="prodNo" value={product.prodNo}/></div>
                    </div>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>상품명</strong></div>
                        <div className="col-xs-8 col-md-4"><input type="text" name="prodName" value={product.prodName} onChange={handleChange}/></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>상품이미지</strong></div>
                        <div className="col-xs-8 col-md-4"><input type="text" name="imageFile" value={product.imageFile} onChange={handleChange}/></div>
                    </div>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>상품상세정보</strong></div>
                        <div className="col-xs-8 col-md-4"><input type="text" name="prodDetail" value={product.prodDetail} onChange={handleChange}/></div>
                    </div>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>제조일자</strong></div>
                        <div className="col-xs-8 col-md-4"><input type="text" name="manuDate" value={product.manuDate} onChange={handleChange}/></div>
                    </div>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>가격</strong></div>
                        <div className="col-xs-8 col-md-4"><input type="text" name="price" value={product.price} onChange={handleChange}/></div>
                    </div>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>등록일자</strong></div>
                        <div className="col-xs-8 col-md-4"><input type="text" name="regDate" value={product.regDate}/></div>
                    </div>

                    <div className="row">
                        <div className="col-xs-4 col-md-2"><strong>상품상태</strong></div>
                        <div className="col-xs-8 col-md-4"><input type="text" name="proTranCode" value={product.proTranCode}/></div>
                    </div>

                </div>

                <div className="container text-right" id="button-group">
                    <button type="button" className="btn btn-primary" onClick={handleUpdateProduct}>수정</button>
                    <button type="button" className="btn btn-secondary" onClick={() => { window.history.back(); }}>이전</button>
                </div>

            </form>
        </div>
    );
};

export default UpdateProduct;