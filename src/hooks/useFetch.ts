import { useEffect, useState } from "react";

interface FetchResponse<T> {
  data: T | null;
  loading: boolean;
  error: string;
}

export const useFetch = <T>(id: string): FetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getRecipeItemData = async () => {
      try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later!");
        }
        const result = await res.json();
        setData(result?.data?.recipe);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unexpected error occurred");
        setLoading(false);
      }
    };

    if (id) {
      getRecipeItemData();
    }
  }, [id]);

  return { data, loading, error };
};
