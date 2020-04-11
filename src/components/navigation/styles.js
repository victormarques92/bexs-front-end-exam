import styled from 'styled-components'
import { Colors } from '../../styles/styleds'

export const Nav = styled.nav `
    background-color: ${Colors.white};
    border-bottom: 0.5px solid ${Colors.grey}4D;
    margin-bottom: 65px;
    padding: 24px 0;

    .content {
        align-items: center;
        display: flex;
        justify-content: center;

        @media (min-width: 992px) {
            justify-content: space-between;
        }
        
        .brand {
            height: 42px;
            max-width: 260px;
            width: 100%;
        }

        .menu {
            display: none;

            @media (min-width: 992px) {
                display: flex;
            }

            .item {
                background-color: ${Colors.dustyGray};
                border-radius: 5px;
                height: 18px;
                margin-left: 35px;
                width: 100px;

                &:first-of-type {
                    margin-left: 0;
                }
            }
        }
    }
`
