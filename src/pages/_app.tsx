import { GlobalStyle } from "@/styles/global"
import { defaultTheme } from "@/styles/themes/default"
import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
