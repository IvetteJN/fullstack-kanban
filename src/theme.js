import { createTheme } from '@mui/material'

export const colors = [
  '#565175',
  '#538a95',
  '#67b79e',
  '#ffb727',
  '#e4491c',
  '#840905'
]

const theme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#1D1F26',
      },
      primary:{
        main: '#25c2ce',
      },
    },
    components: {
      MuiSnackbar:{
        defaultProps:{
          anchorOrigin:{
            vertical:'top',
            horizontal: 'center',
          },
        },
      },
      MuiSnackbarContent:{
        styleOverrides:{
          message:{
            fontWeight:600,
            textTransform: 'capitalize',
          }
        }
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