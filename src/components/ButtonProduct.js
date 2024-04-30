import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

function ButtonProduct({
    productVO = {}, 
    AxiosAddProductFunction = () => {}, 
    AxiosPurchaseProductFunction = () => {},
    flagPurchaseButton='', 
    flagPurchaseConfirmButton='' 
}) {
    
    const history = useHistory();
   // console.log(onClickFunction);
    //const [productVO, setProductVO] = useState(productVOprops);

    const sessionUser = JSON.parse(sessionStorage.getItem('쿠키'));

    const AddProductButtonClickHandle = () => {

        console.log("등록 버튼 클릭");
        AxiosAddProductFunction();
    }

    const PurchaseProductButtonClickHandle = () => {
        console.log("구매 확정 버튼 클릭");
        AxiosPurchaseProductFunction();
    }

    console.log("버튼눌렀을때", productVO, sessionUser)
    console.log("구매", flagPurchaseButton, "구매확정", flagPurchaseConfirmButton);
    return (
        <div>
            {/* 구매확정 버튼 */}

            { (sessionUser && sessionUser.userRole === 'user' && flagPurchaseConfirmButton ) && (
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                    onClick={PurchaseProductButtonClickHandle}
                >
                구매확정
                </button>
            )
            /*
                purchaseVO 정보
                private User buyer; // 구매자이름 
                private String divyAddr; // 구매자주소(구 receiverAddr)
                private String divyDate; // 배송희망일자(구 receiverDate)
                private String divyRequest; // 구매요청사항(구 receiverRequest)
                private Date orderDate;
                private String paymentOption; // 구매방법
                private ProductVO purchaseProd;
                private String receiverName; // 구매자이름
                private String receiverPhone; // 구매자연락처
                private String tranCode; 
                private int tranNo;
            */
            }

            {/* 구매 버튼 */}
            { (sessionUser && sessionUser.userRole === 'user' && flagPurchaseButton ) && (
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                    onClick={() => history.push('/PurchaseView', { users : sessionUser, products : productVO  } )}
                >
                구매
                </button>
            ) }

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
            { (sessionUser && sessionUser.userId === 'admin') && (
                <button
                    type="button"
                    className="btn btn-primary"
                    style={{ marginRight: '10px' }}
                    onClick={ () => {history.push('/UpdateProduct', {productVO : productVO } );} }
                >
                수정
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

export default ButtonProduct;      