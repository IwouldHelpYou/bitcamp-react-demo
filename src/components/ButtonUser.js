import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

function ButtonUser({
    userVO = {}, 
    AxiosAddProductFunction = () => {}, 
    AxiosPurchaseProductFunction = () => {},
    flagUserUpdateButton='', 
    flagUserUpdateConfirmButton='' 
}) {
    
    const history = useHistory();

    const sessionUser = JSON.parse(sessionStorage.getItem('쿠키'));

    const AddProductButtonClickHandle = () => {

        console.log("등록 버튼 클릭");
        AxiosAddProductFunction();
    }

    const PurchaseProductButtonClickHandle = () => {
        console.log("구매 확정 버튼 클릭");
        AxiosPurchaseProductFunction();
    }

    console.log("버튼으로온 user데이터와 세션", userVO, sessionUser)

    return (
        <div>

            {/* 구매 버튼 */}
            {/* { (sessionUser && sessionUser.userRole === 'user' && flagPurchaseButton ) && (
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                    onClick={() => history.push('/PurchaseView', { users : sessionUser, users : userVO  } )}
                >
                구매
                </button>
            ) } */}

            {/* 등록 버튼 */}
            { (sessionUser && sessionUser.userId === 'admin') && (
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                    onClick={AddProductButtonClickHandle}
                >
                등록
                </button>
            ) }

            {/* 수정 버튼 */}
            { (sessionUser && flagUserUpdateButton) && (
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                    onClick={ () => {history.push('/UpdateProduct', {user : userVO } );} } 
                >
                수정
                </button>
            )}

            {/* 수정확정 버튼 */}

            { (sessionUser && flagUserUpdateConfirmButton ) && (
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                    onClick={PurchaseProductButtonClickHandle}
                >
                수정확정
                </button>
            )}

            {/* 이전 버튼 */}
            {!sessionUser || (sessionUser && sessionUser.userId !== 'admin') && ''}
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => window.history.back()}
                >
                이전
                </button>
                 
        </div>
    );
};

export default ButtonUser;      