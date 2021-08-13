import { useState } from 'react';
import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styled from './styles.module.scss';

export function SignInButton() {
  const [isUserLogged, setIsUserLogged] = useState(true);

  function handleSignIn(){
    setIsUserLogged(true)
  }

  return isUserLogged ? (
    <button className={styled.buttonContainer} type="button" onClick={() => setIsUserLogged(!isUserLogged)}>
      <FaGoogle color="#04d361" />
        Natanael
      <FiX color="#737380" className={styled.closeIcon}/>
    </button>
  ) : (
    <button className={styled.buttonContainer} type="button">
      <FaGoogle />
        Sign in with Google
    </button>
  )
}