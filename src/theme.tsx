import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
        padding: 0,
      }
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  colors: {
    midnight: {
      100: '#344562',
    },
    lightGrey: {
      100: '#BABCD1',
    },
    grey: {
      100: '#868DA1',
    },
    primary: {
      100: '#1A88E8',
    },
    blue: {
      100: '#1A88E8',
    },
    green: {
      100: '#16A63E',
    },
  },
})
export default theme
