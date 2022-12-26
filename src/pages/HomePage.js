import styled from "styled-components";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterMenu from "../components/FilterMenu";
import CountryCard from "../components/CountryCard";

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
    width: 90%;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    margin: 40px 0;
    width: 100%;
`;

const HomePage = ({ countries }) => {
    
    const [search, setSearch] = useState("")
    const [filterValue, setFilterValue] = useState("Filter by Region")
    const [filterActive, setFilterActive] = useState(false)

    const filterSelect = (reg) => {
        if (reg === filterValue) {
            setFilterValue("Filter by Region")
            setFilterActive(false)
        } else {
            setFilterValue(reg)
            setFilterActive(true)
        }
    }

    const handleSearch = (p) => {
        setSearch(p)
        console.log(search)
   }


    return (
        <Container>
            <FilterContainer>
                <SearchBar handleSearch={handleSearch} search={search}/>
                <FilterMenu filterValue={filterValue} filterSelect={filterSelect} />
            </FilterContainer>
            <CardContainer>
                {!countries ? <h1>Loading...</h1> 
                : (filterActive) 
                    ? (countries.filter((country) => country.region === filterValue)).map((country) => {
                        return <CountryCard country={country} key={country.name.common} />
                    })
                    :(countries.map((country) => {
                        return <CountryCard country={country} key={country.name.common} />
            }))}
            </CardContainer>
        </Container>

    )

}

export default HomePage