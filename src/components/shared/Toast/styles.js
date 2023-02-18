import styled from 'styled-components';

import { color, mixin } from 'src/config/styles';
import { Icon } from '../../shared';

export const Container = styled.div`
  z-index: 999999;
  position: fixed;
  right: 30px;
  top: 50px;
`;

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 5px;
  width: 300px;
  padding: 15px 20px;
  border-radius: 3px;
  color: #fff;
  background: ${props => color[props.type]};
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.clearfix}
  ${mixin.hardwareAccelerate}
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  &.ba-toast-enter,
  &.ba-toast-exit.ba-toast-exit-active {
    opacity: 0;
    right: -10px;
  }

  &.ba-toast-exit,
  &.ba-toast-enter.ba-toast-enter-active {
    opacity: 1;
    right: 0;
  }
`;

export const Content = styled.div`
  display: block;
  width: calc(100% - 36px);
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  right: 14px;
  font-size: 22px;
  cursor: pointer;
  color: #fff;
`;

export const Title = styled.div`
  padding-right: 22px;
  text-transform: capitalize;
  font-size: 16px;
`;

export const Message = styled.div`
  padding: 8px 10px 0 0;
  white-space: pre-wrap;
  font-size: 14px;
  font-family: 'Konnect Light';
  letter-spacing: 0.25px;
`;

export const IconImg = styled.img`
  color: #ffffff;
  width: 24px;
  height: 24px;
`;
