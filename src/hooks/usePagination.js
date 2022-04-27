import {useMemo} from 'react';

export const usePagination = (totalCount, pageSize, currentPage, shownPageNumbers) => {
    const paginationRange = useMemo(() => {
        const totalPage = Math.ceil(totalCount/pageSize);
        let paginationArray = [];

        if(shownPageNumbers >= totalPage) {
            for(let i = 1; i <= totalPage; i++) paginationArray.push(i);
            return paginationArray;
        }

        const neighbours = (shownPageNumbers-3)/2;
        const leftShownIndex = Math.max(currentPage-neighbours,1);
        const rightShownIndex = Math.min(currentPage+neighbours,totalPage);
        const showLeftDots = leftShownIndex > 1;
        const showRightDots = rightShownIndex < totalPage-1;


        if(!showLeftDots && !showRightDots) {
            for(let i = 1; i <= totalPage; i++) paginationArray.push(i);
            return paginationArray;
        }
        else if(!showLeftDots && showRightDots){
            //for(let i = 1; i <= rightShownIndex; i++) paginationArray.push(i);
            for(let i = 1; i <= shownPageNumbers && i <= totalPage; i++) paginationArray.push(i);
            paginationArray.push('dot1');
            paginationArray.push(totalPage);
            return paginationArray;
        }
        else if(showLeftDots && !showRightDots) {
            paginationArray.push(1);
            paginationArray.push('dot1');
            //for(let i = leftShownIndex; i <= totalPage; i++) paginationArray.push(i);
            for(let i = totalPage-shownPageNumbers+1; i <= totalPage; i++) paginationArray.push(i);
            return paginationArray;
        }
        else {
            paginationArray.push(1);
            paginationArray.push('dot1');
            for(let i = leftShownIndex; i <= rightShownIndex; i++) paginationArray.push(i);
            paginationArray.push('dot2');
            paginationArray.push(totalPage);
            return paginationArray;
        }
    }, [totalCount, pageSize, currentPage, shownPageNumbers]);
    return paginationRange;
};
