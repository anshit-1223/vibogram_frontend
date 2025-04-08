import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  const loginImage = require('/assets/images/login.jpg');

  return (
    <>
      <div className='row container-build'>
        <div className='col-lg-2 col-md-2 col-sm-12 bg-success'></div>
        <div className='col-lg-8 col-md-8 col-sm-12'>
          <div className="row">
            <div className='col-lg-6 bg-info'> <img src={loginImage} alt="LoginImage" /></div>
            <div className='col-lg-6 bg-danger'><i>Vibogram</i></div>
          </div>
        </div>
        <div className='col-lg-2 col-md-2 col-sm-12 bg-primary'>
          Username : anshit-1223 || Password : 12345
        </div>
      </div>
    </>
  )
}

export default App
