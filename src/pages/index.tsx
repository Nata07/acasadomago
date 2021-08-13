import Head from "next/head";
import Image from "next/image";

import styled from './home.module.scss';
import Background from '../../public/images/background6.jpg'
import { SubscribeButton } from "../components/SubscribeButton";
import { GetServerSideProps, GetStaticProps } from "next";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    id: string;
    amount: number; 
  }
}
export default function Home({product}: HomeProps) {
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
            <p>Receba as nossas novidades <br />
              <span>por apenas {product.amount}</span>  por mês!
            </p>
            <SubscribeButton priceId={product.id} />
          </section>
          {/* <img src="https://www.recreio.com.br/images/large/2020/12/11/galaxia-1225945.jpg" alt="Background" /> */}
        </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JNoIDBh8PT5uuVchrjsrgqO', {
      expand: ['product']
    }
  )

  // const priceFormatted = new Intl.NumberFormat('pt/br', {
  //   style: 'currency',
  //   currency: 'BRL'
  // }).format(price.unit_amount / 100)

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100),
  }


  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
} 
