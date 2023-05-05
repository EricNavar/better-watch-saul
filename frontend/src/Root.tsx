import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Header } from './components/Header';
import { themes } from './styling/themes';
import { EpisodePage } from './screens/EpisodePage';
import { AboutPage } from './screens/AboutPage';
import { Home } from './screens/Home';
import { ScreenBackground, ScreenMain } from './styling/commonStyles';

function Root() {
  const [theme, setTheme] = React.useState('Light');
  const EpisodeHelper = (props: any) => {
    return <EpisodePage trackId={props.match.params.id} />;
  };

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <Header theme={theme} setTheme={setTheme} />
        <ScreenMain>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/track/:id">
              {EpisodeHelper}
            </Route>
            <Route path="/faq">
              <AboutPage />
            </Route>
          </Switch>
          <ScreenBackground />
        </ScreenMain>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
