import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Login from './Login';

const initEmail = async () => 'namnh240795@gmail.com';

export const useInitialEmail = () => {
  const [initialEmail, setInitialEmail] = useState();

  useEffect(() => {
    let isMounted = true;
    const getInitialEmail = async () => {
      const result = await initEmail();
      isMounted && setInitialEmail({ email: result });
    };
    getInitialEmail();
    return () => (isMounted = false);
  }, []);

  return [initialEmail];
};

const Home = () => {
  const [initialEmail] = useInitialEmail();

  if (!initialEmail) {
    return <ActivityIndicator id="homeIndicator" />;
  }

  return <Login initialValue={{ email: initialEmail }} id="login" />;
};

export default Home;
