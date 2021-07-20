import {extendTheme} from '@chakra-ui/react'

const Link = {
    // The styles all button have in common
    baseStyle: {
        fontWeight: "700",
        color: '#868DA1'
    }
}
const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                padding: 0,
            },
            p: {
                color: '#868DA1'
            },
            a: {
                color: '#868DA1',
                fontWeight: 'medium'
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
            500: '#ececec'  
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
    components: {
        Link,
    },
})
export default theme
