import { useState } from "react";
import axios from "axios";

function useReq<T>(
  initialData: T,
  url: string,
  method: "GET" | "POST" = "GET"
) {
  const [data, setData] = useState<T>(initialData);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const request = async <G>(body:G) => {
    setLoading(true);
    setError(null);
    try {
      let response;
      if (method === "GET") {
        response = await axios.get<T>(url);
      } else {
        response = await axios.post<T>(url, body);
      }
      setData(response.data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, request };
}

export default useReq;