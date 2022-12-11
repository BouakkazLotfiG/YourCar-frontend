import React from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { slide as Menu } from 'react-burger-menu';
import { useMediaQuery } from 'react-responsive';
import { SCREENS } from '../Responsive';
import MenuStyle from './menuStyle';

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;
const NavItem = styled.li<{ menu?: any }>`
  ${tw`
         text-xs
         md:text-base
         text-black
         font-medium
         mr-1
         md:mr-5
         cursor-pointer
         transition
         duration-300
         ease-in-out
         hover:text-gray-700
    `};
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `}
    `}
`;

export function NavItems() {
  const isMobile = useMediaQuery({
    maxWidth: SCREENS.sm,
  });

  if (isMobile)
    return (
      <Menu right styles={MenuStyle}>
        <ListContainer>
          {['Home', 'Cars', 'Services', 'Contact us'].map((item, index) => (
            <NavItem key={index} menu>
              <a href='/'>{item}</a>
            </NavItem>
          ))}
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      {['Home', 'Cars', 'Services', 'Contact us'].map((item, index) => (
        <NavItem key={index}>
          <a href='/'>{item}</a>
        </NavItem>
      ))}
    </ListContainer>
  );
}
