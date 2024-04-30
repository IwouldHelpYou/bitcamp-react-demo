import React from 'react';
import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom'
import {Container, Nav, Navbar} from 'react-bootstrap'

function Banner() {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);

    const user = JSON.parse(sessionStorage.getItem('쿠키'));

    useEffect(() => {
        // 세션 스토리지에서 '쿠키' 세션을 확인
        
        if (user && user.userRole === 'admin') {
            setIsAdmin(true);
        }
        
        if (user && user.userRole === 'user') {
            setIsUser(true);
        }

    }, []);
    
    const logout = () => {
        sessionStorage.removeItem('쿠키');
        window.location.reload();
    }

    return (
        <>
            {/* dark Theme */}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/ListPurchase">구매목록</Nav.Link>
                    {/* <Nav.Link as={Link} to="/PurchaseConfirmView">구매영수증</Nav.Link> */}
                </Nav>
                </Container>
            </Navbar>

            <br />

            {/* Blue Theme */}
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/Main">Home</Nav.Link>
                    {/* <Nav.Link as={Link} to="/AddProductConfirm">상품등록확인</Nav.Link> */}
                    {isAdmin && <Nav.Link as={Link} to="/AddProductView">상품등록</Nav.Link>}
                    <Nav.Link as={Link} to="/ListProduct">상품목록조회</Nav.Link>
                    {/* <Nav.Link as={Link} to="/ReadProduct">상품상세조회</Nav.Link> */}
                    {/* <Nav.Link as={Link} to="/UpdateProduct">상품업데이트</Nav.Link> */}
                </Nav>
                </Container>
            </Navbar>

            <br />

            {/* Blue Theme */}
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    {isAdmin && <Nav.Link as={Link} to="/ListUser">유저목록</Nav.Link>}
                    {(isUser || isAdmin) && <Nav.Link as={Link} to="/ReadUser">개인정보조회</Nav.Link>}
                    <Nav.Link as={Link} to="/AddUser">유저등록</Nav.Link>
                    <Nav.Link as={Link} to="/UpdateUser">유저업데이트</Nav.Link>
                    {user !== null? <button onClick={logout}>로그아웃</button> : <Nav.Link as={Link} to="/LoginView">로그인</Nav.Link>}
               </Nav>
                </Container>
            </Navbar>
      </>
    );
};

export default Banner;