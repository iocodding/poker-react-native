import { NativeBaseProvider, StatusBar } from 'native-base';
import { useColorScheme } from 'react-native';
import { Calculator } from './src/screens/Calculator';
import themes from './styles/themes';

export default function App() {
  const deviceTheme = useColorScheme();
  const theme = themes.dark.theme;

  return (
    <NativeBaseProvider theme={theme}  bg='background.900'>
      <Calculator />
    </NativeBaseProvider>
  );
}
