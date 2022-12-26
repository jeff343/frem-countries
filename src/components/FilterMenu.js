import styled from "styled-components";
import { useState } from "react";
import caretIcon from "../assets/images/caret-down.svg"
import closeIcon from "../assets/images/close.svg"


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
    box-shadow: ${props => props.theme.shadow};

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
    box-shadow: ${props => props.theme.shadow};
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
    filter: ${props => props.theme.filter};
`;

const FilterMenu = ({ filterValue, filterSelect, filterActive}) => {
    const regionArr = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    const [menuDisplay, setMenuDisplay] = useState(false)

    const handleMenu = () => {
        if (filterActive) {
            filterSelect(filterValue)
        } else {
            setMenuDisplay(!menuDisplay)
        }

    }

    return (
        <Container>
            <Dropdown onClick={() => handleMenu()}>
                <Text>{filterValue}</Text>
                {filterActive
                    ? <Icon src={closeIcon} alt="clear filter" />
                    : <Icon src={caretIcon} alt="arrow down" />
                }           
            </Dropdown>
                <OptionsWrapper menuDisplay={menuDisplay} onClick={()=> setMenuDisplay(false)}>
                    {regionArr.map((region) => {
                        return (
                            <Option key={region} filterValue={filterValue} onClick={() => filterSelect(region)}>
                                <Text>{region}</Text>
                            </Option>
                        )
                    })}
                </OptionsWrapper>
        </Container>
    )
}

export default FilterMenu