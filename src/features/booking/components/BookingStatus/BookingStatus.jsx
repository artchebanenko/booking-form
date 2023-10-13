import styled from 'styled-components'
import { TitleText } from '@ui/typography'
import { HBox } from '@ui/spacers'
import { IconFailure, IconSuccess } from '@ui/icons'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 68px;
  width: 544px;
  height: 672px;
  background-color: ${({ theme }) => theme.colors.monochrome.white};
  border-radius: 8px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
    padding: 0;
    height: auto;
  }
`

export const BookingStatus = ({ success, failure }) => {
  return (
    <Container>
      {success && (
        <>
          <IconSuccess />
          <HBox x={2} />
          <TitleText center>Ваша заявка{'\n'}отправлена</TitleText>
        </>
      )}
      {failure && (
        <>
          <IconFailure />
          <HBox x={2} />
          <TitleText center>
            Ошибка.{'\n'}Попробуйте{'\n'}позже
          </TitleText>
        </>
      )}
    </Container>
  )
}
