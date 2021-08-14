import Image from "next/image";

import Logo from '../../../public/images/logo.svg';
import { SignInButton } from '../SignInButton';
import styled from './styles.module.scss';

export function Header() {
  return (
    <header className={styled.headerContainer}>
      <div className={styled.headerContent}>
        <Image src={Logo} alt="Logo" width="100" />
        <nav>
          <a className={styled.active} href="#">Home</a>
          <a href="#">Posts</a>
          <a target="_blank" href="http://www.cipoecastanha.com.br" rel="noreferrer">Loja</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}