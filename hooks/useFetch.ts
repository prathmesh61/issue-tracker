import { IssueType } from "@/utils/types";
import axios from "axios";
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
      const { data } = await axios(apiUrl);
      setData(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      router.refresh();
    } finally {
      setLoading(false);
      router.refresh();
    }
  };
  useEffect(() => {
    fetchData();
  }, [apiUrl]);
  return { data, error, loading };
};
