import styled from "styled-components"
import moonSVG from "../assets/images/moon.svg"
import moonFillSVG from "../assets/images/moon-fill.svg"
import { lightTheme } from "../styles/theme";

const Background = styled.div`
    display: flex;
    justify-content: center;
    height: 100px;
    width: 100%;
    background: ${props => props.theme.elements};
    box-shadow: ${props => props.theme.shadow};
`;

const Container = styled.div`
    margin: auto;
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
`;

const Column = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 600px;
`;

const Title = styled.h1`
    font-wieght: 600;
    margin: auto;
    font-size: 20px;
    margin-left: 0px;
    @media (max-width: 800px) {
        font-size: 16px;
    }
`;

const ThemeButton = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    margin-right: 0px;
    border: none;
    background: none;
    font-size: 12px;

    &:hover {
        cursor: pointer;
    }
`;


const MoonIcon = styled.img`
    margin-right: 10px;
    height: 20px;
`;

const Header = ({ toggleTheme, theme }) => {

    return (
        <Background>
            <Container>
                <Column>
                    <Title>Where in the world?</Title>
                </Column>
                <Column>
                    <ThemeButton onClick={() => toggleTheme()}>
                        <MoonIcon src={(theme === lightTheme) ? moonSVG : moonFillSVG} alt='theme icon' />
                        <h3>Dark Mode</h3> 
                    </ThemeButton>
                </Column>
            </Container>
        </Background>
    )        
}

export default Header