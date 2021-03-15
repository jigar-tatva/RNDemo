import React, { useContext, createContext } from 'react';
import { View, Text } from 'react-native';

const themes = {
  light: {
    foreground: "#000000",
    background: '#eeeeee',
  },
  dark: {
    foreground: "#ffffff",
    background: '#222222',
  },
};

const ThemeContext = createContext(themes.light);

export function ThemeScreen() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <ThemeButton />
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View
        style={{
          height: 50,
          width: 200,
          backgroundColor: theme.background,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
        }}
      >
        <Text
          style={{ color: theme.foreground, fontSize: 15, fontWeight: '600' }}
        >
          {"Theme"}
        </Text>
      </View>
    </View>
  );
}
