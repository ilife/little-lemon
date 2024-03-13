import { extendTheme } from '@chakra-ui/react'
import '@fontsource-variable/josefin-sans'

const theme = extendTheme({
  fonts: {
    body: `'Josefin Sans Variable', sans-serif`
  },
  fontWeights: {
    medium: 500,
    semibold: 600,
    bold: 700
  },
  fontSizes: {
    sm: "1.125rem", // 18
    md: "1.5rem", // 24
    lg: "2.25rem" // 36
  },
  colors: {
    app: {
      primary: "#495E57",
      yellow: "#F4CE14"
    },
  },
})

export default theme
