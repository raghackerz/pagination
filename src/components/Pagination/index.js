import React from 'react';
import {usePagination} from '../../hooks/usePagination';

//styles
import {Wrapper, Span, Dots, Left, Right, Current} from './Pagination.styles';

const Pagination = ({totalCount, pageSize, currentPage, setCurrentPage, shownPageNumbers}) => {
    const paginationDisplayArray = usePagination(totalCount, pageSize, currentPage, shownPageNumbers);
    const totalPage = Math.ceil(totalCount/pageSize);
    if(currentPage === 0 || paginationDisplayArray.length < 2) {
        return null;
    }
    
    const lessThan = '<';
    const greaterThan = '>';

    return (
        <Wrapper>
        <Left onClick={() => (currentPage !== 1) ? setCurrentPage(currentPage-1) : null}>{lessThan}</Left>
        {paginationDisplayArray.map((element) => {
            if(element === 'dot1' || element === 'dot2') {
                return (<Dots key={element}>....</Dots>);
            }
            if(element === currentPage) {
                return (<Current key={element}>{element}</Current>);
            }
            else return (<Span key={element} onClick={() => (currentPage !== element) ? setCurrentPage(element) : null}> {element} </Span>);
        })}
        <Right onClick={() => (currentPage !== totalPage) ? setCurrentPage(currentPage+1) : null}>{greaterThan}</Right>
        </Wrapper>
    );
};

export default Pagination;
