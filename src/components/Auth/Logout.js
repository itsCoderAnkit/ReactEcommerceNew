import React, { useContext } from 'react'
import { Route,Redirect } from 'react-router-dom'
import AuthContext from '../Store/AuthContext'

function Logout() {

  const authCtx = useContext(AuthContext)

  localStorage.removeItem('email')
      localStorage.removeItem('token')
      authCtx.isLoggedIn=false
      authCtx.token=""

      console.log("logout",authCtx)
  return (
    <div>
      
      <Route><Redirect to="/home" /></Route>
    </div>
  )
}

export default Logout
