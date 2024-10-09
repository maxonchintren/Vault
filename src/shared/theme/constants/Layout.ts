import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';

export const Layout = {
  window: {width, height},
  isAndroid: IS_ANDROID,
  isSmallDevice: width < 375,
  isSmallHeightDevice: height < 570,
  pixelRatio: PixelRatio.get(),
};
