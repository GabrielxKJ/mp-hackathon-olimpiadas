const cache = new Map();
const url = 'https://apis.codante.io/olympic-games/countries';


const fetchData = async () => {
    const response = await fetch(url);
    if (!response.ok) {
        if (response.status === 429) {
            throw new Error("Taxa de limites excedida (429). Por favor aguarde antes de fazer outra requisição");
        }
        throw new Error('Conexão com a API deu ruim ;(');
    }

    const data = await response.json();
    cache.set(url, data);
    return data;
};

const fetchWithCache = async () => {
    if (cache.has(url)) {
        console.log("Retornando informação do cache");
        return cache.get(url);
    }

    const data = await fetchData();
    return data;
};

export { fetchWithCache };
