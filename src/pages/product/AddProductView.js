import React from 'react';
import {useState} from 'react';
import {Container, Col, Row, Form, Table} from 'react-bootstrap';

import ButtonProduct from '../../components/ButtonProduct';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const AddProductView = () => {
    const history = useHistory();

    const initVo ={
        prodNo : 10024, 
        prodName : '테스트', 
        prodDetail : '이거 다 json으로 받아와야함',
        manuDate : '24-11-11',
        price : 25000,
        regDate : '2024-10-10', 
        proTranCode : '판매중'
    }

    const [productVO,setProductVo] = useState(initVo);
    const [singleFile, setSingleFile] = useState('');
    const [multiFile, setMultiFile] = useState('');

    const handleChange = (e) => {
        
        const {name,value} = e.target;
            setProductVo( x => ({
                ...x, 
                [name]:value
            })
        );
    }

    const handleSingleFileChange = (e) => { 

            setSingleFile( x=> ({
                ...x,
                file: e.target.files[0]
            })
        );

        console.log(e.target.files[0])  ;
    }

    const handleMultiFileChange = (e) => { 
        const files = Array.from(e.target.files); 
    }

    const AddProductButtonClick = async () => {
        console.log("상품등록시작");
        await axiosAddproduct();
    }

    const axiosAddproduct = () => {

        console.log("보낼 productVO", productVO);
        console.log("보낼 singlefile", singleFile.file);
        //console.log("보낼 multiFile", multiFile.file);

        let formData = new FormData();
        formData.append("productVO", productVO);
        formData.append("singleFile", singleFile.file);
        //formData.append("multiFile", multiFile.file);

        try{
        axios.post('http://192.168.0.13:55747/product/json/addProductTest',
            formData, {
                headers: {
                    'Content-Type': 'multipart/form-data; charset=EUC-KR'
                  }
            }
        )
        .then((res)=>{
            console.log(res.data);
            //history.push('/AddProductConfirm');
        })
        }catch(e){
            console.log(e);
        }
    }
    
    return (
        <div style={{ width: '70%', margin: '100px auto' }}>

            <Container> 

                <div>
                    <h3> 상품등록</h3>
                </div>

                <Row>
                    <Col xs={4} md={6}> <strong>상품번호(fixed)</strong> </Col>
                    <Col xs={8} md={4}> <input type="text" name="prodNo" defaultValue="fixed"/></Col>
                </Row>

                <Row>
                    <Col xs={4} md={6}> <strong>상품명</strong> </Col>
                    <Col xs={8} md={4}> <input type="text" name="prodName" value={productVO.prodName} onChange={handleChange}/></Col>
               </Row>

                <Row>
                    <Col xs={4} md={6}> <strong>상품이미지</strong> </Col>
                    <Col xs={8} md={4}> <input type="file" name="singleFile" onChange={handleSingleFileChange} accept="image/*"/></Col>
                    <Col xs={8} md={4}> <input type="file" name="multipleFile" onChange={handleMultiFileChange} accept="image/*" multiple='multiple'/></Col>

                    <div id="imgDisplaySpot"></div>
                </Row>

                <Row>
                    <Col xs={4} md={6}> <strong>상품상세정보</strong> </Col>
                    <Col xs={8} md={4}> <input type="text" name="prodDetail" value={productVO.prodDetail}  onChange={handleChange}/></Col>
                </Row>

                <Row>
                    <Col xs={4} md={6}> <strong>제조일자</strong> </Col>
                    <Col xs={8} md={4}> <input type="text" name="regDate" value={productVO.regDate} onChange={handleChange}/></Col>
                </Row>

                <Row>
                    <Col xs={4} md={6}> <strong>가격</strong> </Col>
                    <Col xs={8} md={4}> <input type="text" name="price" value={productVO.price} onChange={handleChange}/></Col>
                </Row>

            </Container>

            {/* <button onClick={AddProductButtonClick}/> */}
            <ButtonProduct productVO={productVO} AxiosAddProductFunction={AddProductButtonClick}/>
        </div>
    );
};

export default AddProductView;