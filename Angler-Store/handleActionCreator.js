import { useContext } from 'preact/hooks';

const handleActionCreator = Store => action => payload => 
  () => useContext(Store).dispatch(action(payload));