// import styled, { css } from "styled-components";

// const StyledFilter = styled.div`
//   border: 1px solid var(--color-grey-100);
//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-sm);
//   border-radius: var(--border-radius-sm);
//   padding: 0.4rem;
//   display: flex;
//   gap: 0.4rem;
// `;

// const FilterButton = styled.button`
//   background-color: var(--color-grey-0);
//   border: none;

//   ${(props) =>
//     props.active &&
//     css`
//       background-color: var(--color-brand-600);
//       color: var(--color-brand-50);
//     `}

//   border-radius: var(--border-radius-sm);
//   font-weight: 500;
//   font-size: 1.4rem;
//   /* To give the same height as select */
//   padding: 0.44rem 0.8rem;
//   transition: all 0.3s;

//   &:hover:not(:disabled) {
//     background-color: var(--color-brand-600);
//     color: var(--color-brand-50);
//   }
// `;
import clsx from 'clsx';
import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter({field,options}) {
  
 const [searchParams,setSearchParams] = useSearchParams();
const active = searchParams.get(field) || 'All';

  function handleClick(filter){
  searchParams.set(field,filter);
  setSearchParams(searchParams);
  }

  return (
    <div>

      {options.map((option)=><button className={
        clsx('bg-green-400 text-stone-600 p-1 m-1',
          active ===option.value? 'bg-green-700' :''
             
      )} onClick={()=>handleClick(option.value)}>{option.label}</button>)}
    </div>
  )
}

export default Filter
