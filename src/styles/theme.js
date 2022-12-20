import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${props => props.theme.bg};
        color: ${ props => props.theme.text };
    }
`;

const lightTheme = {
    bg: 'hsl(0, 0%, 98%)',
    text: 'hsl(200, 15%, 8%)',
    elements: 'hsl(0, 0%, 100%)'
}

const darkTheme = {
    bg: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    elements: 'hsl(209, 23%, 22%)'
}

export { GlobalStyles }
export { lightTheme }
export { darkTheme }