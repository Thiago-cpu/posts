import { useState, useEffect, useCallback, useReducer } from "react";
function reducer(state, action) {
  switch (action.type) {
    case 'alternLoading':
      return {...state, isLoading: !state.isLoading};
    case 'setError':
      return {...state, error: action.payload};
    case 'setData':
      return {...state, data: action.payload}
    case 'resetData':
      return {...state, data: null, error: null}
    default:
      return state
  }
}

export default function useFetch({
  loadOnMount = false,
  fetchFn = null,
  params = null,
  clearDataOnLoad = false,
}) {
  const [state, dispatch] = useReducer(reducer, {data: null, error: null, isLoading: false});
  const loadData = useCallback(async () => {
    dispatch({type: 'alternLoading'})
    if (clearDataOnLoad) {
      dispatch({type: 'resetData'})
    };
    fetchFn(params)
      .then(res => {
        dispatch({type: 'setData', payload: res})
        dispatch({type: 'alternLoading'})
      })
      .catch(err => {
        dispatch({type: 'setError', payload: err})
        dispatch({type: 'alternLoading'})
      })
  }, [fetchFn, params, clearDataOnLoad])

  useEffect(() => {
    if (loadOnMount) loadData();
  }, [loadData, loadOnMount]);

  return { ...state, loadData };
};