import { createGlobalStyle } from 'styled-components';

import colors from './styles/colors';

export const Theme = createGlobalStyle`
@font-face {
  font-family: "Operator Mono";
  src: url("../fonts/Operator-Mono.ttf");
}

body {
  background: ${colors.primary} 0% 0% no-repeat padding-box;
  margin: 0;
  padding: 0;
}
`;
