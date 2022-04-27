import styled from 'styled-components';

export const Wrapper = styled.div`
    display : flex;
    align-items: center;
    height: 100px;
    padding: 0 20px;
`;
export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 70%;
    height: 55px;
    background: var(--medGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);
    border: solid 1px black;

    img{
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
    }
    input{
        font-size: var(--fontBig);
        position: absolute;
        left : 0px;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 75%;
        background: transparent;
        height: 40px;
        color: var(--white);

        :focus {
            outline: none;
        }
    }
`;