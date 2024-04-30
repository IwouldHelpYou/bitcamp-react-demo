import './App.css';
import Banner from './components/Banner';

import {Link, Route, Switch} from 'react-router-dom';
import ListProduct from './pages/product/ListProduct'
import ReadProduct from './pages/product/ReadProduct';
import AddProductConfirm from './pages/product/AddProductConfirm';
import AddProductView from './pages/product/AddProductView';
import UpdateProduct from './pages/product/UpdateProduct';

import ListPurchase from './pages/purchase/ListPurchase';
import PurchaseView from './pages/purchase/PurchaseView';
import PurchaseConfirmView from './pages/purchase/PurchaseConfirmView';

import styled from "styled-components";
import AddUser from './pages/user/AddUser';
import ListUser from './pages/user/ListUser';
import UpdateUser from './pages/user/UpdateUser';
import ReadUser from './pages/user/ReadUser';

import LoginView from './pages/main/LoginView';
import Main from './pages/main/Main';

import LoginBar from './components/LoginBar';

const Wrapper = styled.div`
  // display: flex;
  margin-top:30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15vh;
  background-color:lightyellow;
  color:red;
`;

function App() {
  return (
    <div>
        <LoginBar/>
        <Banner/>

        <Wrapper>
            <Main/>
        </Wrapper>
        
        {/* <Link to='/product1'> ListProduct </Link>
        <Link to='/product2'> ReadProduct </Link> */}

        <Switch>
            <Route path='/loginView'> <LoginView/> </Route>

            <Route path='/product'/>
              <Route path='/ListProduct'> <ListProduct/> </Route>
              <Route path='/ReadProduct'> <ReadProduct/> </Route>
              <Route path='/AddProductView'> <AddProductView/> </Route>
              <Route path='/AddProductConfirm'> <AddProductConfirm/> </Route>
              <Route path='/UpdateProduct'> <UpdateProduct/> </Route>
            
            <Route path='/purchase'/>
              <Route path='/ListPurchase'> <ListPurchase/> </Route>
              <Route path='/PurchaseConfirmView'> <PurchaseConfirmView/> </Route>
              <Route path='/PurchaseView'> <PurchaseView/> </Route>
        
            <Route path='/user'/>
              <Route path='/AddUser'> <AddUser/> </Route>
              <Route path='/ListUser'> <ListUser/> </Route>
              <Route path='/ReadUser'> <ReadUser/> </Route>
              <Route path='/UpdateUser'> <UpdateUser/> </Route>
        </Switch>
    </div>
  );
}

export default App;
