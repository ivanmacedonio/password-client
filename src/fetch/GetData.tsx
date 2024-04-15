import { useEffect, useState } from 'react';

export const GetData = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { data, isLoading };
};
