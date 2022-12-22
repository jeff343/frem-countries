import styled from "styled-components";
import arrowIcon from "../assets/images/back-arrow.svg";
import { useParams } from "react-router-dom";

const Button = styled.button`
    background: ${props => props.theme.elements};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 30px;
    width: 100px;
    box-shadow: 0px 0px 5px 0px lightgrey;
    border: none;
    border-radius: 5px;
    margin: 60px 0;

    &:hover {
        cursor: pointer;
    }
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 90%;
    column-gap: 30px;
    margin: 40px auto;
`;

const FlagWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const FlagImg = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 20px;
`;

const Country = styled.h1`
    font-weight: 800;
    font-size: 20px;
    grid-column: 1/3;
    margin: auto 0;
`;

const Info = styled.ul`
    font-size: 14px;
    list-style-type: none;
`;

const ListItem = styled.li`
    margin: 5px 0 0;
`;

const Bold = styled.span`
    font-weight: 600;
`;

const BorderLinks = styled.div`
    grid-columns: 1/3;
`;

const DetailPage = ({ countries }) => {

    const  { countryName } = useParams()


    const country = countries.find((country) => country.name.common === countryName)

    return (

        <>
            <Button>
                <img src={arrowIcon} alt="back arrow" />
                <span>Back</span>
            </Button>
            <Container>
                <FlagWrapper>
                    <FlagImg src={country.flags.svg} alt="country flag" />
                </FlagWrapper>
                <InfoContainer>
                    <Country>{country.name.common}</Country>
                    <Info>
                        <ListItem><Bold>Native Name:</Bold> {country.name.nativeName.ara.common}</ListItem>
                        <ListItem><Bold>Population:</Bold> {country.population}</ListItem>
                        <ListItem><Bold>Region:</Bold> {country.region}</ListItem>
                        <ListItem><Bold>Sub Region:</Bold> {country.subregion}</ListItem>
                        <ListItem><Bold>Capital:</Bold> {country.capital[0]}</ListItem>
                    </Info>
                    <Info>
                        <ListItem><Bold>Top Level Domain:</Bold> {country.tld[0]}</ListItem>
                        <ListItem><Bold>Currencies:</Bold> {country.currencies[Object.keys(country.currencies)[0]].name}</ListItem>
                        <ListItem><Bold>Languages:</Bold> To Do</ListItem>
                    </Info>
                    <BorderLinks>
                        <Bold>Border Countries: </Bold>
                        <span>To Do</span>
                    </BorderLinks>
                </InfoContainer>
            </Container>
        </>
    )
}

export default DetailPage