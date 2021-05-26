import { ButtonSizeVariants } from 'ts/enums';

type ButtonTypographyParams = {
  size: ButtonSizeVariants;
};

export const ButtonTypography = ({ size }: ButtonTypographyParams): string => {
  const baseStyle = `
    font-family: 'Roboto Slab', serif;
  `;

  switch (size) {
    case ButtonSizeVariants.small:
      return `
        ${baseStyle}
        font-size: 0.75rem;
        padding: 5px 0.75rem;
      `;
    case ButtonSizeVariants.normal:
      return `
          ${baseStyle}
          font-size: 1rem;
          padding: 7px 1rem;
        `;
    case ButtonSizeVariants.medium:
      return `
        ${baseStyle}
        font-size: 1.25rem;
        padding: 9px 1.25rem;
      `;
    case ButtonSizeVariants.large:
      return `
        ${baseStyle}
        font-size: 1.5rem;
        padding: 11px 1.5rem;
      `;
  }
};
