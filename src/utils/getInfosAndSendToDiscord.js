import { toast } from "sonner";

export const getInfosAndSendToDiscord = (pet) => {
    if (typeof window === 'undefined') return;

    fetch('https://discord.com/api/webhooks/1075440789599027300/2gWVg_4l1x5SLOaBgk9y9dprVWz8AuxvJioP-duIwQbawlieo03aUdSMCplWuRvb9iFI', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `**FINDYOURPET**: \n Nome: ${pet.name} \n Descrição: ${pet.description} \n Cidade/Bairro: ${pet.locale} \n Contato: ${pet.contact} \n Status: ${pet.status} \n Imagem: ${pet.imageURL} \n Data de Cadastro: ${pet.createdAt} \n\n *Link*: https://findyourpet.vercel.app/pets/${pet.slug}`
        })
    });
};
