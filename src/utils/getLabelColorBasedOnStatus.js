export function getLabelColorBasedOnStatus(status) {
	const statusLabelColor = {
		Perdido: "#e68284",
		Encontrado: "#ca9ee6",
		Adoção: "#ef9f76",
	};

	return statusLabelColor[status] ?? "#199966";
}
