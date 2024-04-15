import { useEffect, useState } from "react";

export const GetStatus = () => {
  const [status, setStatus] = useState<boolean | null>(null);
  useEffect(() => {
    async function getState() {
      const res = await fetch("http://localhost:3000/status");
      const resjson = await res.json();
      setStatus(resjson.status);
    }
    getState();
  }, []);
  return {status};
};
