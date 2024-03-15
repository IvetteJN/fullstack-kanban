import { createTheme } from '@mui/material'

export const colors = [
  '#A5C3CF',
  '#F3D3B8',
  '#E59D5C',
  '#A99F3C',
  '#AEBD38',
  '#D70026'
]

const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#1f1d26',
      },
      primary:{
        main: '#25c2ce',
      }
    },
    typography: {
      fontFamily: 'Lato, sans-serif',
      button: {
        textTransform: 'unset',
        fontWeight: 700,
      },
      h6:{
        fontWeight: 700,
      }
    }
  });

export default theme;