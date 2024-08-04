import { useState, useEffect } from "react";
import { fetchWithCache } from "./service/api";

function CountryCards() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
      try {
        const data = await fetchWithCache();
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

return (
 <div className="displayCards">
    {data['data'].forEach((pais)=> {
      <div id={`${pais.id}card`} className="countryCard">
        <img id={`${pais.id}imgId`} className={`${pais.name}FlagImg`} src={pais.flag_url} alt={`${pais.name}FlagImg`} />
      </div>

    })}
 </div>
)


}

export default CountryCards;