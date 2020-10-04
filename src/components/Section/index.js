import React, { useEffect } from 'react';
import { Container } from './styles';

function Section(props) {
    useEffect(() => {
    }, []);

    return (
        <Container>
            <h1>{props.title}</h1>
            {props.component}
        </Container>
    );
};
export default Section;