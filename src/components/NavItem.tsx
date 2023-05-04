import React from 'react';

import { Button, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import useTheme from '@mui/material/styles/useTheme';
import { Link, LinkProps, useRouteMatch } from 'react-router-dom';

//citation: https://material-ui.com/components/app-bar/#hide-app-bar

const NavbarItemButton = styled(Button)<{ activetab: string } & LinkProps>(
  ({ theme, activetab }) => ({
    marginLeft: 8,
    marginRight: 8,
    textTransform: 'initial',
    backgroundColor:
      activetab === 'true' ? theme.background.headerButtonColor : undefined,
    color:
      activetab === 'true'
        ? `${theme.palette.text.primary} !important`
        : undefined,
  })
);

type NavbarItemProps = {
  text: string;
  to: string;
};

function NavItem(props: NavbarItemProps): JSX.Element {
  const { text, to } = props;
  const isSm = useMediaQuery(useTheme().breakpoints.down('sm'));
  const match = useRouteMatch({
    path: to,
    exact: true,
  });

  return (
    <NavbarItemButton
      component={Link}
      to={to}
      //yes, this is weird code, but it's to get around a dumb HTML error that I can't get around
      activetab={!!match + ''}
      size={isSm ? 'small' : 'medium'}
      color="primary"
    >
      {text}
    </NavbarItemButton>
  );
}

export { NavItem };
