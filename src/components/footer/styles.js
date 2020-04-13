import styled from 'styled-components'
import { Colors } from '../../styles/styleds'

export const Foot = styled.footer `
    align-items: center;
    background-color: ${Colors.white};
    display: flex;
    justify-content: center;
    margin-top: 65px;
    padding: 28px;

    @media (max-width: 992px) {
        display: none;
    }

    .item {
        background-color: ${Colors.silver};
        border-radius: 5px;
        height: 12px;
        max-width: 1077px;
        width: 100%;
    }
`
