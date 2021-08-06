import { useState, useEffect, useCallback, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case 'Loading':
      return {data: null, error: null, isLoading: true};
    case 'onError':
      return {data: null, isLoading: false , error: action.payload};
    case 'onData':
      return {error: null, isLoading: false, data: action.payload}
    default:
      return state
  }
}

export default function useFetch({
  loadOnMount = false,
  fetchFn = null,
  params = null,
}) {
  const [state, dispatch] = useReducer(reducer, {data: null, error: null, isLoading: false});
  const loadData = useCallback(async () => {
    dispatch({type: 'Loading'})
    fetchFn(params)
      .then(res => {
        dispatch({type: 'onData', payload: res})
      })
      .catch(err => {
        dispatch({type: 'onError', payload: err})
      })
  }, [fetchFn, params])

  useEffect(() => {
    if (loadOnMount) loadData();
  }, [loadData, loadOnMount]);

  return { ...state, loadData };
};