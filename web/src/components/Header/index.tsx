import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

import * as S from './styled';

export function Header() {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
    locale: ptBR,
  });

  return (
    <S.Container>
      <img src="/logo.svg" alt="Podcastr" />
      
      <p>O melhro para você ouvir, sempre</p>

      <span>{currentDate}</span>
    </S.Container>
  )
}