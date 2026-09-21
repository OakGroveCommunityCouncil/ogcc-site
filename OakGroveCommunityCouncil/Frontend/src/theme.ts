import { createTheme, responsiveFontSizes } from '@mui/material'

const baseTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
})

export const theme = responsiveFontSizes(baseTheme)
