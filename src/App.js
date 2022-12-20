import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme";

function App() {
  const [theme, setTheme] = useState(lightTheme)

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <h1>Hello World</h1>
        <button onClick={() => toggleTheme()}>Theme</button>
      </>
    </ThemeProvider>
  );
}

export default App;
