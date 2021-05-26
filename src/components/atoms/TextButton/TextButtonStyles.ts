import styled from 'styled-components';
import { ButtonColorVariants, ButtonSizeVariants } from 'ts/enums';
import { ButtonTypography } from 'styles/Buttons';

interface ButtonProps {
  readonly sizeVariant: ButtonSizeVariants;
  readonly colorVariant: ButtonColorVariants;
  readonly fullWidth?: boolean;
  readonly outlined?: boolean;
  readonly rounded?: boolean;
  readonly isLoading?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ sizeVariant }) => ButtonTypography({ size: sizeVariant })};
  background-color: ${({ theme, outlined, colorVariant }) =>
    !outlined ? theme.colors.buttons.colors[colorVariant] : 'transparent'};
  color: ${({ theme, outlined, colorVariant }) =>
    outlined ? theme.colors.buttons.colors[colorVariant] : theme.colors.light.light3};
  border-radius: ${({ rounded }) => (rounded ? '50px' : '0')};
  border: ${({ outlined, theme, colorVariant }) =>
    outlined ? `solid 1px ${theme.colors.buttons.colors[colorVariant]}` : 'none'};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  cursor: pointer;
  outline: none;
  &:disabled {
    background-color: ${({ theme, outlined }) => (!outlined ? theme.colors.light.light3 : 'transparent')};
    color: ${({ theme, outlined }) => (!outlined ? theme.colors.dark.dark1 : theme.colors.light.light3)};
    border-color: ${({ outlined, theme }) => (outlined ? `${theme.colors.light.light3}` : 'none')};
  }
`;
