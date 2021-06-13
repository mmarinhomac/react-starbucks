import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    orange: {
      '50': '#EFE4DC',
      '500': '#F17C58'
    },
    purple: {
      '900': '#202030'
    },
    yellow: {
      '500': '#ffb703'
    }
  },
  fonts: {
    heading: 'Noto Sans KR',
    body: 'Noto Sans KR',
  },
  styles: {
    global: {
      body: {
        bg: 'orange.50',
        color: 'gray.900',
        letterSpacing: "0.5px",
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        scrollBehavior: 'smooth',
        "&::-webkit-scrollbar": {
          display: 'none'
        }
      }
    }
  }
})