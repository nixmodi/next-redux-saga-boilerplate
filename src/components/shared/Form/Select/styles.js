import styled, { css } from 'styled-components';

import { color, mixin, zIndexValues } from '../../../../config/styles';
import Icon from '../../Icon';

export const StyledSelect = styled.div`
  position: relative;
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  ${props =>
    props.variant === 'normal' &&
    css`
      min-height: 36px;
      padding: 5px 5px 5px 10px;
    `}
`;

export const ChevronIcon = styled(Icon)`
  margin-left: auto;
  font-size: 18px;
  /* color: ${color.inputText}; */
`;

export const Placeholder = styled.div`
  /* color: ${color.inputText}; */
`;

export const ValueMulti = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const ValueMultiItem = styled.div`
  margin: 0 5px 5px 0;
  ${mixin.tag()}
`;

export const AddMore = styled.div`
  display: inline-block;
  margin-bottom: 3px;
  padding: 3px 0;
  ${mixin.link()}
  i {
    margin-right: 3px;
    vertical-align: middle;
    font-size: 14px;
  }
`;

export const Dropdown = styled.div`
  z-index: 999999;
  position: absolute;
  top: 100%;
  left: 0;
  border-radius: 0 0 4px 4px;
  ${mixin.boxShadowDropdown}
  ${props => (props.width ? `width: ${props.width}px;` : 'width: 100%;')}
`;

export const DropdownInput = styled.input`
  padding: 10px 14px 8px;
  width: 100%;
  border: none;
  height: 36px !important;
  &:focus {
    outline: none;
  }
`;

export const ClearIcon = styled(Icon)`
  position: absolute;
  top: 4px;
  right: 7px;
  padding: 5px;
  font-size: 16px;
  /* color: ${color.inputText}; */
  ${mixin.clickable}
`;

export const Options = styled.div`
  max-height: 200px;
  ${mixin.scrollableY};
  ${mixin.customScrollbar()};
`;

export const Option = styled.div`
  padding: 8px 14px;
  word-break: break-word;
  cursor: pointer;
  &:last-of-type {
    margin-bottom: 8px;
  }
`;

export const OptionsNoResults = styled.div`
  padding: 5px 15px 15px;
  /* color: ${color.inputText}; */
`;
