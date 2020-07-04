import React, { useState, useCallback } from 'react';
import { TextInput } from 'react-native';

const Login = ({ initialValue = {} }) => {
  const [email, setEmail] = useState(initialValue.email);
  const onChangeText = useCallback(value => {
    setEmail(value);
  }, []);

  return <TextInput value={email} onChangeText={onChangeText} placeholder="Email" />;
};

export default Login;
