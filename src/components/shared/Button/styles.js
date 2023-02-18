import styled, { css } from "styled-components";
import Spinner from "../Spinner";
import { color } from "src/config/styles";

export const StyledButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Konnect Medium";
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 16px;
  /* border-radius: 4px; */
  border-radius: ${(props) => (!props.rounded ? "4px" : "40px")};
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out;
  border-color: 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  ${(props) => buttonVariants[props.variant]}
  ${(props) => buttonSize[props.size]}
  ${(props) =>
    props.block &&
    css`
      width: 100%;
    `}
  &:hover {
    box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    opacity: 0.75;
    cursor: not-allowed;
    &:hover {
      box-shadow: none !important;
    }
  }
`;

const transparentStyles = css`
  color: ${(props) => color[props.variant]};
  border-color: ${(props) => color[props.variant]};
  background: transparent;
  border-width: 2px;
  &:hover {
    box-shadow: none !important;
    background: ${(props) => color[props.variant]};
    color: #ffffff;
    &:disabled {
      background: transparent;
      color: ${(props) => color[props.variant]};
    }
  }
`;

const primary = css`
  color: #ffffff;
  background: ${(props) => color[props.variant]};
  ${(props) => props.transparent && transparentStyles}
`;
const secondary = css`
  color: #ffffff;
  background: ${(props) => color[props.variant]};
  ${(props) => props.transparent && transparentStyles}
`;
const light = css`
  color: #ffffff;
  background: ${(props) => color[props.variant]};
  ${(props) => props.transparent && transparentStyles}
`;
const dark = css`
  color: #ffffff;
  background: ${(props) => color[props.variant]};
  ${(props) => props.transparent && transparentStyles}
`;
const inline = css`
  color: #ffffff;
  background: ${(props) => color[props.variant]};
  ${(props) => props.transparent && transparentStyles}
`;
const info = css`
  color: #ffffff;
  background: ${(props) => color[props.variant]};
  ${(props) => props.transparent && transparentStyles}
`;
const success = css`
  color: #ffffff;
  background: ${(props) => color[props.variant]};
  ${(props) => props.transparent && transparentStyles}
`;
const warning = css`
  color: #ffffff;
  background: ${(props) => color[props.variant]};
  ${(props) => props.transparent && transparentStyles}
`;
const danger = css`
  color: #ffffff;
  background: ${(props) => color[props.variant]};
  ${(props) => props.transparent && transparentStyles}
`;

const xxl = css`
  font-family: "Konnect Bold";
  font-size: 24px;
  max-width: 325px;
  width: 100%;
  min-height: 68px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
const xl = css`
  min-width: 200px;
  min-height: 76px;
  align-items: center;
  justify-content: center;
`;
const lg = css`
  min-width: 200px;
  min-height: 56px;
  align-items: center;
  justify-content: center;
`;
const sm = css`
  min-width: 200px;
  min-height: 46px;
  align-items: center;
  justify-content: center;
`;
const xs = css`
  min-width: 200px;
  min-height: 36px;
  align-items: center;
  justify-content: center;
`;

const buttonSize = {
  xxl,
  xl,
  lg,
  sm,
  xs,
};

const buttonVariants = {
  primary: primary,
  secondary: secondary,
  light: light,
  dark: dark,
  inline: inline,
  info: info,
  success: success,
  warning: warning,
  danger: danger,
};

export const StyledSpinner = styled(Spinner)`
  position: relative;
  top: 1px;
  padding-right: 4px;
`;

export const Text = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
