const siteUrl = "https://findyourpet.vercel.app";

const SEO = {
        title: "FindYourPet",
        description:
                "Nossa missão é reunir animais de estimação perdidos com suas famílias. Estamos empenhados em promover conexões, garantindo que cada animal de estimação perdido encontre o caminho de volta para casa.",
        canonical: siteUrl,
        openGraph: {
                type: "website",
                locale: "pt_BR",
                url: siteUrl,
                title: "FindYourPet",
                description:
                        "Nossa missão é reunir animais de estimação perdidos com suas famílias. Estamos empenhados em promover conexões, garantindo que cada animal de estimação perdido encontre o caminho de volta para casa.",
                siteName: "FindYourPet",
                images: [
                        {
                                url: `${siteUrl}/logo.png`,
                                width: 460,
                                height: 460,
                                alt: "FindYourPet",
                                type: "image/png",
                        },
                ],
        },
        twitter: {
                handle: "@findyourpet",
                site: "@findyourpet",
                cardType: "summary_large_image",
        },
};

export default SEO;
