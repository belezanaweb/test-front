import React, { Fragment } from 'react'; 
import styled from 'styled-components'; 

const Title = styled.div`
    height: 17px;
    width: 319px;
    color: #999;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    padding-top: 2vh;
    padding-bottom: 2vh;
`

const Box = styled.div`
    width: 341px;
    border-radius: 3px;
    background-color: #FFF;
    box-shadow: 1px 1px 5px 0 rgba(0,0,29,0.22);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

const Card = (props) => {
    return (
        <Fragment>
            <Title>
                {props.title}
            </Title>
            <Box>
                {props.children}
            </Box> 
        </Fragment>

    )
}

export default Card;