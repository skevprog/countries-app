import React from 'react';
import { gql, useQuery } from '@apollo/client';

interface Country {
  name: string;
  code: string;
  capital: string;
}

const GET_COUNTRIES = gql`
  query GetCountries {
        countries {
          name
          capital
          code
      }
    }
`;

export default function Home() {
  const { data } = useQuery(GET_COUNTRIES);

  const renderCountries = (): JSX.Element | JSX.Element[] => {
    if (data?.countries?.length) {
      return data?.countries?.map((country: Country): JSX.Element => (<div key={country.code}><h2>{country.name}</h2></div>));
    }
    return <h2>No countries to show</h2>;
  };

  return (
    <div>
      <h1>List of countries</h1>
      {renderCountries()}
    </div>
  );
}
