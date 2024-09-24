import React, { useState } from 'react';
import SearchBar from './SearchBar';
import Skinsdb from '/src/skins.json'; // Importa o arquivo JSON local
import Header from "../content/header"
import '../components/busca.css'

const SearchPageSkins = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (term) => {
    // Filtra os dados do arquivo JSON local com base no termo de busca
    const results = Skinsdb.filter(item =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Header />
      <h1>Buscar Skins</h1>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPageSkins;