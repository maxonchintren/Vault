import React from 'react';
import { ScreenWrapper } from '../../shared/components/wrappers/ScreenWrapper';
import { Text } from 'react-native';
import { createStyleSheet } from '../../shared/theme/createStyleSheet';

export const HomeScreen: React.FC = () => {
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Hello world</Text>
    </ScreenWrapper>
  );
};

const styles = createStyleSheet((theme) => ({
  text: {
    color: theme.colors.red,
  },
}));
