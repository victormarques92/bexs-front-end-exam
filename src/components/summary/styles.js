import styled from 'styled-components'
import { Colors } from '../../styles/styleds'

export const List = styled.div `
    background-color: ${Colors.white};
    padding: 52px 5px;

    hr {
        border-top: 1px solid ${Colors.grey};
        margin: 25px 15px;
    }
`

export const Contour = styled.span `
    background-color: ${props => props.color ? props.color : Colors.alabaster};
    border-radius: 5px;
    display: block;
    height: ${props => props.height ? `${props.height}px` : '12px'};
    margin-bottom: ${props => props.mgBottom && `${props.mgBottom}px`};
    width: 100%;
`
