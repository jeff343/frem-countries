import styled from "styled-components";
import { useState } from "react";
import caretIcon from "../assets/images/caret-down.svg"


const Container = styled.div`
    position: relative;
    display: flex;
    width: auto;
    margin: auto 20px auto;    
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

const FilterMenu = () => {
    const regionArr = ['Africa', 'America', 'Asia', 'Europe', 'Oceania']
    const [filterValue, setFilterValue] = useState("Filter by Region")
    const [menuDisplay, setMenuDisplay] = useState(false)

    const filterSelect = (reg) => {
        if (reg === filterValue) {
            setFilterValue("Filter by Region")
            console.log('click')
        } else {
            setFilterValue(reg)
            console.log(filterValue)
        }
    }

    return (
        <Container>
            <Dropdown onClick={() => setMenuDisplay(!menuDisplay)}>
                <Text>{filterValue}</Text>
                <Icon src={caretIcon} alt="arrow down"/>
            </Dropdown>
                <OptionsWrapper menuDisplay={menuDisplay}>
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