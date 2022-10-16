import React, {useState} from 'react';

const useErrorMsg = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  return [errorMsg, setErrorMsg];
};

export default useErrorMsg;