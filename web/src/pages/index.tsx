export default function Home(props) {
  console.log(props);

  return (
    <div>
      <h1>Index</h1>  
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

// =================================================================================================
// SPA
// Chamadas em tempo real apos exibir conteudo inicial para usuário
// SEO ruim, pois motores de busca não aguardam resposta do backend para saber o conteudo
// import { useEffect } from "react";
// export default function Home(props) {
//   async function getData() {
//     const response = await fetch('http://localhost:3333/episodes');
//     const data = await response.json();
//     console.log(data);
//   }
//   useEffect(() => {
//     getData();
//   }, [])
  
//   return (
//     <div>
//       <h1>Index</h1>  
//       <p>{JSON.stringify(props.episodes)}</p>
//     </div>
//   )
// }

// =================================================================================================
// SSR
// Executado na camada node Next
// Console.log no terminal
// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes');
//   const data = await response.json();

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

// =================================================================================================
// SSG
// Executa a chamada, e gera uma pagina estatica
// Apenas funciona com build
// yarn build
// yarn start
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json();

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,
  }
}
