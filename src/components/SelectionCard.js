import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const SelectionCardBody = styled.div`
    border-style: solid;
    border-width: 1px;
`;


const SelectionCard = (props) => {
    const {name, cost} = props.unit;
    return (
        <SelectionCardBody>
            <p>{name}</p>
            <p>{cost}</p>
        </SelectionCardBody>
    )
};

SelectionCard.propTypes = {
    // types here
};

SelectionCard.defaultProps = {
    // defaults here
};

export default SelectionCard;