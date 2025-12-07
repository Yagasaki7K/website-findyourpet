import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	// Fast refresh with NextJS doesn't broken the CSS
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	// Finish Here

        render() {
                return (
                        <Html lang="pt-br">
                                <Head>
                                        <meta name="keywords" content="" />
                                        <meta name="author" content="Anderson 'Yagasaki' Marlon" />
					<meta name="robots" content="index, follow" />
					<link rel="shortcut icon" href="/logo.png" />
					<meta property="og:locale" content="pt_BR" />

					<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
