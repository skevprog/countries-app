import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

const QUERY = gql`
  query GetCountryById($code: ID!) {
    country(code: $code) {
      name
    }
  }

`;

function Search() {
  const [countryCode, setCountryCode] = useState('');
  const [getCountryById, { loading, error, data }] = useLazyQuery(QUERY, { variables: { code: countryCode } });

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountryCode(e?.target.value);
  };

  const handleOnClick = () => {
    getCountryById({ variables: { code: countryCode } });
  };

  return (
    <div>
      <input type="text" placeholder="Enter country code" onChange={handleOnInputChange} />
      <button type="button" onClick={handleOnClick}>Search country</button>
      {loading && <h2>Is loading...</h2>}
      {error && <h2>Something bad happened</h2>}
      {data?.country && <h1>{data.country.name}</h1>}
    </div>
  );
}

export default Search;
