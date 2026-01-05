import React, { useState } from "react";
import PagesDetails from "../src/components/PagesDetails";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";
import { toast } from "sonner";
import Head from "next/head";
import imgServices from "../src/services/img.services";
import petServices from "../src/services/pet.services";
import fetchCEP from "../src/services/cep.services";
import { getInfosAndSendToDiscord } from "../src/utils/getInfosAndSendToDiscord";

const SignUp = () => {
	const [PetName, setPetName] = useState("");
	const [PetDescription, setPetDescription] = useState("");
	const [PetFile, setPetFile] = useState("");
	const [PetUrl, setPetUrl] = useState("");
	const [PetLocale, setPetLocale] = useState("");
	const [PetContact, setPetContact] = useState("");
	const [PetSituation, setPetSituation] = useState("");
	const [PetCreated, setPetCreated] = useState("");
	const [PetValid, setPetValid] = useState("");

	const [fieldContact, getFieldContact] = useState("");
	const [isUploading, setIsUploading] = useState(false);

	const handleChangeLocale = (event) => {
		setPetLocale(event.target.value);

		const cepRegex = /^[0-9]{8}$/;

		if (!cepRegex.test(event.target.value)) {
			return;
		}

		fetchCEP(event.target.value).then((data) => {
			if (data && data.bairro) {
				setPetLocale(`${data.bairro}, ${data.localidade}`);
			}
		});
	};

	const handleChangeContact = (event) => {
		const inputPhoneNumber = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos
		setPetContact(inputPhoneNumber);
		getFieldContact(formatPhoneNumber(inputPhoneNumber));
	};

	const formatPhoneNumber = (phoneNumber) => {
		if (!phoneNumber) return ""; // Retorna vazio se não houver número

		// Aplica a máscara ao número de telefone
		let formattedPhoneNumber = "";
		formattedPhoneNumber += `(${phoneNumber.slice(0, 2)}`;

		if (phoneNumber.length > 2) {
			formattedPhoneNumber += `) ${phoneNumber.slice(2, 3)}`;
		}
		if (phoneNumber.length > 3) {
			formattedPhoneNumber += ` ${phoneNumber.slice(3, 7)}`;
		}
		if (phoneNumber.length > 7) {
			formattedPhoneNumber += `-${phoneNumber.slice(7, 11)}`;
		}

		return formattedPhoneNumber;
	};

	function collectData() {
		//Pet registration creation date
		const date = new Date();
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const day = date.getDate().toString().padStart(2, "0");
		setPetCreated(`${day}/${month}/${year}`);

		//Pet registration expiration date
		date.setDate(date.getDate() + 60);
		const yearv = date.getFullYear();
		const monthv = (date.getMonth() + 1).toString().padStart(2, "0");
		const dayv = date.getDate().toString().padStart(2, "0");
		setPetValid(`${dayv}/${monthv}/${yearv}`);
	}

	async function getImage(event) {
		const file = event.target.files[0];
		if (!file) return;
		if (file.type !== "image/jpeg" && file.type !== "image/jpg" && file.type !== "image/png") {
			toast.warning("Apenas arquivos de imagem .png ou .jpg");
			event.target.value = "";
			return;
		} else if (file.size > 4 * 1024 * 1024) {
			toast.warning("Tamanho do arquivo de imagem incompativel");
			event.target.value = "";
			return;
		} else {
			try {
				setIsUploading(true);
				const url = await imgServices.uploadImgPost("files", file, file.type);
				setPetFile(file.name);
				setPetUrl(url);
				toast.success("Imagem enviada com sucesso!");
			} catch (err) {
				toast.error("Erro ao enviar imagem.");
				setPetFile("");
				setPetUrl("");
			} finally {
				setIsUploading(false);
			}
		}
	}

	async function addToFirebase() {
		const NewPets = {
			name: PetName,
			description: PetDescription,
			locale: PetLocale,
			contact: PetContact,
			status: PetSituation,
			image: PetFile,
			imageURL: PetUrl,
			slug: PetName.toLowerCase().replace(/ /g, "-") + Math.floor(Math.random() * 1000),
			createdAt: PetCreated,
			validDate: PetValid,
		};

		await petServices.addPets(NewPets);
		toast.success("Registro efetuado com sucesso!");
		getInfosAndSendToDiscord(NewPets);
		window.location.href = "/success";
	}

	async function sendData() {
		if (!PetName || !PetDescription || !PetSituation || !PetLocale || PetContact.length !== 11) {
			toast.warning("Por favor, preencha todos os campos obrigatórios.");
		} else if (!PetUrl) {
			toast.warning("Por favor, envie uma imagem do animal antes de cadastrar.");
		} else if (isUploading) {
			toast.warning("Aguarde o envio da imagem ser concluído.");
		} else {
			await addToFirebase();
		}
	}

	function resetData() {
		setPetName("");
		setPetDescription("");
		setPetFile("");
		setPetUrl("");
		setPetLocale("");
		setPetContact("");
		getFieldContact("");
		setPetSituation("");
		setPetCreated("");
		setPetValid("");

		toast.success("Campos limpos com sucesso!");
	}

	return (
		<>
			<Head>
				<title>FindYourPet | Área de Cadastro</title>
			</Head>

			<Navigation />
			<PagesDetails>
				<a href="/cadastro" className="advice-yellow">
					<i className="uil uil-shield-exclamation" />
					&nbsp; Procure colocar as informações corretamente - Não será possível editar depois! &nbsp;
					<i className="uil uil-shield-exclamation" />
				</a>

				<div className="modal-signup">
					<form onChange={() => collectData()} onSubmit={(e) => e.preventDefault()}>
						<h4>Nome do Animal</h4>
						<input
							type="text"
							id="name"
							placeholder="Nome do Animalzinho"
							maxLength={25}
							size={24}
							onChange={(event) => {
								setPetName(event.target.value);
							}}
							value={PetName}
						/>

						<h4>Foto do Animal</h4>
						<input type="file" id="photo" accept=".png, .jpg, .jpeg" onChange={getImage} disabled={isUploading} />
						{isUploading && <div style={{ color: "#3dcf9a", marginTop: 4 }}>Enviando imagem...</div>}
						{PetUrl && (
							<div style={{ marginTop: 8 }}>
								<img src={PetUrl} alt="Pré-visualização" style={{ maxWidth: 120, maxHeight: 120, borderRadius: 8 }} />
							</div>
						)}

						<h4>Descrição do Animal</h4>
						<textarea
							id="description"
							placeholder="Cachorro pequeno, Pêlo branco, carinhoso, gosta de bolinhas"
							maxLength={300}
							rows="4"
							cols="28"
							size={30}
							onChange={(event) => {
								setPetDescription(event.target.value);
							}}
							value={PetDescription}
						/>

						<h4>Cidade/Bairro do Animal</h4>
						<input
							type="text"
							id="locale"
							placeholder="Sua Cidade/Bairro ou CEP"
							onChange={(event) => {
								handleChangeLocale(event);
							}}
							value={PetLocale}
						/>

						<h4>Qual é a Situação:</h4>
						<select
							id="status"
							onChange={(event) => {
								setPetSituation(event.target.value);
							}}
							value={PetSituation}
						>
							<option value="">Selecione</option>
							<option value="Adoção">Animal para Adoção</option>
							<option value="Encontrado">Animal Encontrado</option>
							<option value="Perdido">Animal Perdido</option>
						</select>

						<h4>Número do WhatsApp*</h4>
						<div>
							<input type="text" id="contact" placeholder="(00) 0 0000-0000" onChange={handleChangeContact} value={fieldContact} maxLength={16} />
						</div>

						<div>
							<button type="button" className="send" onClick={sendData} disabled={isUploading}>
								{isUploading ? "Aguarde..." : "Cadastrar"}
							</button>
							<button type="reset" className="reset" onClick={resetData}>
								Limpar
							</button>
						</div>
					</form>
				</div>
			</PagesDetails>
			<Footer />
		</>
	);
};

export default SignUp;
