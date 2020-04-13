import '../../styles/fonts/fonts.css'
import styled from 'styled-components'
import { Colors } from '../../styles/styleds'

export const Checkout = styled.div `
    .box-title {
        align-items: center;
        display: flex;
        margin-bottom: 30px;
        margin-top: 55px;

        @media (max-width: 992px) {
            justify-content: center;
            margin-bottom: 16px;
            margin-top: 40px;
        }

        img {
            margin-right: 15px;

            @media (max-width: 992px) {
                width: 40px;
            }
        }

        .text {
            color: ${Colors.white};
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            max-width: 165px;

            @media (max-width: 992px) {
                font-size: 16px;
                line-height: 20px;
            }
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

    @media (max-width: 992px) {
        flex: 0 0 100%;
        max-width: 100%;
        padding: 40px 40px 105px 40px;
        width: 100%;
    }
    
    .link {
        color: ${Colors.white};
        font-size: 13px;
        line-height: 22px;

        svg {
            margin-right: 10px;
            position: relative;
            top: 2px;
        }

        @media (max-width: 992px) {
            font-size: 35px;
            left: -31px;
            position: relative;
            z-index: 1;

            span {
                display: none;
            }
        }
    }

    .step {
        color: ${Colors.white};
        font-size: 13px;
        left: 0;
        line-height: 36px;
        position: absolute;
        text-align: center;
        top: 40px;
        width: 100%;

        @media (min-width: 992px) {
            display: none;
        }
    }
`

export const Content = styled.div `
    background-color: ${Colors.white};
    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;
    padding: 50px 65px 50px 140px;

    @media (max-width: 1200px) {
        padding: 50px 20px 50px 120px;
    }

    @media (max-width: 992px) {
        padding: 95px 40px 40px;

        form {
            .validate {
                padding-right: 5px;
            }

            .cvv {
                padding-left: 5px;
            }
        }
    }

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
