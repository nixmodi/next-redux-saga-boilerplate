import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { color } from 'src/config/styles';
import Icon from '../Icon';

import { StyledSpinner, Text, StyledButton } from './styles';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'dark',
    'light',
    'info',
    'success',
    'warning',
    'danger'
  ]),
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  faIcon: PropTypes.string,
  iconSize: PropTypes.number,
  block: PropTypes.bool,
  size: PropTypes.string,
  rounded: PropTypes.bool,
  transparent: PropTypes.bool,
  disabled: PropTypes.bool,
  isWorking: PropTypes.bool,
  onClick: PropTypes.func
};

const defaultProps = {
  className: undefined,
  children: undefined,
  variant: 'primary',
  icon: undefined,
  faIcon: undefined,
  iconSize: 18,
  block: false,
  size: 'm',
  rounded: false,
  transparent: false,
  disabled: false,
  isWorking: false,
  onClick: () => {}
};

const Button = forwardRef(
  (
    {
      children,
      className,
      variant,
      icon,
      faIcon,
      iconSize,
      disabled,
      block,
      size,
      rounded,
      transparent,
      isWorking,
      onClick,
      ...buttonProps
    },
    ref
  ) => {
    const handleClick = e => {
      if (!disabled && !isWorking) {
        onClick(e);
      }
    };

    let classes = className ? ` ${className}` : '';

    return (
      <StyledButton
        className={classes}
        {...buttonProps}
        onClick={handleClick}
        variant={variant}
        size={size}
        block={block}
        rounded={rounded}
        transparent={transparent}
        disabled={disabled || isWorking}
        ref={ref}
      >
        {children && <Text withPadding={isWorking || icon}>{children}</Text>}
        {faIcon && <i className={`fa ${faIcon}`} />}
        {!isWorking && icon && typeof icon === 'string' && (
          <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
        )}
        {isWorking && (
          <StyledSpinner size={26} color={getIconColor(transparent, variant)} />
        )}
      </StyledButton>
    );
  }
);

const getIconColor = (transparent, variant) =>
  transparent ? color[variant] : '#ffffff';

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
