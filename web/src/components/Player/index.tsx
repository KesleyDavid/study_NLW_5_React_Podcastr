import * as S from './styled';

export function Player() {

  return (
    <S.Container>
      <header>
        <img src="/playing.svg" alt="Tocando agora" />
        <strong>Tocando agora</strong>
      </header>

      <S.EmptyPlayer>
        <strong>Selecione um podcast para ouvir</strong>
      </S.EmptyPlayer>

      <footer className="empty">
        <S.Progress>
          <span>00:00</span>
          <S.Slider>
            <S.EmptySlider />
          </S.Slider>
          <span>00:00</span>
        </S.Progress>

        <S.Buttons>
          <S.Button type="button">
            <img src="/shuffle.svg" alt="Embaralhar" />
          </S.Button>
          <S.Button type="button">
            <img src="/play-previous.svg" alt="Tocar anterior" />
          </S.Button>
          <S.ButtonPlay type="button">
            <img src="/play.svg" alt="Tocar" />
          </S.ButtonPlay>
          <S.Button type="button">
            <img src="/play-next.svg" alt="Tocar próxima" />
          </S.Button>
          <S.Button type="button">
            <img src="/repeat.svg" alt="Repetir" />
          </S.Button>
        </S.Buttons>
      </footer>
    </S.Container>
  )
}