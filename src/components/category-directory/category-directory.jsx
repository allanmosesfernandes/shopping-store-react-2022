import React from 'react'
import CategoryItem from '../categoryItem/category-item.component'
const Directory = ({categories}) => {
  return (
    <div className='categories-container'>
      {categories.map((category) => <CategoryItem key={categories.index} category={category} />)}
    </div>
  )
}

export default Directory