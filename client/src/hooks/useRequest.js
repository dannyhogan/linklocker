import { useState, useEffect } from 'react';

const useRequest = (url, method, body) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    setLoading(true);

    return fetch(url, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: { "Content-Type": "application/json" },
      credentials: 'include'
    })
      .then(res => res.json())
      .then(setData)
      .then(setLoading(false))
      .catch(setError);

  }, [body, method, url]);

  return { data, loading, error }
}

export default useRequest;
