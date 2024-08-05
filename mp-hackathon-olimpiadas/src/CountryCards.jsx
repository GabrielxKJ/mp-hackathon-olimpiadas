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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div className="container">
      <div className="columns is-multiline m-2">
        {data['data'].map((pais) => (
          <div key={pais.id} className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    id={`${pais.id}imgId`}
                    className={`${pais.name}FlagImg`}
                    src={pais.flag_url}
                    alt={`${pais.name} Flag`}
                  />
                </figure>
              </div>
              <div className="card-content">
                <p className="title is-4">{pais.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryCards;
