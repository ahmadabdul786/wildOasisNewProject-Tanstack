import styled from "styled-components";

import { HiOutlineCalendarDays,HiMiniUsers,HiHomeModern,HiHome,HiMiniCog8Tooth } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

import React from 'react'
import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
   <nav className="bg-stone-50 w-[85%]">
   <ul className="p-3 flex flex-col gap-2">
    <li className="p-3 hover:bg-stone-300 font-bold">
      <NavLink className='flex items-center gap-1' to = 'dashboard'>
       <HiHome />

       Home 
      </NavLink>
    </li>
    <li className="p-3  font-bold hover:bg-stone-300 ">
      <NavLink className='flex items-center gap-1' to = 'bookings'>
       <HiOutlineCalendarDays />

       bookings
      </NavLink>
    </li>
    <li className="p-3 hover:bg-stone-300 font-bold">
      <NavLink className='flex items-center gap-1' to = 'cabins'>
       <HiHomeModern />

      cabins
      </NavLink>
    </li>
    <li className="p-3 hover:bg-stone-300 font-bold">
      <NavLink className='flex items-center gap-1' to = 'users'>
        <HiMiniUsers />

      Users
      </NavLink>
    </li>
    <li className="p-3 hover:bg-stone-300 font-bold">
      <NavLink className='flex items-center gap-1' to = 'settings'>
        <HiMiniCog8Tooth />

      Settings
      </NavLink>
    </li>
   </ul>
      </nav>
  )
}
