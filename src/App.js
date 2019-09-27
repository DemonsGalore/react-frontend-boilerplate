import React, { useRef, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Burger, Footer, Header, Navigation } from './layout';
import GlobalStyles from './global';
import { theme } from './theme';
import { useOutsideClick } from './hooks';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const node = useRef();
  useOutsideClick(node, () => setMenuOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <main ref={node}>
          <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <h1>HALLO</h1>
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
