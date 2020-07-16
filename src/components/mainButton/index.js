import React from "react"
import {StyledButton} from "./style"

export default function MainButton (props) {
    return(
        <StyledButton type={props.type}> {props.text} </StyledButton> 
    )
}
