import React from 'react';
import styled from 'styled-components'

import CollapsableHeader from './CollapsableHeader'
import SelectionCard from './SelectionCard'

import {getFaction} from 'util/jsonUtils'


const Body = styled.div`
    border-style: solid;
    border-width: 1px;
    flex-grow: 1;
    border-right: 0
`;


const SelectionPane = (props) => {
    const curData = getFaction('rebel');
    return (
        <Body>
            {Object.keys(curData).map((item, index) => {
            return (
            <CollapsableHeader key={item} title={item}>
            {
                curData[item].map((subitem, i) => {
                    console.log(subitem);
                    return (
                        <SelectionCard
                            unit={subitem}
                            key={subitem.name}
                        />
                    )
                })
            }
            </CollapsableHeader>
            )
        })}
        </Body>
    )
};

export default SelectionPane;