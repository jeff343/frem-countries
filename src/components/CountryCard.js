import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 350px;
    margin: auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 5px 0px lightgrey;
`;

const CardImgRow = styled.div`
    background: ${props => props.theme.elements};
    height: 150px;
    width: 100%;
    margin: 0;
    display: flex;
    justify-content: center;
`;

const CardImg = styled.img`
    height: 150px;
    width: 250px;
    object-fit: cover;
`;


const CardRow = styled.div`
    background: ${props => props.theme.elements};
    height: 200px;
    width: 100%;
    margin: 0;
`;

const Country = styled.h2`
    font-weight: 800;
    font-size: 20px;
    margin: 20px 20px 15px;
`;

const Description = styled.ul`
    font-size: 14px;
    list-style-type: none;
`;

const ListItem = styled.li`
    margin: 5px 0 0 20px;
`;

const Bold = styled.span`
    font-weight: 600;
`;

const StyledLink = styled(Link)`
    color: ${props => props.theme.text};
    text-decoration: none;
`;

const CountryCard = ({ country }) => {

    return(
        <StyledLink to={`/detail/${country.name.common}`}>
            <Container>
                <CardImgRow>
                    <CardImg src={country.flags.svg} alt="country flag" />
                </CardImgRow>
                <CardRow>
                    <Country>{country.name.common}</Country>
                    <Description>
                        <ListItem><Bold>Population:</Bold> {country.population}</ListItem>
                        <ListItem><Bold>Region: </Bold>{country.region}</ListItem>
                        <ListItem><Bold>Capital: </Bold> {country.capital[0]}</ListItem>
                    </Description>
                </CardRow>
            </Container>
        </StyledLink>
    )
}

export default CountryCard