import { useCallback, useEffect, useState } from "react";

const useGetUnitByKey = (unitKey: string) => {
  const [unit, setUnit] = useState<any | null>(null);

  const fetchUnitData = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/api/wotv/units/unit?key=${unitKey}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonResponse = await response.json();

      // Update the image URL to use the correct server address and port
      const updatedUnit = {
        ...jsonResponse,
        image: `http://localhost:3001${jsonResponse.image}`,
      };

      setUnit(updatedUnit);
    } catch (error) {
      console.log(`${error} failed to fetch`);
    }
  }, [unitKey]);

  useEffect(() => {
    fetchUnitData();
  }, [fetchUnitData, unitKey]);

  return unit;
};

export default useGetUnitByKey;
