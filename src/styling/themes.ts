/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme, Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  export interface Theme {
    paper: Record<string, any>;
    gradientPaper: Record<string, any>;
    background: Record<string, any>;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    paper?: Record<string, any>;
    gradientPaper: Record<string, any>;
    background: Record<string, any>;
  }
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#09203f',
    },
    secondary: {
      main: '#4fcff0',
    },
    grey: {
      '800': 'rgba(215,218,225,.8)',
    },
  },
  typography: {
    fontFamily: "Poppins, 'Lato', sans-serif",
  },
  paper: {},
  gradientPaper: {
    backgroundImage:
      'linear-gradient(rgba(66,179,245,1) 0%, rgba(95,44,130,1) 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white',
  },
  background: {
    headerColor: '#09203f',
    headerButtonColor: '#d5e4ff',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4fcff0',
      contrastText: 'white',
    },
    secondary: {
      main: '#09203f',
    },
    grey: {
      '800': 'rgb(50, 70, 90)',
    },
    info: {
      main: '#537895',
      light: '#537895',
      dark: '#09203f',
    },
  },
  typography: {
    fontFamily: "Poppins, 'Lato', sans-serif",
  },
  background: {
    backgroundColor: '#202020',
    headerColor: '#111',
    headerButtonColor: '#383838',
  },
  paper: {},
  gradientPaper: {
    backgroundImage: 'linear-gradient(#537895 0%, #09203f 100%)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backdropFilter: 'none',
    color: 'white',
  },
});

// const minecraftTheme = createTheme({
//   palette: {
//     mode: 'light',
//     primary: {
//       main: '#111',
//     },
//     background: {
//       paper: '#706E71',
//       default: '#1D140D',
//     },
//   },
//   typography: {
//     fontFamily: 'VT323',
//   },
//   shape: {
//     borderRadius: 0,
//   },
//   paper: {
//     backgroundColor: '#9D9D9D',
//   },
//   gradientPaper: {},
// });

const pinkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#510630;',
    },
    secondary: {
      main: '#feb8d2',
    },
    grey: {
      '800': 'rgba(215,218,225,.8)',
    },
  },
  typography: {
    fontFamily: "Poppins, 'Lato', sans-serif",
  },
  paper: {},
  gradientPaper: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backdropFilter: 'blur(20px)',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,.3)',
    color: 'black',
  },
  background: {
    width: '300%',
    height: '300%',
    backgroundSize: '100% 100%',
    animation: 'GradientBackground 7s ease infinite',
    background: 'linear-gradient(0.33turn, #f6a192, #ffbcde, #f6c492, #ffabab)',
    headerColor: '#401324',
    headerButtonColor: '#ffe7e3',
    '@keyframes GradientBackground': {
      '0%': { transform: 'translate(0, -50%);' },
      '50%': { transform: 'translate(-60%, 0);' },
      '100%': { transform: 'translate(0, -50%);' },
    },
  },
});

export const themes: Record<string, Theme> = {
  Light: lightTheme,
  Dark: darkTheme,
  Pink: pinkTheme,
  // Minecraft: minecraftTheme,
};
