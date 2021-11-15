import { useState, useEffect } from 'react';

const API = 'https://us-central1-gndx-fake-api.cloudfunctions.net/api';

export default function useInitialState() {
  try {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
      const response = await fetch(API);
      setProducts(await response.json());
    }, []);

    return {
      products,
    };
  } catch (error) {
    return {
      products: [],
      error: typeof error === 'object' ? error.message : error,
    };
  }
}
