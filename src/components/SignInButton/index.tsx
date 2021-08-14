import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { signIn, useSession, signOut} from 'next-auth/client'

import styled from './styles.module.scss';

export function SignInButton() {
  const [session] = useSession();

  console.log(session)

  return session ? (
    <button className={styled.buttonContainer} type="button" >
      <FaGoogle color="#04d361" />
        {session.user.name}
      <FiX color="#737380" className={styled.closeIcon} onClick={() => {signOut()}}/>
    </button>
  ) : (
    <button 
      className={styled.buttonContainer} 
      type="button" 
      onClick={() => signIn('google')}
    >
      <FaGoogle fill="#e74133" />
      Entrar
    </button>
  )
}