import reactHeadroom from 'react-headroom';
import styled from 'styled-components';

export const Headroom = styled(reactHeadroom)`
  width: 100%;
  background: ${p => {
    // Note this is slightly different than colors.Gradients.Orange. The angle
    // is different to make this gradient blend into the theme gradient better.
    const { Oranges } = p.theme.colors;
    return `linear-gradient(45deg, ${Oranges[100]} 1%, ${Oranges[60]} 46%, ${Oranges[30]} 95%);`;
  }};

  svg {
    width: 75px;
    height: 75px;
    transition: all 0.3s ease;
  }
  .headroom--pinned {
    background: ${p => p.theme.colors.Gradients.Orange};
    svg {
      width: 32px;
      height: 32px;
    }
  }

  .headroom--inner {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
    padding: 1rem 4rem;
    transition: background-color 1s;

    @media screen and (max-width: ${p => p.theme.breakpoints.md}) {
      align-items: center;
      padding-right: 2rem;
    }

    a {
      color: ${p => p.theme.colors.Whites[100]};
      transition: color 0.2s ease;
      text-decoration: none;

      &:hover {
        color: inherit;
      }
    }
  }
`;
