export const getInfosAndSendToDiscord = (pet) => {
    if (typeof window === 'undefined') return;

    const url = process.env.NEXT_PUBLIC_DISCORD;

    if (!url) {
        console.error('Discord webhook URL is not defined');
        return;
    }

    fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            content: `**FINDYOURPET**: \n Nome: ${pet.name} \n Descrição: ${pet.description} \n Cidade/Bairro: ${pet.locale} \n Contato: ${pet.contact} \n Status: ${pet.status} \n Imagem: ${pet.imageURL} \n Data de Cadastro: ${pet.createdAt} \n\n *Link*: https://findyourpet.vercel.app/pets/${pet.slug}`
        })
    });
};
