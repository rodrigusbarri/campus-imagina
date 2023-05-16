import { useEffect, useState } from "react";
import axios from "axios";

export function UserApi(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const myToken = import.meta.env.VITE_STRAPI_TOKEN
 

  useEffect(() => {
    setLoading(true);
    const config = {
      headers: {
        Authorization: "Bearer " + myToken,
      },
    };

    axios
      .get(url, config)
      .then((response) => setData(response.data.data))
      .finally(() => setLoading(false))
      .catch((error) => setError(error));
  }, []);

  return { data, loading, error };


}
