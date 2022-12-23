import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";


function App() {
  const [theme, setTheme] = useState(lightTheme)
  const [countries, setCountries] = useState("")

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
  }

  useEffect(() => {

    const getCountries = async() => {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all")
            const data = await res.json()
            setCountries(data)
        } catch (error){
            console.log(error)
        }
    }
    getCountries()
}, [])

  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} theme={theme}/>
        <Routes>
          <Route path='/' element={<HomePage countries={countries} />} />
          <Route 
            path='/detail/:countryName'
            element={<DetailPage countries={countries} />}
          />
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
