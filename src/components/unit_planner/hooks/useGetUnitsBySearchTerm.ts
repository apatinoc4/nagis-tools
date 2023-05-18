import { useCallback, useEffect, useState } from "react";

const useGetUnitsBySearchTerm = (searchTerm: string) => {
  const [searchResult, setSearchresult] = useState<any | null>(null);

  const querySearchTerm = encodeURIComponent(searchTerm);

  const fetchUnitMatches = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/wotv/units/search?name=${querySearchTerm}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonResponse = await response.json();

      setSearchresult(jsonResponse);
    } catch (error) {
      console.log(`${error} failed to fetch`);
    }
  }, [querySearchTerm]);

  useEffect(() => {
    fetchUnitMatches();
  }, [fetchUnitMatches, searchTerm]);

  return searchResult;
};

export default useGetUnitsBySearchTerm;
