import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={'https://studioartec.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fartelogo.6d6dbbb3.png&w=750&q=75'} />
        <meta property="og:url" content="https://studioartec.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Studio Artec" />
        <meta property="og:description" content="Studio Artec é uma empresa especializada em ar-condicionado automotivo, oferecendo serviços completos para manutenção, reparo e instalação de sistemas de climatização em veículos. Nossa equipe altamente qualificada trabalha com tecnologia de ponta para garantir o máximo de eficiência e conforto no seu carro. No Studio Artec, priorizamos a qualidade e a satisfação do cliente, atendendo às mais variadas necessidades do mercado automotivo. Seja para recarga de gás, limpeza de filtros, ou diagnósticos avançados, você pode contar com a nossa expertise para manter o ar do seu veículo sempre fresco e saudável." />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
