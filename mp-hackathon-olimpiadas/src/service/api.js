export const fetchData = async () => {
    const response = await fetch('https://apis.codante.io/olympic-games');
    if (!response.ok) {
        throw new ('Conexão com a API deu ruim ;(');
    }
    return response.json();
  };