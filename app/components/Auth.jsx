'use server';
import React from 'react'
import Link from 'next/link';
import {
  getSignInUrl,
  getSignUpUrl,
  getUser,
  signOut,
} from '@workos-inc/authkit-nextjs';
const Auth = () => {
  return (
    <div>Auth</div>
  )
}

export default Auth