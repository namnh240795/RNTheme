import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const buildStyle = type => {
  try {
    const style = [styles.default];
    if (type) {
      style.push(styles[type]);
    }
  } catch (error) {
    console.log('error', error);
  }
};

const Caption = props => {
  const { children, type } = props;
  const combineStyle = buildStyle(type);

  return <Text style={combineStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {},
});

Caption.propTypes = {
  type: PropTypes.oneOf([
    'white',
    'warning',
    'success',
    'primary',
    'placeholder',
    'link',
    'hint',
    'disabled',
    'danger',
    'black',
  ]),
};

export default Caption;
