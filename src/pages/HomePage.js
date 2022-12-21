import styled from "styled-components";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterMenu from "../components/FilterMenu";
import CountryCard from "../components/CountryCard";

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 60px;
    width: 90%;
    margin: 40px auto;
`;

const HomePage = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState("")

    const handleSearch = (p) => {
        setSearch(p)
        console.log(search)
    }

    useEffect(() => {

        const getCountries = async() => {
            try {
                const res = await fetch("https://restcountries.com/v3.1/all")
                const data = await res.json()
                setCountries(data.slice(0,10))
            } catch (error){
                console.log(error)
            }
        }
        getCountries()
    }, [])

    return (
        <>
            <FilterContainer>
                <SearchBar handleSearch={handleSearch} search={search}/>
                <FilterMenu />
            </FilterContainer>
            <CardContainer>
                {!countries ? <h1>Loading...</h1> 
                : (countries.map((country) => {
                    return <CountryCard country={country} />
            }))}
            </CardContainer>
        </>

    )

}

export default HomePage