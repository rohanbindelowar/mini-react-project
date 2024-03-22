import React from 'react'
import UseWindowResize from './UseWindowResize'

export const UseWindowResizeTest = () => {
    const {width, height} = UseWindowResize();
  return (
    <div className='container'>
        <h1>Use Window Resize Hook</h1>
        <p>
            Width is {width}
        </p>
        <p>
            Height is {height}
        </p>
    </div>
  )
}
