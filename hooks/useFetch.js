import { useState, useEffect, useCallback } from "react";

export default function useFetch({
  loadOnMount = false,
  fetchFn = null,
  params = null,
  clearDataOnLoad = false,
}) {

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const loadData = useCallback(async () => {
    setIsLoading(true);
    setError(null)
    if (clearDataOnLoad) {

      setData()
    };
    fetchFn(params)
      .then(res => {
        setData(res)
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      })
  }, [fetchFn, params, clearDataOnLoad])

  useEffect(() => {
    if (loadOnMount) loadData();
  }, [loadData, loadOnMount]);

  return { data, isLoading, error, loadData };
};