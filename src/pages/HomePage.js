import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterMenu from "../components/FilterMenu";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

const HomePage = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")

    const handleSearch = (p) => {
        setSearch(p)
        console.log(search)
    }

    // useEffect(() => {

    //     const getCountries = async() => {
    //         try {
    //             const res = await fetch("https://restcountries.com/v3.1/all")
    //             const data = await res.json()
    //             setCountries(data.slice(0,10))
    //         } catch (error){
    //             console.log(error)
    //         }
    //     }
    //     getCountries()
    // }, [])

    return (
        // <>
        //     {!countries ? <h1>Loading...</h1> 
        //     : (
        //         <p>{countries.length}</p>
        //     )}
        // </>
        <Container>
            <SearchBar handleSearch={handleSearch} search={search}/>
            <FilterMenu />
        </Container>
    )

}

export default HomePage