import { ligthTheme, darkTheme } from '@/styles/theme'
import { Box, CssBaseline, ThemeProvider } from '@mui/material'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SCM Template',
  description: 'Created by shironeko',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box 
          sx={{
            width: '100vw', 
            height: '100vh'
          }}
        >
          <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            {children}
          </ThemeProvider>
        </Box>
      </body>
    </html>
  )
}