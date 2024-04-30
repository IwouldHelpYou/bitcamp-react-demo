import React from 'react';

const AddProductConfirm = () => {
    return (
        <div style={{ width: '70%', margin: '100px auto' }}>
            <div className="message-container">
                <div className="message" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    상품 등록이 완료되었습니다!
                </div>
                {/* 
                <div className="product-info">
                    상품명: {productVO.getProdName()} <br>
                    상품상태: {productVO.getProTranCode()}
                </div>
                 */}
            </div>
        </div>
    );
};

export default AddProductConfirm;