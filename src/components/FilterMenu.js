import styled from "styled-components";
import { useState } from "react";
import caretIcon from "../assets/images/caret-down.svg"


const Container = styled.div`
    position: relative;
    display: flex;
    width: auto;
    margin: auto 0px;    
`;

const Dropdown = styled.div`
    background: ${props => props.theme.elements};
    color: ${props => props.theme.text};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 200px;
    padding: 0 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px lightgrey;

    &:hover {
        cursor: pointer;
        filter: brightness(90%);
    }
`;

const OptionsWrapper = styled.div`
    background: ${props => props.theme.elements};
    position: absolute;
    display: ${props => ((props.menuDisplay) ? 'flex' : 'none')};
    flex-direction: column;
    top: 45px;
    width: 200px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px lightgrey;
    overflow: hidden;
`;
const Option = styled.div`
    background: ${props => props.theme.elements};
    margin: 0;
    padding: 5px 20px;

    &:hover {
        cursor: pointer;
        filter: brightness(90%);
    }

`;

const Text = styled.span`
    font-size: 12px;
    font-weight: 600;
`;

const Icon = styled.img`
    height: 16px;
`;

const FilterMenu = ({ filterValue, filterSelect}) => {
    const regionArr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const [menuDisplay, setMenuDisplay] = useState(false)


    return (
        <Container>
            <Dropdown onClick={() => setMenuDisplay(!menuDisplay)}>
                <Text>{filterValue}</Text>
                <Icon src={caretIcon} alt="arrow down"/>
            </Dropdown>
                <OptionsWrapper menuDisplay={menuDisplay} onClick={()=> setMenuDisplay(false)}>
                    {regionArr.map((region) => {
                        return (
                            <Option key={region} onClick={() => filterSelect(region)}>
                                <Text>{region}</Text>
                            </Option>
                        )
                    })}
                </OptionsWrapper>
        </Container>
    )
}

export default FilterMenu