import Head from "next/head";
import { toast } from "sonner";
import Footer from "../../src/components/Footer";
import Navigation from "../../src/components/Navigation";
import PagesDetails from "../../src/components/PagesDetails";
import SlugDetails from "../../src/components/SlugDetails";
import { getReportAndSendToDiscord } from "../../src/utils/getReportAndSendToDiscord";
import petServices from "../../src/services/pet.services";

const siteUrl = "https://findyourpet.vercel.app";

export async function getServerSideProps(context) {
        const { slug } = context.params;

        try {
                const data = await petServices.getAllPets();
                const pets = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                const pet = pets.find((p) => p.slug === slug) || null;

                return {
                        props: {
                                pet,
                        },
                };
        } catch (error) {
                console.error(error);
                return {
                        props: {
                                pet: null,
                        },
                };
        }
}

const PetSlugPage = ({ pet }) => {
        const getLink = (slug) => {
                if (typeof window !== "undefined" && navigator?.clipboard) {
                        navigator.clipboard.writeText(`${siteUrl}/pets/${slug}`);
                        toast.success("Link copiado com sucesso!");
                }
        };

        const pageTitle = pet ? `FindYourPet | ${pet.name}` : "FindYourPet | Pet";
        const canonical = pet ? `${siteUrl}/pets/${pet.slug}` : `${siteUrl}/pets`;
        const ogImage = pet?.imageURL || `${siteUrl}/logo.png`;

        return (
                <>
                        <Head>
                                <title>{pageTitle}</title>
                                {pet?.description && (
                                        <meta name="description" content={pet.description} />
                                )}
                                <link rel="canonical" href={canonical} />
                                <meta property="og:type" content="article" />
                                <meta property="og:title" content={pageTitle} />
                                {pet?.description && (
                                        <meta property="og:description" content={pet.description} />
                                )}
                                <meta property="og:url" content={canonical} />
                                <meta property="og:image" content={ogImage} />
                                <meta property="og:site_name" content="FindYourPet" />
                                <meta name="twitter:card" content="summary_large_image" />
                                <meta name="twitter:title" content={pageTitle} />
                                {pet?.description && (
                                        <meta name="twitter:description" content={pet.description} />
                                )}
                                <meta name="twitter:image" content={ogImage} />
                        </Head>

                        <Navigation />
                        <PagesDetails>
                                <SlugDetails>
                                        {pet ? (
                                                <>
                                                        <div className="content">
                                                                <div className="leftContent">
                                                                        <img src={pet.imageURL ? pet.imageURL : "faind.jpg"} alt={pet?.name} />
                                                                </div>

                                                                <div className="rightContent">
                                                                        <h1>
                                                                                {pet.name} - {pet.status}
                                                                        </h1>
                                                                        <p>
                                                                                <i className="uil uil-map-marker"></i> <b>Localizado em: </b>
                                                                                {pet?.locale}
                                                                        </p>

                                                                        <p>
                                                                                <b>Quem é {pet.name}?</b> <br /> {pet?.description}
                                                                        </p>

                                                                        <div className="link">
                                                                                <a
                                                                                        href={`https://api.whatsapp.com/send/?phone=${pet?.contact}&text=Olá%2C+tudo+bom%3F+Vim+do+FindYourPet+e+estou+interessada+em+saber+mais+a+respeito+do+${pet.name}+que+está+no+anúncio+..`}
                                                                                        target="_blank"
                                                                                        rel="noreferrer"
                                                                                >
                                                                                        <i className="uil uil-whatsapp"></i> Entre em Contato!
                                                                                </a>

                                                                                <button
                                                                                        onClick={() => {
                                                                                                getLink(pet.slug);
                                                                                        }}
                                                                                        id="buttonON"
                                                                                >
                                                                                        <i className="uil uil-share-alt"></i> Compartilhe!
                                                                                </button>
                                                                        </div>

                                                                        <div className="report">
                                                                                <p onClick={() => getReportAndSendToDiscord(pet)}>
                                                                                        <i className="uil uil-exclamation-triangle"></i> Reportar Publicação
                                                                                </p>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <iframe
                                                                width="100%"
                                                                height="650px"
                                                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NII3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=${pet?.locale}&zoom=15&maptype=roadmap`}
                                                        ></iframe>
                                                </>
                                        ) : (
                                                <div>Pet não encontrado.</div>
                                        )}
                                </SlugDetails>
                        </PagesDetails>
                        <Footer />
                </>
        );
};

export default PetSlugPage;
