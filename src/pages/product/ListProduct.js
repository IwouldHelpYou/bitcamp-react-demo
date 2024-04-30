import axios from 'axios';

import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Col, Row, Form, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import PageNavigator from '../../components/PageNavigator';

const ListProduct = () => {
    
    const initList =[{
            imageFile: null,
            manuDate: '00-00-00',
            price : 10000,
            proTrancode : '판매중',
            prodDetail : '상세정보',
            prodName : '안녕',
            prodNo : 10024,
            regDate : '21-11-11'
        },

        {
            imageFile: null,
            manuDate: '00-00-00',
            price : 20000,
            proTrancode : '판매중ㅎㅎ',
            prodDetail : '상세정보ㅎㅎ',
            prodName : '안녕ㅎㅎ',
            prodNo : 10025,
            regDate : '22-11-11'
        }
    ];

    const [resultPage, setResultPage] = useState(''); // beginUnitPage, currentPage, endUnitPage, maxPage, pageSize, pageUnit, totalCount
    const [list, setList] = useState(initList); 

    var totalCount= resultPage.totalCount;
    var currentPage = resultPage.currentPage;
    var pageSize = resultPage.pageSize;
    
    // list (listProduct 컨트롤러의 list)

    const [searchCondition, setSearchCondition] = useState(1); 
    const [searchKeyword, setSearchKeyword] = useState('');

    // searchCondition (listProduct의 search 안의속성1)
    // searchKeyword (listProduct의 search 안의속성2)

    console.log("상품목록조회 컴포넌트");

    useEffect(()=>{
        console.log("상품목록조회 서버요청");
        axiosListProduct();
    },[])

    //페이지 이동위한 함수
    const setCurrentPage = (currentPage) => {

        console.log("요청받은 currentPage는",currentPage);
        console.log("페이지 변경");

        setResultPage( x=> ({
            ...x,
            currentPage : 3
        })
        )

        console.log("ResultPage는 ", resultPage);
    }
    

    const axiosListProduct = () => {
        try{
            axios.post('http://192.168.0.13:55747/product/json/listProduct?menu=메뉴줘',{
                search : {

                }
            })
            .then((res)=>{
                console.log(res.data);
                setList(res.data.list);
                setResultPage(res.data.resultPage);
            })
        }catch(e){
            console.log(e);
        }
    }

    return (
        <div style={{ width: '70%', margin: '100px auto' }}>

            <Container>

                <div>
                    <h3> 상품목록조회</h3>
                </div>

                <Row>
                    <Col md={6} textAlign="left">
                        <p>
                            전체 {totalCount} 건수, {currentPage} 건수
                        </p>
                    </Col>

                    <Col md={6} textAlign="right">
                        
                        <Form>
                            {/* 검색조건 */}
                            <Form.Group>
                                <select 
                                    value={searchCondition}
                                    onChange={ (e)=>setSearchCondition(e.target.value) }
                                >
                                    <option value="1">상품명</option>
                                </select>
                            </Form.Group>

                            {/* 검색어 */}
                            <Form.Group>
                                <label>검색어</label>
                                <input
                                    type="text"
                                    placeholder="검색어"
                                    value={searchKeyword}
                                    onChange={ (e) => setSearchKeyword(e.target.value)}
                                />
                            </Form.Group>
                                
                            {/* 검색버튼 */}
                            <button>검색</button>

                            {/* PageNavigation 선택 페이지 값을 보내는 부분 */}
                            <input type="hidden"></input>
                            <input type="hidden"></input>
                        </Form>
                    
                    </Col>
                </Row>

                <br></br>(여기서부터 상품목록)<br></br>

                {/* 상품목록 */}
                <Table striped bordered hover>
                    
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>상품명</th>
                            <th>가격</th>
                            <th>등록일</th>
                            <th>현재상태</th>
                        </tr>
                    </thead>

                    <tbody>

                        {list.map((product,index) => (
                            <tr key = {index}> 
                                <td> {product.prodNo} </td>
                                <td> <Link to={{ 
                                    pathname: "/ReadProduct",
                                    search: `?prodNo=${product.prodNo}` 
                                    }}
                                    >{product.prodName}</Link> </td>                            
                                <td> {product.price} </td>
                                <td> {product.regDate} </td>
                                <td> {product.proTrancode} </td>
                            </tr>
                        ))}

                    </tbody>

                </Table>

            </Container>

            <PageNavigator resultPage={resultPage} currentPageUpdateAtResultPage={setCurrentPage}/>
        </div>    
    );
}

export default ListProduct;