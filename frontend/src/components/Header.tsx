import React from 'react';

import {
  AppBar,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';
import useTheme from '@mui/material/styles/useTheme';

import { NavItem } from './NavItem';
import { MoonIcon } from '../assets/icons/MoonIcon';
import { SunIcon } from '../assets/icons/SunIcon';

//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const scrolled = {
  '& a': {
    color: 'white',
  },
  '& use': {
    fill: 'white',
  },
  '& path': {
    fill: 'white',
  },
};

//when the navbar is at the top of the screen and is navy blue
const top = (theme: Theme) => ({
  background: theme.palette.background.default,
  '& a': {
    color: theme.palette.text.primary,
  },
});

const StyledAppBar = styled(AppBar)`
  height: 64px;
`;

const StyledToolbar = styled(Toolbar)`
  padding-left: 12px;
  padding-right: 12px;
  justify-content: center;
`;

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({theme}) => ({
  position: 'absolute',
  right: 8,
  '& button': {
    borderColor: 'rgba(122,122,122,.5)',
  },
  '& svg': {
    fill: theme.palette.text.primary,
  },
}));

const NavItemContainer = styled('div')`
  position: absolute;
`;

type ElevatorScrollProps = {
  children: JSX.Element;
};

function ElevationScroll(props: ElevatorScrollProps): JSX.Element {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window : undefined,
  });

  const theme = useTheme();

  return React.cloneElement(children, {
    sx: trigger
      ? { ...scrolled, background: theme.background.headerColor }
      : top,
    elevation: trigger ? 2 : 0,
  });
}

type HeaderProps = {
  theme: string;
  setTheme: (newTheme: string) => void;
};
function Header(props: HeaderProps): JSX.Element {
  const handleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newTheme: string
  ) => {
    if (newTheme) props.setTheme(newTheme);
  };

  return (
    <React.Fragment>
      <ElevationScroll {...props}>
        <StyledAppBar id="AppBar">
          <StyledToolbar>
            <NavItemContainer>
              <NavItem to="/" text="On-demand" />
              <NavItem to="/faq" text="FAQ" />
            </NavItemContainer>
            <StyledToggleButtonGroup
              value={props.theme}
              exclusive
              onChange={handleChange}
              aria-label="website theme"
            >
              <ToggleButton value="Light" aria-label="light theme">
                <SunIcon />
              </ToggleButton>
              <ToggleButton value="Dark" aria-label="dark theme">
                <MoonIcon />
              </ToggleButton>
            </StyledToggleButtonGroup>
          </StyledToolbar>
        </StyledAppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}

export { Header };
