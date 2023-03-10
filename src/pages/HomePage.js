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
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 40px;
    margin: 40px 0;
    width: 100%;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
    }
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

    const searchFilter = (countries) => {
        return (countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase())))
    }

    const handleSearch = (p) => {
        setSearch(p)
   }


    return (
        <Container>
            <FilterContainer>
                <SearchBar search={search} handleSearch={handleSearch} />
                <FilterMenu filterValue={filterValue} filterActive={filterActive} filterSelect={filterSelect} />
            </FilterContainer>
            <CardContainer>
                {!countries ? <h1>Loading...</h1> 
                : (filterActive) 
                    ? (searchFilter(countries).filter((country) => country.region === filterValue)).map((country) => {
                        return <CountryCard country={country} key={country.name.common} />
                    })
                    :(searchFilter(countries).map((country) => {
                        return <CountryCard country={country} key={country.name.common} />
            }))}
            </CardContainer>
        </Container>

    )

}

export default HomePage