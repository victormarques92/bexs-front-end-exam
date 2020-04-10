import { createGlobalStyle } from 'styled-components';

import ProTextRegular from './fonts/SFProText-Regular.ttf';
// import ProTextSemiBold from './fonts/SFProText-Semibold.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Pro Text Regular';
        src: local('Pro Text Regular'), local('Pro Text Regular'),
        url(${ProTextRegular}) format('ttf');
    }
`;
