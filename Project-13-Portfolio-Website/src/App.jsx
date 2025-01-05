import React from 'react'
import MyBook from './components/MyBook'
import texture from './assets/texture.png'

const bgTextureStyle = {
  backgroundImage: `url(${texture})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%"
  
}

const App = () => {
  return (
    <div style={bgTextureStyle} className='w-screen h-screen flex justify-center items-center'>
      <MyBook />
    </div>
  )
}

export default App