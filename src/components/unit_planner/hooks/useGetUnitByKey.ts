import { useCallback, useEffect, useState } from "react";

const useGetUnitByKey = (unitKey: string) => {
  const [unit, setUnit] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchUnitData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_NAGIS_API_URL}/api/wotv/units/unit?key=${unitKey}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonResponse = await response.json();

      const updatedUnit = {
        ...jsonResponse,
        image: `${process.env.REACT_APP_NAGIS_API_URL}${jsonResponse.image}`,
      };

      const image = new Image();
      image.src = updatedUnit.image;

      image.onload = () => {
        setUnit(updatedUnit);
        setIsLoading(false);
      };
      image.onerror = () => {
        console.log("Failed to load image");
        setIsLoading(false);
      };
    } catch (error) {
      console.log(`${error} failed to fetch`);
      setIsLoading(false);
    }
  }, [unitKey]);

  useEffect(() => {
    if (!unitKey) {
      return;
    }

    fetchUnitData();
  }, [fetchUnitData, unitKey]);

  return { unit, isLoading };
};

export default useGetUnitByKey;
