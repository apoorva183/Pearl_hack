import React, { useState } from "react";
import { getMatches } from "../api";

const Search = ({ setMatches }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    const result = await getMatches(query);
    setMatches(result.matched_users);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="What do you need help with?"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
