
import React from 'react';
import styled from 'styled-components'

import ArmyList from'./ArmyList';
import SelectionPane from './SelectionPane'
import UsageBar from './UsageBar'

const Container = styled.div`
    display: grid;
    grid-template-columns: 33% 66%
    grid-template-rows: 10% 90%;
    height: 70vh;
    margin: 30px
`;

const ArmyBuildPane = () => (
    <Container>
        <UsageBar/>
        <SelectionPane />
        <ArmyList />
    </Container>
);

export default ArmyBuildPane;
