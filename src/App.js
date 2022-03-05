import './App.css';
import Hero from './components/Hero';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#091626",
        light: "#122843"
      },
      secondary: {
        main: "#F4F2D3",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <Hero />
    </ThemeProvider>
  )
}

export default App;
