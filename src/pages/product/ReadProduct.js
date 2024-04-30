import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { useParams, useLocation } from 'react-router-dom';

import ButtonProduct from '../../components/ButtonProduct';

const ReadProduct = () => {

    const initVo ={
        prodNo : 10024, 
        prodName : '테스트', 
        image : 'A.png' , 
        prodDetail : '이거 다 json으로 받아와야함',
        manuDate : '24-11-11',
        price : 25000,
        regDate : '24-10-10', 
        proTranCode : '판매중'
    }

    const [vo,setVo] = useState(initVo);
    
    //let { prodNo } = useParams();
    //let { prodNo } = useLocations();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const prodNo = queryParams.get('prodNo');
    
    console.log("상품상세조회 컴포넌트");

    useEffect(()=>{
        console.log("상품상세조회 서버요청");
        axiosGetProduct();
    },[])

    const axiosGetProduct = () => {
        try{
            axios.get(`http://192.168.0.13:55747/product/json/getProduct?prodNo=${prodNo}`)
            .then((res)=>{
                console.log(res.data);
                setVo(res.data);
            })
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div style={{ width: '70%', margin: '100px auto' }}>
            <h3> prodNo ... useParams {prodNo}</h3>
            <form>
                <Container>

                    <div>
                        <h3> 상품정보조회 </h3>
                        <h5> 상품 정보를 <strong>업데이트</strong> 해주세요 </h5>
                    </div>  

                    <Row>
                        <Col xs={4} md={2}> <strong>상품번호</strong> </Col>
                        <Col xs={8} md={4}> <strong>{vo.prodNo}</strong> </Col>
                    </Row>

                    <hr/>

                    <Row>
                        <Col xs={4} md={2}> <strong>상품명</strong> </Col>
                        <Col xs={8} md={4}> <strong>{vo.prodName}</strong> </Col>
                    </Row>
                    
                    <hr/>

                    <Row>
                        <Col xs={4} md={2}> <strong>상품이미지</strong> </Col>
                        <Col xs={8} md={4}> <strong>{vo.image}</strong> </Col>
                    </Row>
                    
                    <hr/>

                    <Row>
                        <Col xs={4} md={2}> <strong>상품상세정보</strong> </Col>
                        <Col xs={8} md={4}> <strong>{vo.prodDetail}</strong> </Col>
                    </Row>

                    <hr/>

                    <Row>
                        <Col xs={4} md={2}> <strong>제조일자</strong> </Col>
                        <Col xs={8} md={4}> <strong>{vo.manuDate}</strong> </Col>
                    </Row>
                    
                    <hr/>

                    <Row>
                        <Col xs={4} md={2}> <strong>가격</strong> </Col>
                        <Col xs={8} md={4}> <strong>{vo.price}</strong> </Col>
                    </Row>
                    
                    <hr/>
                    
                    <Row>
                        <Col xs={4} md={2}> <strong>등록일자</strong> </Col>
                        <Col xs={8} md={4}> <strong>{vo.regDate}</strong> </Col>
                    </Row>

                    <hr/>

                    <Row>
                        <Col xs={4} md={2}> <strong>상품상태</strong> </Col>
                        <Col xs={8} md={4}> <strong>{vo.proTranCode}</strong> </Col>
                    </Row>
                    
                </Container>

                <Container>
                    <Row>
                        <ButtonProduct productVO={vo} flagPurchaseButton={true}/>
                    </Row> 
                </Container>
            </form>            
        </div>
    );
};

export default ReadProduct;