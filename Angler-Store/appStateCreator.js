import { useContext } from 'preact/hooks';

export default Store => () => useContext(Store).state;