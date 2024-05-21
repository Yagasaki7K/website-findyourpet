export function getLabelColorBasedOnStatus(status) {
    const statusLabelColor = {
        'Perdido': '#DC2828',
        'Encontrado': '#3370d4',
        'Adoção': 'orange',
    };

    return statusLabelColor[status] ?? "#75BEA2";
}