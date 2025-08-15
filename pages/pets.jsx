import { useEffect, useState } from "react";
import PagesDetails from "../src/components/PagesDetails";
import petServices from "../src/services/pet.services";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";
import Head from "next/head";
import { getLabelColorBasedOnStatus } from "../src/utils/getLabelColorBasedOnStatus";

export async function getServerSideProps() {
	const data = await petServices.getAllPets();
	const pets = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

	// Checa e deleta pets com mais de 60 dias
	const today = new Date();
	const petsToKeep = [];
	for (const pet of pets) {
		const [day, month, year] = pet.createdAt.split("/");
		const createdDate = new Date(`${year}-${month}-${day}`);
		const diffTime = today - createdDate;
		const diffDays = diffTime / (1000 * 60 * 60 * 24);
		if (diffDays > 60) {
			try {
				await petServices.deletePets(pet.id);
				if (pet.image) {
					if (typeof require !== "undefined") {
						try {
							const ImgServices = require("../src/services/img.services").default;
							await ImgServices.deleteImage(pet.image);
						} catch (e) {
							console.log(e);
						}
					}
				}
			} catch (e) {
				console.log(e);
			}
		} else {
			petsToKeep.push(pet);
		}
	}

	return {
		props: {
			initialPets: petsToKeep,
		},
	};
}

const PetsPage = ({ initialPets }) => {
	const [Pets, setPets] = useState(initialPets || []);
	const [search, setSearch] = useState("");

	useEffect(() => {
		setPets(initialPets || []);
	}, [initialPets]);

	useEffect(() => {
		// Função para checar e deletar pets expirados
		async function checkTime() {
			const today = new Date();
			const petsToKeep = [];
			for (const pet of Pets) {
				const [day, month, year] = pet.createdAt.split("/");
				const createdDate = new Date(`${year}-${month}-${day}`);
				const diffTime = today - createdDate;
				const diffDays = diffTime / (1000 * 60 * 60 * 24);
				if (diffDays > 60) {
					try {
						await petServices.deletePets(pet.id);
						if (pet.image) {
							try {
								const ImgServices = (await import("../src/services/img.services")).default;
								await ImgServices.deleteImage(pet.image);
							} catch (e) {}
						}
					} catch (e) {}
				} else {
					petsToKeep.push(pet);
				}
			}
			setPets(petsToKeep);
		}

		checkTime();
		const interval = setInterval(checkTime, 86400000);
		return () => clearInterval(interval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	function handleSearch(event) {
		const query = event.target.value;
		setSearch(query);
	}

	const parseDate = (dateStr) => {
		const [day, month, year] = dateStr.split("/");
		return new Date(`${year}-${month}-${day}`);
	};

	const filteredPets =
		search !== ""
			? Pets.filter((pet) => pet.name.toLowerCase().includes(search.toLowerCase()) || pet.locale.toLowerCase().includes(search.toLowerCase()))
			: Pets.slice().sort((a, b) => parseDate(b.createdAt) - parseDate(a.createdAt));

	return (
		<>
			<Head>
				<title>FindYourPet | Ajudando Animais de Estimação A Encontrarem O Seu Lar</title>
				<link rel="icon" type="image/png" href="/logo.png" />
				<meta name="robots" content="index, follow" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="description"
					content="Nossa missão é reunir animais de estimação perdidos com suas famílias. Estamos empenhados em promover conexões, garantindo que cada animal de estimação perdido encontre o caminho de volta para casa."
				/>
			</Head>

			<Navigation />
			<PagesDetails>
				<a href="/reporte" className="advice">
					<i className="uil uil-shield-exclamation"></i>&nbsp;Você perdeu um animal? Está querendo doar um? Ou encontrou um perdido? Cadastre ele!&nbsp;
					<i className="uil uil-shield-exclamation"></i>
				</a>

				<input type="text" placeholder="Digite o nome do animal, cidade ou bairro..." onChange={handleSearch} />

				<h2 className="titlePets">Banco de pets cadastrados</h2>
				<div className="advicePets">
					<i>*Os animais serão deletados automaticamente após 60 dias após a data da publicação</i>
				</div>
				<div className="container">
					{filteredPets && filteredPets.length > 0
						? filteredPets.map((pets, index) => (
								<a href={`/pets/` + pets.slug} key={index}>
									<div className="content">
										<div className="image">
											<img src={pets.imageURL ? pets.imageURL : "/faind.jpg"} alt={pets.name} />
										</div>

										<div className="text">
											<p style={{ backgroundColor: "var(--green-alt)" }}>{pets.name}</p>

											<p
												style={{
													backgroundColor: getLabelColorBasedOnStatus(pets.status),
												}}
											>
												{pets.status} - {pets.createdAt}
											</p>

											<p className="locale">{pets.locale}</p>
										</div>
									</div>
								</a>
							))
						: "Carregando..."}
				</div>
			</PagesDetails>
			<Footer />
		</>
	);
};

export default PetsPage;
