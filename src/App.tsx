import React from 'react';
import { Hidden } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { DesktopHeader } from './components/DesktopHeader';
import { themes } from './styling/themes';
import { EpisodePage } from './screens/EpisodePage';
import { AboutPage } from './screens/AboutPage';

function App() {
  const [theme, setTheme] = React.useState('Light');

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <Hidden only={'xs'}>
          <DesktopHeader theme={theme} setTheme={setTheme} />
        </Hidden>
        <Switch>
          <Route exact path="/">
            <EpisodePage />
          </Route>
          <Route path="/faq">
            <AboutPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
