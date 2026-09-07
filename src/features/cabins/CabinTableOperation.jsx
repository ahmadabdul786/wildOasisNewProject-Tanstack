import React from 'react'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'

const options = [
        {label:'All',value:'All'},
        {label:'With-discount',value:'With-discount'},
        {label:'No-discount',value:'No-discount'}
      ]
const sortOptions = [
  {label:'Sort by name (A-Z)',value:"name-asc"},
  {label:'Sort by name (Z-A)',value:"name-desc"},
  {label:'Sort by price (low first)',value:"regularPrice-asc"},
  {label:'Sort by price (high first)',value:"regularPrice-desc"},
  {label:'Sort by capacity (low first)',value:"maxCapacity-asc"},
  {label:'Sort by capacity (high first)',value:"maxCapacity-desc"}
]
function CabinTableOperation() {
  return (
    <div className='flex items-center gap-1.5 mr-3'>
     {/* sorting  */}
      <SortBy options={sortOptions}/>
      {/* filters  */}
      <h1>filters</h1>
      <Filter field={'discount'} options={options}/>
    </div>
  )
}

export default CabinTableOperation
