import styled from "styled-components"
import moonSVG from "../assets/images/moon.svg"
import moonFillSVG from "../assets/images/moon-fill.svg"
import { lightTheme } from "../styles/theme";

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
    width: 100%;
    background: ${props => props.theme.elements}
`;

const Column = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const Title = styled.h1`
    font-wieght: 600;
    margin: auto;
    font-size: 16px;
    margin-left: 30px;
`;

const ThemeButton = styled.div`
    margin: auto;
    display: flex;
    align-items: center;
    margin-right: 30px;
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
    )        
}

export default Header