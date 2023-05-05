import React from 'react';

import { AppBar, Slide, Toolbar, useScrollTrigger } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NavItem } from './NavItem';
//icons

//citation: https://material-ui.com/components/app-bar/#back-to-top

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
  width: 'calc(100% - 16px)',
  margin: 8,
  borderRadius: 4,
  color: theme.palette.text.primary,
  top: 'initial',
  bottom: 0,
}));

const SpaceToolbar = styled(Toolbar)`
  marginbottom: 24px;
  bottom: 0;
  position: relative;
`;

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

type HideOnScrollProps = {
  children: JSX.Element;
};

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window : undefined });

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

function MobileHeader(): JSX.Element {
  return (
    <React.Fragment>
      <HideOnScroll>
        <StyledAppBar>
          <StyledToolbar>
            <NavItem to="/" text="On-demand" />
            <NavItem to="/" text="FAQ" />
          </StyledToolbar>
        </StyledAppBar>
      </HideOnScroll>
      <SpaceToolbar />
    </React.Fragment>
  );
}

export { MobileHeader };
