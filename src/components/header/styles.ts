import styled, { css } from 'styled-components';
import {  Link } from 'react-router-dom';

export const Container = styled.header`
    ${({theme}) => css`
        border-radius: ${theme.border.radius};
        background-color: ${theme.colors.box};
        box-shadow: ${theme.border.shadow};
        padding: 12px 16px;
        margin: 0 0 10px;
        `
    }
`;

export const MenuUI = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    justify-content: center;
`;

export const MenuItem = styled.li`
    margin: 0 38px 0 0;
    &:last-child {
    margin: 0
}
`;

export const MenuLink = styled(Link)<{ itemSelected: boolean }>`
    ${({theme, itemSelected}) => css`
        color: #ccc;
        text-decoration: none;
        font-size: ${theme.fontSizes.medium};
        font-weight: 700;
        line-height: ${theme.fontSizes.large};
        text-align: center;
        ${ itemSelected && 'color: #FF7800;font-weight: bold;'};
        `
    }
`;
