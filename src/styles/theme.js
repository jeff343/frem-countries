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
    elements: 'hsl(0, 0%, 100%)',
    ph: '#A8A8A8',
    filter: 'invert(53%) sepia(0%) saturate(949%) hue-rotate(316deg) brightness(96%) contrast(92%)'
}

const darkTheme = {
    bg: 'hsl(207, 26%, 17%)',
    text: 'hsl(0, 0%, 100%)',
    elements: 'hsl(209, 23%, 22%)',
    ph: 'hsl(0, 0%, 100%)',
    filter: 'invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg) brightness(105%) contrast(105%)'
}

export { GlobalStyles }
export { lightTheme }
export { darkTheme }