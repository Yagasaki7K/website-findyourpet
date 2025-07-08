import { Toaster } from "sonner";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Toaster richColors position="top-right" />
		</>
	);
}

export default MyApp;
