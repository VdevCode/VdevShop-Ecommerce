import React from 'react'



const FilterProduct = () => {

	const [filter,setFilter] = React.useState(0)

	const handleFilter = () =>{
		setFilter(filter + 1)
	}
	
  return (
	<div>
		<p>{filter}</p>
		<button onClick={() => (
			handleFilter
		)}>{}</button>
	</div>
  )
}

export default FilterProduct
