import React from 'react'

const CategoryItem = ({category}) => {
  return (
    <div className='category-container' key={category.id}>
      <div className='background-image' style={{backgroundImage: `url(${category.imageUrl})`}} />
        <div className='category-body-container'>
          <h1>{category.title}</h1>
          <p>Shop now</p>
        </div>
      </div> 
  )
}

export default CategoryItem