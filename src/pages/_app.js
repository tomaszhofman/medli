import { GlobalStyles } from '../styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}

export default MyApp;
