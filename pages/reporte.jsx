import React, { useState } from 'react'
import PagesDetails from '../src/components/PagesDetails'
import Navigation from '../src/components/Navigation'
import Footer from '../src/components/Footer'
import { toast } from 'sonner'
import formatPhoneNumber from '../src/utils/formatPhone'
import { badWords } from '../src/utils/badwords'
import Head from 'next/head'

const SignUp = () => {
    const [PetName, setPetName] = useState('');
    const [PetDescription, setPetDescription] = useState('');
    const [PetFile, setPetFile] = useState('');
    const [PetUrl, setPetUrl] = useState('');
    const [PetLocale, setPetLocale] = useState('');
    const [PetContact, setPetContact] = useState('');
    const [PetSituation, setPetSituation] = useState('');
    const [PetCreated, setPetCreated] = useState('');
    const [PetValid, setPetValid] = useState('');

    function collectData() {
        //Pet registration creation date
        const date = new Date()
        const year = date.getFullYear()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = date.getDate().toString().padStart(2, '0')
        setPetCreated(`${day}/${month}/${year}`)

        //Pet registration expiration date
        date.setDate(date.getDate() + 60)
        const yearv = date.getFullYear()
        const monthv = (date.getMonth() + 1).toString().padStart(2, '0')
        const dayv = date.getDate().toString().padStart(2, '0')
        setPetValid(`${dayv}/${monthv}/${yearv}`)
    }

    function getImage(event) {
        const file = event.target.files[0];
        setPetFile(file);

        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(Math.floor(progress));
            },
            (error) => console.log(error),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    setPetUrl(url);
                });
            }
        );
    }

    function Redirect() {
        location.assign("/pets");
    }

    function checkBadWords(string) {
        const filterBadWords = badWords;

        const hasBadWords = filterBadWords.some(word => string.toLowerCase().includes(word.toLowerCase()));

        if (hasBadWords) {
            toast.warning('Por favor, não use palavras inapropriadas!');
        } else {
            toast.success('Texto validado com sucesso!');
        }
    }

    async function addToFirebase() {
        const NewPets = {
            name: PetName,
            description: PetDescription,
            locale: PetLocale,
            contact: PetContact,
            status: PetSituation,
            image: PetFile.name,
            imageURL: PetUrl,
            slug: PetName.toLowerCase().replace(/ /g, '-') + Math.floor(Math.random() * 1000),
            createdAt: PetCreated,
            validDate: PetValid
        }

        await (PetServices.addPets(NewPets))
        toast.success('Registro efetuado com sucesso!');

        Redirect();
    }

    function sendData() {
        if (!PetName || !PetDescription || !PetLocale || !PetContact) {
            toast.warning('Por favor, preencha todos os campos obrigatórios.');

        } else {
            checkBadWords(PetName);
            checkBadWords(PetDescription);
            addToFirebase();
        }
    }

    function resetData() {
        setPetName('');
        setPetDescription('');
        setPetFile('');
        setPetUrl('');
        setPetLocale('');
        setPetContact('');
        setPetSituation('');
        setPetCreated('');
        setPetValid('');

        toast.success('Campos limpos com sucesso!');
    }

    return (
        <>
            <Head>
                <title>FindYourPet | Área de Cadastro</title>
            </Head>

            <Navigation />
            <PagesDetails>
                <a href="/cadastro" className="advice-yellow">
                    <i className="uil uil-shield-exclamation" />&nbsp;
                    Procure colocar as informações corretamente - Não será possível editar depois!
                    &nbsp;<i className="uil uil-shield-exclamation" />
                </a>

                <div className="modal-signup">
                    <form onChange={() => collectData()}>
                        <h4>Nome do Animal</h4>
                        <input type="text" id="name" placeholder="Nome do Animalzinho"
                            maxLength={15} size={24} onChange={(event) => { setPetName(event.target.value) }} value={PetName} />

                        <h4>Foto do Animal</h4>
                        <input type="file" id="photo" onChange={getImage}></input>

                        <h4>Descrição do Animal</h4>
                        <textarea id="description" placeholder="Cachorro pequeno, Pêlo branco, carinhoso, gosta de bolinhas" maxLength={50}
                            rows="4" cols="28" size={30} onChange={(event) => { setPetDescription(event.target.value) }} value={PetDescription} />

                        <h4>Cidade/Bairro do Animal</h4>
                        <input type="text" id="locale" placeholder="Sua Cidade e Bairro"
                            maxLength={20} size={24} onChange={(event) => { setPetLocale(event.target.value) }} value={PetLocale} />

                        <h4>Qual é a Situação:</h4>
                        <select id="status" onChange={(event) => { setPetSituation(event.target.value) }}>
                            <option value="">Selecione</option>
                            <option value="Adoção">Animal para Adoção</option>
                            <option value="Encontrado">Animal Encontrado</option>
                            <option value="Perdido">Animal Perdido</option>
                        </select>

                        <h4>Número do WhatsApp*</h4>
                        <div>
                            <input type="text" id="contact" placeholder="19123456789"
                                onChange={(event) => { setPetContact(event.target.value) }} value={PetContact} maxLength={11} size={24} />
                        </div>

                        <div>
                            <button type="button" className="send" onClick={sendData}>Cadastrar</button>
                            <button type="reset" className="reset" onClick={resetData}>Limpar</button>
                        </div>
                    </form>
                </div>
            </PagesDetails>
            <Footer />
        </>
    )
}

export default SignUp