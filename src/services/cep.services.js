async function fetchCEP(cep_value) {
	try {
		const response = await fetch(`https://viacep.com.br/ws/${cep_value}/json/`);
		if (response.status === 200) {
			return response.json();
		}
		return null;
	} catch {
		return null;
	}
}

export default fetchCEP;
