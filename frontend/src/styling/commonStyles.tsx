import { styled } from '@mui/material/styles';

export const StyledSvg = styled('svg')`
    color: rgb(255, 255, 255);
    cursor: pointer;
    display: block;
    fill: rgb(255, 255, 255);
    flex-shrink: 0;
    font-family: Poppins, "Lato", sans-serif;
    font-size: 20px;
    font-weight: 500;
    height: 20px;
    line-height: 35px;
    text-transform: none;
    transition-delay: 0s;
    transition-duration: 0.2s;
    transition-property: fill;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    user-select: none;
    width: 20px
`;

export const ScreenMain = styled('main')(({ theme }) => ({
    padding: 24,
    justifyContent: 'center',
    minHeight: 'calc(100vh - 112px)',
    position: 'relative',
    overflow: 'hidden',
    width: '85%',
    paddingLeft: '7.5%',
    paddingRight: '7.5%',
    [theme.breakpoints.down('lg')]: {
      width: '75%',
      paddingLeft: '12.5%',
      paddingRight: '12.5%',
    },
    [theme.breakpoints.only('xs')]: {
      width: '88%',
      paddingLeft: '6%',
      paddingRight: '6%',
    },
}));

export const ScreenBackground = styled('div')(({ theme }) => ({
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    ...theme.background,
    [theme.breakpoints.only('xs')]: {
      animation: 'none',
    },
}));
