import React from 'react';
import PropTypes from 'prop-types';

import { StyledButtonGroup } from './style';

const ButtonGroup = ({ children, ...props }) => {
    return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};

ButtonGroup.propTypes = {
    /**
     * Align items on the horizontal plane. Allowed all the flexbox values for the property `justify-content`:
     */
    justify: PropTypes.oneOf([
        'flex-start',
        'center',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
    ]),
};

ButtonGroup.defaultProps = {
    justify: 'flex-start',
};

export default ButtonGroup;
