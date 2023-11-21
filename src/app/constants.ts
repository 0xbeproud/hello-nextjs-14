export const SFORE_APP = {
  NAME: 'SFORE',
  NAME_KR: '스포어',
  iOS: {
    STORE_URL: `itms-apps://itunes.apple.com/app/${process.env.REACT_IOS_APP_STORE_APP_ID}`,
  },
  Android: {
    STORE_URL: `market://details?id=${process.env.REACT_APP_PACKAGE_NAME}`,
  },
};
