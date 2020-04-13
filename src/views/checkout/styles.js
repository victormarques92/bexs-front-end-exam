import '../../styles/fonts/fonts.css'
import styled from 'styled-components'
import { Colors } from '../../styles/styleds'

export const Checkout = styled.div `
    .box-title {
        align-items: center;
        display: flex;
        margin-bottom: 30px;
        margin-top: 55px;

        img {
            margin-right: 15px;
        }

        .text {
            color: ${Colors.white};
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
        }
    }

    .summary {
        @media (min-width: 1366px) {
            display: none;
        }
    }
`

export const SectionCard = styled.div `
    background-color: ${Colors.valencia};
    flex: 0 0 33.33%;
    max-width: 33.33%;
    padding: 50px 16px 50px 65px;
    width: 35%;
    
    .link {
        color: ${Colors.white};
        font-size: 13px;
        line-height: 22px;

        svg {
            margin-right: 10px;
            position: relative;
            top: 2px;
        }
    }
`

export const Content = styled.div `
    background-color: ${Colors.white};
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding: 50px 65px;

    .align-button {
        justify-content: flex-end;
    }
`

export const Button = styled.button `
    background-color: ${Colors.valencia};
    border-radius: 10px;
    color: ${Colors.white};
    cursor: pointer;
    font-family: 'Pro Text SemiBold';
    font-size: 17px;
    line-height: 22px;
    padding: 15px 70px;
    text-transform: uppercase;
`
