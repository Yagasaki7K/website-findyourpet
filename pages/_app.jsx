import Head from "next/head";
import { Toaster } from "sonner";
import "../styles/globals.css";
import SEO from "../next-seo.config";

function MyApp({ Component, pageProps }) {
        const defaultOgImage = SEO?.openGraph?.images?.[0];

        return (
                <>
                        <Head>
                                <title>{SEO.title}</title>
                                {SEO.description && (
                                        <meta name="description" content={SEO.description} />
                                )}
                                {SEO.canonical && <link rel="canonical" href={SEO.canonical} />}

                                <meta property="og:type" content={SEO.openGraph?.type || "website"} />
                                {SEO.openGraph?.locale && (
                                        <meta property="og:locale" content={SEO.openGraph.locale} />
                                )}
                                {SEO.openGraph?.siteName && (
                                        <meta property="og:site_name" content={SEO.openGraph.siteName} />
                                )}
                                {SEO.openGraph?.url && <meta property="og:url" content={SEO.openGraph.url} />}
                                {SEO.openGraph?.title && (
                                        <meta property="og:title" content={SEO.openGraph.title} />
                                )}
                                {SEO.openGraph?.description && (
                                        <meta property="og:description" content={SEO.openGraph.description} />
                                )}
                                {defaultOgImage?.url && (
                                        <>
                                                <meta property="og:image" content={defaultOgImage.url} />
                                                {defaultOgImage.width && (
                                                        <meta
                                                                property="og:image:width"
                                                                content={String(defaultOgImage.width)}
                                                        />
                                                )}
                                                {defaultOgImage.height && (
                                                        <meta
                                                                property="og:image:height"
                                                                content={String(defaultOgImage.height)}
                                                        />
                                                )}
                                                {defaultOgImage.alt && (
                                                        <meta property="og:image:alt" content={defaultOgImage.alt} />
                                                )}
                                                {defaultOgImage.type && (
                                                        <meta property="og:image:type" content={defaultOgImage.type} />
                                                )}
                                        </>
                                )}

                                {SEO.twitter?.cardType && (
                                        <meta name="twitter:card" content={SEO.twitter.cardType} />
                                )}
                                {SEO.twitter?.handle && (
                                        <meta name="twitter:creator" content={SEO.twitter.handle} />
                                )}
                                {SEO.twitter?.site && (
                                        <meta name="twitter:site" content={SEO.twitter.site} />
                                )}
                        </Head>
                        <Component {...pageProps} />
                        <Toaster richColors position="top-right" />
                </>
        );
}

export default MyApp;
