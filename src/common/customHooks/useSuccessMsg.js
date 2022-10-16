import React, {useState} from 'react';

const useSuccessMsg = () => {
  const [successMsg, setSuccessMsg] = useState(null);
  return [successMsg, setSuccessMsg]
};

export default useSuccessMsg;