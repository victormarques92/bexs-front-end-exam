import styled from 'styled-components'
import { Colors } from '../../styles/styleds'
import '../../styles/fonts/fonts.css'

// Images
import BgShadow from '../../assets/images/shadow-card.svg'

export const Card = styled.div `
    position: relative;

    @media (max-width: 992px) {
        display: flex;
        justify-content: center;
    }

    .credit-card-box {
        perspective: 1000;
        width: 364px;
        
        @media (max-width: 992px) {
            width: 270px;
        }

        &.rotate .flip {
            transform: rotateY(180deg);
        }

        .flip {
            position: relative;
            transition: 1.6s;
            transform-style: preserve-3d;

            .front,
            .back {
                backface-visibility: hidden;
                background-image: url(${BgShadow});
                background-repeat: no-repeat;
                height: 240px;
                position: absolute;
                width: 100%;

                @media (max-width: 992px) {
                    background-size: 280px 188px;
                }

                img {
                    height: 220px;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 348px;

                    @media (max-width: 992px) {
                        height: 170px;
                        width: 280px;
                    }
                }
            }

            .front {
                transform: rotateX(0deg);
                z-index: 2;

                .flags {
                    height: 23px;
                    left: 27px;
                    position: relative;
                    top: 35px;
                    width: 70px;

                    @media (max-width: 992px) {
                        height: 17px;
                        left: 14px;
                        top: 27px;
                        width: 53px;
                    }

                    img {
                        height: 100%;
                        width: auto;
                    }
                }

                .number {
                    color: ${Colors.white};
                    font-family: 'Pro Text Regular';
                    font-size: 22px;
                    left: 27px;
                    letter-spacing: 2.31px;
                    line-height: 28px;
                    position: absolute;
                    text-shadow: 0px 1px 2px ${Colors.black70};
                    top: 106px;

                    @media (max-width: 992px) {
                        font-size: 19px;
                        left: 14px;
                        letter-spacing: 1.52px;
                        line-height: 21px;
                        top: 80px;
                    }
                }

                .name,
                .validate {
                    color: ${Colors.white};
                    font-family: 'Pro Text Regular';
                    font-size: 16px;
                    left: 27px;
                    letter-spacing: 2.31px;
                    line-height: 28px;
                    position: absolute;
                    text-shadow: 0px 1px 2px ${Colors.black70};
                    text-transform: uppercase;
                    top: 167px;

                    @media (max-width: 992px) {
                        font-size: 12px;
                        left: 14px;
                        letter-spacing: 0;
                        line-height: 20px;
                        top: 130px;
                    }
                }

                .validate {
                    left: 232px;
                }
            }

            .back {
                transform: rotateY(180deg);
                
                .cvv {
                    color: ${Colors.grey};
                    left: 174px;
                    position: absolute;
                    top: 108px;

                    @media (max-width: 992px) {
                        left: 136px;
                        top: 80PX;
                    }
                }
            }
        }
    }
`
