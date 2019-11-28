import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Body = styled.div``;

const Title = styled.div`
  border-bottom: 1px solid;
`;

const CollapsableHeader = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Body onClick={() => setOpen(!open)}>
      <Title>
        {title} {open ? <>&#9650;</> : <>&#9660;</>}
      </Title>

      {open && <>{children}</>}
    </Body>
  );
};

CollapsableHeader.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  title: PropTypes.string.isRequired
};

export default CollapsableHeader;
