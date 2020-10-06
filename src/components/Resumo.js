import React from 'react'
import styled from 'styled-components'

const ComponentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ComponentContainer = styled.div`
    border: 1px solid #9999;
    width: 96vw;
    height: 30vw;
    border-radius: 1.15%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
const ResumeItems = styled.div`

`

function Resumo() {
    return (
        <ComponentWrapper>
            <ComponentContainer>
               <ResumeItems>

               </ResumeItems>
    
            </ComponentContainer>
        </ComponentWrapper>
    )
}

export default Resumo