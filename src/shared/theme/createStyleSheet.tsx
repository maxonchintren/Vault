import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';
import { theme } from './theme';

type NamedStyles<T> = {[P in keyof T]: ViewStyle | TextStyle | ImageStyle};
type CreatorType<T> = (_theme: typeof theme) => T & NamedStyles<any>;

export function createStyleSheet<T>(creator: CreatorType<T>) {
  return StyleSheet.create(creator(theme));
}
