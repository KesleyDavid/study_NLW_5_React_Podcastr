import { Header } from '../components/Header';
import { Player } from '../components/Player';

import GlobalStyle from '../styles/global';
import * as S from '../styles/app';

function MyApp({ Component, pageProps }) {
  return (
    <S.Wrapper>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Player />
      <GlobalStyle />
    </S.Wrapper>
  )
}

export default MyApp
