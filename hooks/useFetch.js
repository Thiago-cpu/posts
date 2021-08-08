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
  let mounted = true
  const loadData = useCallback(async () => {
    
    dispatch({type: 'Loading'})
    fetchFn(params)
      .then(res => {
        if(mounted)dispatch({type: 'onData', payload: res})
      })
      .catch(err => {
        if(mounted)dispatch({type: 'onError', payload: err})
      })
  }, [fetchFn, params, mounted])

  useEffect(() => {
    
    if (loadOnMount) loadData();
    return function cleanup() {
      mounted = false
    }
  }, [loadData, loadOnMount]);

  return { ...state, loadData };
};