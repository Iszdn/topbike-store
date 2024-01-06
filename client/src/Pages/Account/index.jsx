import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
const AccountPage = () => {
  return (
    <div id='account'>
<p>Tu7k21xbe@Code.Edu.Az</p>
<p>(not <strong>tu7k21xbe@code.edu.az?</strong>  <Link>Sign out</Link> ).
</p>
<p>RECENT ORDERS</p>
<p>You haven't placed any orders yet.</p>
<p>BILLING ADDRESS
<Link> Edit</Link></p>
    </div>
  )
}

export default AccountPage