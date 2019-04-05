import { useEffect } from "preact";

export default (url, setResult, skip = [], serialize = result => result.json()) => {  
  let isValid = true;
  useEffect(() => {
    if (url && isValid) {
      fetch(url)
        .then(serialize)
        .then(result => setResult(result, isValid))
        .catch(error => setResult({}, false, error));
    }
    return () => (isValid = false);
  }, skip);
};
