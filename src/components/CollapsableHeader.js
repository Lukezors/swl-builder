import React,{ useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'


const CollapsableHeaderBody = styled.div`
`;

const CollapsableHeaderTitle = styled.div`
    border-style: solid;
    border-width: 1px;
`;


const CollapsableHeader = (props) => {

    const [open, setOpen] = useState(false);
    return (
        <Body onClick={() => setOpen(!open)}>
            <Title>
                {title}
            </Title>
            
            {open &&
                {children}
            }
        </Body>
                <CollapsableHeaderTitle>
                {props.title}
                </CollapsableHeaderTitle>
            {open ? (
                <div >
                {props.children}
                </div>
                ) : null}
        </CollapsableHeaderBody>
    )
};

CollapsableHeader.propTypes = {
    // types here
};

CollapsableHeader.defaultProps = {
    // defaults here
};

export default CollapsableHeader;
