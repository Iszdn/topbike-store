import React, { useContext } from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { AuthContext } from '../../context/authContext'
const AccountPage = () => {
  const { removeToken } = useContext(AuthContext)
  const { decodedToken } = useContext(AuthContext)

  return (

    <>
    <Helmet>
        <title>Account</title>
      </Helmet>
      <div id='account'>
<p>{decodedToken.email}</p>
<p>(not <strong>{decodedToken.email}</strong>  <Link onClick={removeToken}>Sign out</Link> ).
</p>
<p>RECENT ORDERS</p>
<p>You haven't placed any orders yet.</p>
<p>BILLING ADDRESS
<Link> Edit</Link></p>
    </div>
    </>
  
  )
}

export default AccountPage