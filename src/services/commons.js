// import apisauce from 'apisauce';
// const a = 'bcdde';

import TokenManagement from '../utils/TokenManagement';
// import moment from 'moment';
// import router from 'umi/router';
// import { refreshToken } from '@/services/authService';
import { getUserOrgId } from '@/services/userService/localInfo';

export const injectToken = service => TokenManager.inject(service);

export const injectBearer = (token, configs) => {
  if (!configs) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        'X-Organization-Id': getUserOrgId(),
      },
    };
  }

  if (configs.headers) {
    return {
      ...configs,
      headers: {
        ...configs.headers,
        Authorization: `Bearer ${token}`,
        'X-Organization-Id': getUserOrgId(),
      },
    };
  }

  return {
    ...configs,
    headers: {
      Authorization: `Bearer ${token}`,
      'X-Organization-Id': getUserOrgId(),
    },
  };
};

const TokenManager = new TokenManagement({
  isTokenValid: () => {
    return true;
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    // if (!userInfo) {
    //   return false;
    // }
    // const isNotExpired = moment(userInfo.loggedIn + userInfo.expires_in - 30).isAfter(moment().unix());
    // const isNotRefreshExpired = moment(userInfo.loggedIn + userInfo.expires_in * 2 - 30).isAfter(moment().unix());
    // if (!isNotRefreshExpired) {
    //   router.push({ pathname: '/auth/login' });
    // }
    // return isNotExpired;
  },
  getAccessToken: () => {
    // const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return 'abcd';
  },
  // onRefreshToken: done => {
  //   refreshToken()
  //     .then(result => {
  //       const userInfo = JSON.parse(localStorage.getItem('userInfo'));
  //       if (result.success) {
  //         done(userInfo.access_token);
  //       }
  //     })
  //     .catch(error => {
  //       done(null);
  //       router.push({ pathname: '/auth/login' });
  //     });
  // },
});

export const privateRequest = async (request, url, data, configs) => {
  const token = await TokenManager.getToken();
  return request(url, data, injectBearer(token, configs));
};
