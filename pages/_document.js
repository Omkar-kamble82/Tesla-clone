import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
        <Head>
            <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
            <link rel="icon" href="/icon.png" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    )
}