import React from 'react'
export default function FilmsPresentation({films}) {
     console.log(films);
    return (
     <div className='container'>
        {films.map((film)=>(
        <div className='column'>
        <div className='card'>
        <img src={film.img}/>
          <h3>{film.name}</h3>
          <p className='title'>{film.date}</p>
          <p><button>Detail</button></p>
        </div>
      </div>
     ))}</div>   
  )
}