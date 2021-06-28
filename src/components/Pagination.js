import React from 'react';

export default (props) => {

  const handlePageChage = (numPage) => {
    if (numPage <= 0 || numPage > props.totalPages) {
      return;
    }

    props.getTodos(numPage);
  };


  const generatePages = () => {
    const pageButtons = [];

    for (let i = 1; i <= props.totalPages; i++) {
      pageButtons.push(
        <React.Fragment key={`page-${i}`}>
          {
            props.currentPage === i
              ? <li key={`page-${i}`} className="page-item active" aria-current="page">
                <span className="page-link">{i}</span>
              </li>
              : <li key={`page-${i}`} className="page-item" onClick={() => handlePageChage(i)}>
                <a className="page-link" href="#">{i}</a>
              </li>
          }
        </React.Fragment>);
    }

    return pageButtons;
  };


  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${props.currentPage === 1 ? 'disabled' : ''}`} onClick={() => handlePageChage(props.currentPage - 1)}>
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
        </li>

        {generatePages()}

        <li className={`page-item ${props.currentPage >= props.totalPages ? 'disabled' : ''}`} onClick={() => handlePageChage(props.currentPage + 1)}>
          <a className="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  );
};