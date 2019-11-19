
import React from 'react';
import styled from 'styled-components'

import ArmyList from'./ArmyList';
import SelectionPane from './SelectionPane'

const Container = styled.div`
    display: flex;
    height: 70vh;
    margin: 30px
`;

const ArmyBuildPane = () => (
    <Container>
        <SelectionPane />
        <ArmyList />
    </Container>
);

export default ArmyBuildPane;
