import React from 'react'

const Jumbotron = ({header, desc}) => {
  return (
    <div className='jumbotron border-b'>
      <div className='container'>
        <h2 className='page-header text-xl text-dark'>{header}</h2>
        <p className='page-desc text-l'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default Jumbotron
