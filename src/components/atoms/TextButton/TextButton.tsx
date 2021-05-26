import React, { ButtonHTMLAttributes } from 'react';
import { StyledButton } from './TextButtonStyles';
import { ButtonColorVariants, ButtonSizeVariants } from 'ts/enums';
import { CircularLoader } from 'components/atoms';

export interface TextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  sizeVariant?: ButtonSizeVariants;
  colorVariant?: ButtonColorVariants;
  fullWidth?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  isLoading?: boolean;
}

const TextButton: React.FC<TextButtonProps> = ({
  label,
  sizeVariant = ButtonSizeVariants.medium,
  colorVariant = ButtonColorVariants.primary,
  fullWidth,
  outlined,
  rounded,
  isLoading,
  ...props
}) => (
  <StyledButton
    {...props}
    sizeVariant={sizeVariant}
    colorVariant={colorVariant}
    fullWidth={fullWidth}
    outlined={outlined}
    rounded={rounded}
    isLoading={isLoading}
  >
    {isLoading ? <CircularLoader size={20} color={outlined ? 'currentColor' : 'white'} /> : <span>{label}</span>}
  </StyledButton>
);

export default TextButton;
