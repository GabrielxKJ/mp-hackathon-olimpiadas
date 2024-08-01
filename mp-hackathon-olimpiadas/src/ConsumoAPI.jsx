import { useState, useEffect } from "react";
import { fetchData } from "./service/api";

function ConsumoAPI() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

if (loading) return <p>Loading.. </p>;
if (error) return <p>Error: {error.message}</p>;
console.log(data);
}

export default ConsumoAPI;