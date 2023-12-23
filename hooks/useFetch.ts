import { IssueType } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useFetch = (apiUrl: string) => {
  const [data, setData] = useState<IssueType[] | undefined>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const router = useRouter();
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiUrl);
      const data = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      router.refresh();
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { data, error, loading };
};
