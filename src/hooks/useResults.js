import { useState, useEffect } from 'react';
import yelp from '../api/Yelp';

const useResults = () => {
  const [results, setResutls] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchTerm,
          location: 'Moncton',
          limit: 50,
        },
      });
      setResutls(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  // Call searchApi when the component is first rendered. BAD CODE
  // searchApi('pasta')
  useEffect(() => {
    searchApi('burgers');
  }, []);

  return [searchApi, results, errorMessage];
};

export default useResults;
