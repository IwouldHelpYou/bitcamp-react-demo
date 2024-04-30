import React from 'react';

function PageNavigator({ resultPage, currentPageUpdateAtResultPage }) {
  
  const handleCurrentPageChange = (e) => {
    currentPageUpdateAtResultPage(3); // 받은 함수 호출하여 현재 페이지 변경
  };
  
  return (
    <div className="container text-center">
      <nav>
        <ul className="pagination">

          {/* 좌측 네비게이션 */}
          {resultPage.currentPage <= resultPage.pageUnit ? (
            ''
          ) : (
            <button onClick={handleCurrentPageChange}>이전</button> 
          )}

          {/* 중앙 네비게이션 */}

          {/* 우측 네비게이션 */}
          {resultPage.endUnitPage >= resultPage.maxPage ? (
            ''
          ) : (
            <button onClick={handleCurrentPageChange}>다음</button> 
          )}

        </ul>
      </nav>
    </div>
  );
}

export default PageNavigator;