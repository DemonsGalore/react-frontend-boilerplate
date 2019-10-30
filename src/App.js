import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Burger, Footer, Header, Navigation, SideMenu } from './layout';
import { About, Blog, Contact, Home, Imprint, NotFound, PrivacyPolicy } from './pages';
import GlobalStyles from './global';
import { theme } from './theme';
// import { useOutsideClick } from './hooks';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //const node = useRef();
  //useOutsideClick(node, () => setMenuOpen(false));

  const isMobile = useMediaQuery({ query: '(max-width: ' + theme.mobile + ')' });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyles />
        {isMobile && <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        {!isMobile && <Navigation />}
        <Header isMobile={isMobile} />
        {isMobile && <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/imprint" component={Imprint} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
