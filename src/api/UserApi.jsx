import { useEffect, useState } from "react";
import axios from "axios";

export function UserApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const myToken =
    "70579b3f41badd197a9829e1a41090c7d89e63b04d194703553ceaa2febc8f5748caff59563228334c9086d0a74443a3e8a4603c208a1e72cbaf48c0b725bcfd55131ad6b910242c4b1fd8fede1b9a5acc8aa9b497c34dc93138ed135bddba6b70ec4f50291eb13ccf46f633f0c05836206b6dfe6c602304d78c20f09e08805b";

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

  // const [data, setData] = useState(null);

  // const myToken =
  //   "678cc63eee4ac7e53e293dc6783549d80f113ab22e48dff3787d0f457a6869801460f1d361c586f72e1ef6df8264712d8bf580beabf716a9832cb51c772f2eeaea4972f9b65f05b637ac682c93fef7201a9dff7e2c9362438e30c7c07aded4a4a35246cf0bdebc9478bfc4aab28585f5aaec7da701a540739334c822503a5b89";

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       Authorization: "Bearer " + myToken,
  //     },
  //   };

  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setData(data.data));
  // }, []);
}
