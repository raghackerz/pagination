import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    height: 2rem;
    margin: 30px auto;
    align-items: center;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
    div {
        padding-top: 0.5rem;
        text-align: center;
        height: 1rem;
        margin: auto 1rem;
        height: 100%;
        cursor: pointer;
        background-color: white;
        border-radius: 0.5rem;
        width: 3rem;
    }
`;


export const Span = styled.div`
`;

export const Current = styled.div`
    background-color: hsl(224 49% 12%) !important;
    color: hsl(228 45% 97%);
`;

export const Dots = styled.div`
    cursor: default !important;
`;
export const Right = styled.div`
    margin-left: 2rem;
    :hover {
        background-color: hsl(0 0% 95%);
    }
`;
export const Left = styled.div`
    margin-right: 2rem;
    :hover {
        background-color: hsl(0 0% 95%);
    }

`;
