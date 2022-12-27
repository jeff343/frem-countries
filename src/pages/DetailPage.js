import styled from "styled-components";
import arrowIcon from "../assets/images/back-arrow.svg";
import { useParams, Link } from "react-router-dom";

const Container = styled.div`
    width: 90%;
    max-width: 1200px;
    margin: auto;
`;

const Button = styled.button`
    background: ${props => props.theme.elements};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 30px;
    width: 100px;
    box-shadow: ${props => props.theme.shadow};
    border: none;
    border-radius: 5px;
    margin: 60px 0;
    color: ${props => props.theme.text};

    &:hover {
        cursor: pointer;
    }
`;

const Icon = styled.img`
    filter: ${props => props.theme.filter}
`;

const DisplayContainer = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
    margin: 40px auto;

    @media (max-width: 800px) {
        flex-direction: column;
    }
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 20px;
    width: 100%;
`;

const Country = styled.h1`
    font-weight: 800;
    font-size: 20px;
    margin: 0;
`;

const ListRow = styled.div`
    display: flex;
    width: 100%;
    margin: 0;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const ListCol = styled.ul`
    font-size: 14px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;

    @media (max-width: 800px) {
        margin: 20px auto;
    }
`;

const ListItem = styled.li`
    margin: 5px 0 0;
`;

const Bold = styled.span`
    font-weight: 600;
`;

const BorderContainer = styled.div`
    grid-columns: 1/3;
    display:  flex;
    align-items: flex-start;
    margin-top: 15px;

    @media (max-width: 800px) {
        flex-direction: column;
        width: 100%;
        max-width: 300px;
    }
`;

const BorderLinks = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    row-gap: 15px;
    margin-left: 10px;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 800px) {
        margin: 10px 0;
    }
`;

const BorderButton = styled(Button)`
    width: 100px;
    padding: 0 5px;
    margin: 0 auto;
    font-size: 12px;

    @media (max-width: 800px) {
        width: 75px;
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
`;

const DetailPage = ({ countries }) => {

    const  { countryName } = useParams()

    const country = countries.find((country) => country.name.common === countryName)

    const getBorderName = (b) => {
        if (!b) {
            return false
        }
        const arr = []
        for (const i in b) {
            arr.push(countries.find((c) => (c.cca3 === b[i] || c.cioc === b[i])).name.common)
        }
        return arr
    }

    const getCurrencies = (currency) => {
        if (!currency) {
            return false
        }
        const arr = []
        for (const i in currency) {
            arr.push(currency[i].name)
        }
        return arr
    }

    const getLanguages = (language) => {
        const arr = []
        for (const i in language) {
            arr.push(language[i])
        }
        return arr
    }

    const languages = getLanguages(country.languages)
    const currencies = getCurrencies(country.currencies) 
    const borders = getBorderName(country.borders)



    return (

        <Container>
            <StyledLink to={`/`}>
                <Button>
                    <Icon src={arrowIcon} alt="back arrow" />
                    <span>Back</span>
                </Button>
            </StyledLink>
            <DisplayContainer>
                <FlagWrapper>
                    <FlagImg src={country.flags.svg} alt="country flag" />
                </FlagWrapper>
                <InfoContainer>
                    <Country>{country.name.common}</Country>
                    <ListRow>
                        <ListCol>
                            <ListItem><Bold>Native Name:</Bold> {country.name.nativeName[Object.keys(country.name.nativeName)[0]].common}</ListItem>
                            <ListItem><Bold>Population:</Bold> {country.population.toLocaleString()}</ListItem>
                            <ListItem><Bold>Region:</Bold> {country.region}</ListItem>
                            <ListItem><Bold>Sub Region:</Bold> {country.subregion}</ListItem>
                            {country.capital && <ListItem><Bold>Capital:</Bold> {country.capital[0]}</ListItem>}
                        </ListCol>
                        <ListCol>
                            <ListItem><Bold>Top Level Domain:</Bold> {country.tld[0]}</ListItem>
                            {currencies && 
                                <ListItem>
                                    <Bold>Currencies: </Bold> 
                                    {currencies.join(', ')}
                                </ListItem>}
                            <ListItem><Bold>Languages: </Bold>
                                {languages.join(', ')}
                            </ListItem>
                        </ListCol> 
                    </ListRow>
                    <BorderContainer>
                        <Bold>Borders: </Bold>
                        <BorderLinks>
                            {borders 
                                ? borders.map((border) => {
                                    return (
                                        <StyledLink to={`/detail/${border}`} key={border}>
                                            <BorderButton>{border}</BorderButton>
                                        </StyledLink>
                                        )
                                })
                                : <span> None</span>
                            }
                        </BorderLinks>
                    </BorderContainer>
                </InfoContainer>
            </DisplayContainer>
        </Container>
    )
}

export default DetailPage