import Head from "next/head";
import Image from "next/image";

import styled from './home.module.scss';
import Background from '../../public/images/background6.jpg'
export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | A Casa do Mago</title>
      </Head>
      {/* <div className={styled.background}>
        <Image src={Background} alt="Background"  />

      </div> */}
        <main className={styled.container}>
          <section className={styled.hero}>
            <span>👏 Hey, bem vindo </span>
            <h1>A Casa do Mago</h1>
            <p>Em sintonia com o Universo</p>
          </section>
          {/* <img src="https://www.recreio.com.br/images/large/2020/12/11/galaxia-1225945.jpg" alt="Background" /> */}
        </main>
    </>
  )
}
