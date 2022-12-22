import styled from "styled-components";
import searchSVG from "../assets/images/search-icon.svg"

const Container = styled.div`
    display: flex;
    align-items: center;
    background: ${props => props.theme.elements};
    max-width: 400px;
    width: 80%;
    height: 40px;
    margin: 20px 0;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px lightgrey;
`;

const SearchInput = styled.input`
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    border-radius: 0 5px 5px 0;

    &:focus {
        outline: 3px solid ${props => props.theme.ph}
    }

    &::placeholder {
        color: ${props => props.theme.ph};
        opacity: 1;
    }
`;

const IconWrapper = styled.div`
    width: 40px;
    height: 100%;
    display: flex;

    &:hover {
        cursor: pointer;
    }
`;

const Icon = styled.img`
    height: 16px;
    width: auto;
    margin: auto;
    filter: ${props => props.theme.filter}
`;

const SearchBar = ({ handleSearch, search }) => {


    return (
        <Container>
            <IconWrapper>
                <Icon src={searchSVG} alt="search button" />
            </IconWrapper>
            
            <SearchInput 
                type="search"
                name="search-form"
                placeholder="Search for a country..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </Container>
    )
}

export default SearchBar