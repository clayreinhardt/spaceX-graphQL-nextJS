import Document, {
    Html,
    Head,
    Main,
    NextScript,
} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="true"
                    />
                    <link
                        rel="preload"
                        as="style"
                        href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                    />
                    <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                        media="print"
                        onLoad="this.media='all'"
                    />
                    <noscript>
                        <link
                            rel="stylesheet"
                            href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                        />
                    </noscript>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument