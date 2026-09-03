import React from 'react'
import Select from './Select'
import { useSearchParams } from 'react-router-dom'

export default function SortBy({options}) {
  const [searchParams,setSearchParams] = useSearchParams();
    const byDefaultSort = searchParams.get('sortBy') || '';
  function handleChange(e){
    const sortBy = e.target.value;
       searchParams.set('sortBy',sortBy);
       setSearchParams(searchParams);
    }

    return (
    <div>
      <Select options={options} value={byDefaultSort} onChange={handleChange} />
    </div>
  )
}
