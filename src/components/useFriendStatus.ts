import {useEffect, useState} from 'react';

const useFriendStatus = (props: any) => {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    setIsOnline(props.name === 'jigar');
  }, [props.name]);

  return isOnline;
};

export default useFriendStatus;
