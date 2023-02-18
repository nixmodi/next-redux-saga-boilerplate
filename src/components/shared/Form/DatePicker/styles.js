import styled, { css } from 'styled-components';
import { mixin } from '../../../../config/styles';

export const StyledDatePicker = styled.div`
  position: relative;
`;

export const Dropdown = styled.div`
  z-index: 999;
  position: absolute;
  top: 130%;
  right: 0;
  width: 270px;
  border-radius: 3px;
  ${mixin.boxShadowDropdown}
  ${props =>
    props.withTime &&
    css`
      width: 360px;
      padding-right: 90px;
    `}
`;

export const DateSection = styled.div`
  position: relative;
  padding: 20px;
`;

export const SelectedMonthYear = styled.div`
  display: inline-block;
  padding-left: 7px;
`;

export const YearSelect = styled.select`
  margin-left: 5px;
  width: 60px;
  height: 22px;
  background: transparent;
`;

export const PrevNextIcons = styled.div`
  position: absolute;
  top: 12px;
  right: 19px;
  i {
    padding: 7px 5px 4px;
    font-size: 22px;
    ${mixin.clickable}
    &:hover {
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 15px;
  text-align: center;
`;

export const DayName = styled.div`
  width: 14.28%;
  height: 30px;
  line-height: 30px;
`;

export const Day = styled.div`
  width: 14.28%;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
`;

export const TimeSection = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 90px;
  padding: 5px 0;
  ${mixin.scrollableY}
`;

export const Time = styled.div`
  padding: 5px 0 5px 20px;
  ${props => !props.isFiller && hoverStyles}
  ${props => props.isSelected && selectedStyles}
`;

const hoverStyles = css`
  ${mixin.clickable}
  &:hover {
  }
`;

const selectedStyles = css`
  color: #fff;
  &:hover,
  & {
  }
`;
