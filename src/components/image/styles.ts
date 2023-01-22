
import styled from 'styled-components';

interface ImgProps {
    src: string,
    sizeImage: string
}

export const Img = styled.img<ImgProps>`
    margin: 0 10px 0 0;
    ${props => (props.sizeImage === "thumbnail" ? `width: 42px;` : `width: 65px;`)};
`