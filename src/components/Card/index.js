import React from 'react';

//styles
import {Wrapper} from './Card.styles';

const Card = ({header, body}) => (
    <Wrapper>
        <h1>
            {header}
        </h1>
        <p>
            {body}
        </p>
    </Wrapper>
);

export default Card;
