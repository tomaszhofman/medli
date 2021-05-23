import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*,*::after,*::before {
    box-sizing: border-box;
    font-family: 'Rozha One','Reem Kufi', sans-serif;
}


html,
body {
  padding: 0;
  margin: 0;
}


p {
  margin: 0;
}`;
