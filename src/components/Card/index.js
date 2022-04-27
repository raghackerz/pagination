import React from 'react';

//styles
import {Wrapper,UserId} from './Card.styles';

const Card = ({userId,header, body}) => (
    <Wrapper>
        <UserId>User : {userId}</UserId>
        <h1>
            {header}
        </h1>
        <p>
            {body}
        </p>
    </Wrapper>
);

export default Card;
