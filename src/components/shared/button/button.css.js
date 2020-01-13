import styled, { css } from 'styled-components';
import { space } from 'styled-system';

import { theme } from 'constants/theme';
import { timeout } from 'constants/transition';

import MEDIA from 'helpers/mediaTemplates';

const makePalette = ({
  bgColor,
  bgColorActive,
  bgColorHover,
  bgColorDisabled,
  textColor,
}) => css`
  background-color: ${bgColor};
  color: ${textColor};
  :hover {
    background-color: ${bgColorHover};
  }
  :active {
    background-color: ${bgColorActive};
  }
  :disabled {
    background-color: ${bgColorDisabled};
  }
`;

const PALETTES = {
  primary: makePalette({
    bgColor: theme.colors.Oranges[60],
    bgColorHover: theme.colors.Oranges[30],
    bgColorActive: theme.colors.Oranges[60],
    bgColorDisabled: theme.colors.Grays[60],
    textColor: theme.colors.Whites[100],
  }),
  secondary: makePalette({
    bgColor: theme.colors.Blues[100],
    bgColorHover: theme.colors.Blues[60],
    bgColorActive: theme.colors.Blues[100],
    bgColorDisabled: theme.colors.Grays[60],
    textColor: theme.colors.Whites[100],
  }),
  tertiary: makePalette({
    bgColor: theme.colors.Whites[100],
    bgColorHover: theme.colors.Grays[8],
    bgColorActive: theme.colors.Grays[30],
    bgColorDisabled: theme.colors.Grays[30],
    textColor: theme.colors.Blues[100],
  }),
};

export const Container = styled.button`
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  line-height: normal;
  padding: 1rem 2rem;
  display: inline-block;
  text-decoration: none;
  white-space: nowrap;
  :disabled {
    cursor: default;
  }
  transition-duration: ${timeout}ms;

  ${p => PALETTES[p.palette]}
  ${space};
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-gap: 0.5rem 1rem;
  grid-auto-flow: column;

  ${MEDIA.PHONE`
    grid-auto-flow: row;
  `};
`;
