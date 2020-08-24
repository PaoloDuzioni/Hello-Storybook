import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './style';

const Button = ({ handleClick, children, ...props }) => {
    return (
        <StyledButton onClick={handleClick} {...props}>
            {children}
        </StyledButton>
    );
};

Button.propTypes = {
    /**
     * Set color of button as primary
     */
    primary: PropTypes.bool,
    /**
     * Set color of button as secondary
     */
    secondary: PropTypes.bool,
    /**
     * Set the button as disabled
     */
    disabled: PropTypes.bool,
    /**
     * Handle the click event on the button
     */
    handleClick: PropTypes.func,
};

export default Button;
