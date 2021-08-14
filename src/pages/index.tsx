import Head from "next/head";
import Image from "next/image";

import styled from './home.module.scss';
import Background from '../../public/images/background.png'
import { SubscribeButton } from "../components/SubscribeButton";
import { GetServerSideProps, GetStaticProps } from "next";
import { stripe } from "../services/stripe";
import { useSession } from "next-auth/client";

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
      <main className={styled.container}>
        <section className={styled.hero}>
          <span>👏 Hey, seja bem vindo </span>
          <h1>A casa do Mago</h1>
          <p>Em sintonia com o Universo</p>
          <p>Receba as nossas novidades <br />
            <span>por apenas {product.amount}</span>  por mês!
          </p>
          <SubscribeButton priceId={product.id} />
        </section>
        <Image src={Background} alt="Background" width="600"  />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JNoIDBh8PT5uuVchrjsrgqO', {
      expand: ['product']
    }
  )

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
