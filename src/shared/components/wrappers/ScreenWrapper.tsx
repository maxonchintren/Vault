import React, { PropsWithChildren } from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

interface ScreenWrapperProps extends SafeAreaViewProps {}
export const ScreenWrapper: React.FC<PropsWithChildren<ScreenWrapperProps>> = ({
  children,
  style,
  ...props
}) => {
  return (
    <SafeAreaView style={style} {...props}>
      {children}
    </SafeAreaView>
  );
};
