import {storeFactory, appStateCreator, handleActionCreator} from './';

export default (reducer, initialState) => {
  const [StoreProvider, Store] = storeFactory(reducer, initialState);
  const useAppState = appStateCreator(Store);
  const useHandleAction = handleActionCreator(Store);
  return [StoreProvider, useAppState, useHandleAction ,Store];
}