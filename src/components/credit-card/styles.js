import styled from 'styled-components'
import { Colors } from '../../styles/styleds'
import '../../styles/fonts/fonts.css'

// Images
import BgShadow from '../../assets/images/shadow-card.svg'

export const Card = styled.div `
    position: relative;

    .credit-card-box {
        perspective: 1000;
        width: 364px;

        /* @media(max-width: 400px) {
            height: 160px;
            width: 100%;
        } */

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

                /* @media(max-width: 400px) {
                    height: 160px;
                } */

                img {
                    height: 220px;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 348px;
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
                }

                .validate {
                    left: 245px;
                }
            }

            .back {
                transform: rotateY(180deg);
                
                .cvv {
                    left: 174px;
                    position: absolute;
                    top: 108px;
                }
            }
        }
    }
`

// export const BoxPayment = styled.div `
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 32px;
//   position: relative;

//   .credit-card-box {
//     height: 220px;
//     margin-bottom: 40px;
//     max-width: 400px;
//     perspective: 1000;
//     width: 400px;

//     @media(max-width: 400px) {
//       height: 160px;
//       width: 100%;
//     }

//     &.hover .flip {
//       transform: rotateY(180deg);
//     }

//     .flip {
//       position: relative;
//       transition: 1.6s;
//       transform-style: preserve-3d;

//       .front,
//       .back {
//         backface-visibility: hidden;
//         background: linear-gradient(135deg,
//             ${Theme.colorPrimary},
//             ${Theme.colorPrimary}${Opacity.op75});
//         border-radius: 12px;
//         box-shadow: 0 1px 6px hsla(0, 0, 0, 0.3);
//         height: 220px;
//         position: absolute;
//         text-shadow: 0 1px 1px hsla(0, 0, 0, 0.3);
//         width: 100%;

//         @media(max-width: 400px) {
//           height: 160px;
//         }

//         &::before {
//           background-image: url(${BgGlobo});
//           background-position: center;
//           background-repeat: no-repeat;
//           background-size: cover;
//           content: '';
//           height: 100%;
//           left: 0;
//           opacity: 0.05;
//           position: absolute;
//           top: 0;
//           width: 100%;
//         }

//         span {
//           display: block;
//           font-size: 10px;
//           font-weight: normal;
//           letter-spacing: 1px;
//           margin-bottom: 3px;
//           opacity: 0.5;
//           text-shadow: none;
//           text-transform: uppercase;
//         }

//         .bandeiras {
//           position: absolute;
//           right: 20px;
//           top: 9px;
//           width: 60px;

//           @media(max-width: 400px) {
//             top: 9px;
//             width: 40px;
//           }

//           img {
//             height: auto;
//             width: 100%;
//           }
//         }
//       }

//       .front {
//         transform: rotateX(0deg);
//         z-index: 2;

//         .chip {
//           background-image: url(${Chip});
//           background-position: center;
//           background-size: cover;
//           border-radius: 12px;
//           height: 45px;
//           left: 20px;
//           position: absolute;
//           top: 20px;
//           width: 60px;

//           @media(max-width: 400px) {
//             border-radius: 4px;
//             height: 25px;
//             top: 12px;
//             width: 40px;
//           }

//           &::before {
//             border: 4px solid hsla(0, 0, 50, 0.1);
//             border-radius: 5px;
//             bottom: 0;
//             content: '';
//             height: 70%;
//             left: 0;
//             margin: auto;
//             right: 0;
//             position: absolute;
//             top: 0;
//             width: 80%;
//           }
//         }

//         .card-holder,
//         .card-expiration-date {
//           font-size: 22px;
//           height: 44px;
//           left: 19px;
//           margin: 0 auto;
//           max-width: 70%;
//           overflow: hidden;
//           position: absolute;
//           text-transform: uppercase;
//           top: 160px;
//           word-break: break-all;

//           @media(max-width: 400px) {
//             font-size: 16px;
//             height: 33px;
//             max-width: 61%;
//             top: 115px;
//           }

//           span,
//           div {
//             color: ${Colors.white};
//           }
//         }

//         .number {
//           color: ${Colors.white};
//           font-size: 25px;
//           left: 19px;
//           margin: 0 auto;
//           position: absolute;
//           top: calc(55% - 15px);

//           @media(max-width: 400px) {
//             font-size: 20px;
//             top: calc(55% - 12px);
//           }
//         }

//         .card-expiration-date {
//           left: auto;
//           right: 20px;
//           text-align: right;
//         }
//       }

//       .back {
//         transform: rotateY(180deg);

//         .bandeiras {
//           top: 165px;

//           @media(max-width: 400px) {
//             top: 115px;
//           }
//         }

//         .strip {
//           background: linear-gradient(135deg, hsl(0, 0, 25%), hsl(0, 0, 10%));
//           position: absolute;
//           width: 100%;
//           height: 50px;
//           top: 30px;
//           left: 0;

//           @media(max-width: 400px) {
//             height: 25px;
//             top: 15px;
//           }
//         }

//         .cvv {
//           background-color: ${Colors.white};
//           border-radius: 5px;
//           color: ${Colors.black};
//           height: 36px;
//           left: 0;
//           margin: 0 auto;
//           padding: 10px;
//           position: absolute;
//           right: 0;
//           text-align: right;
//           top: 110px;
//           width: 91%;

//           span {
//             color: ${Colors.white};
//             margin: -25px 0 14px;
//           }

//           @media(max-width: 400px) {
//             top: 70px;
//           }
//         }
//       }
//     }
//   }
// `
