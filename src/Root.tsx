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
import { Home } from './screens/Home';

function Root() {
  const [theme, setTheme] = React.useState('Light');
  const EpisodeHelper = (props: any) => {
    console.log(props);
    return <EpisodePage trackId={props.match.params.id}/>;
  };

  const numberOfSeasons = 6;

  const [season, setSeason] = React.useState<number>(1);

  return (
    <Router>
      <ThemeProvider theme={themes[theme]}>
        <Hidden only={'xs'}>
          <DesktopHeader theme={theme} setTheme={setTheme} />
        </Hidden>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/track/:episode">
            {EpisodeHelper}
          </Route>
          <Route path="/faq">
            <AboutPage />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default Root;
