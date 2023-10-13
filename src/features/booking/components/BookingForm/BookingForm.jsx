import styled from 'styled-components'
import { Form } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { names, FormStateToRedux } from '@shared/forms'
import { TitleText, BodyText, CaptionText } from '@ui/typography'
import { HBox, VBox } from '@ui/spacers'
import { ButtonPrimary } from '@ui/ButtonPrimary'
import { TextField } from '@ui/TextField'
import { parsePhone, parseCount } from '@shared/forms/helpers'
import { validate, submitValidate } from './validation'
import { getSmartEnding } from '@shared/lib/getSmartEnding'
import { greetingByDayTime } from '@shared/lib/greetingByDayTime'

const Container = styled.div`
  padding: 56px 56px 32px;
  width: 544px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.monochrome.white};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding-left: 16px;
    padding-right: 16px;
    border-radius: 0;
  }
`

const RowToCol = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`

export const BookingForm = ({ fetching, flatsCount, submitTrigger }) => {
  const dispatch = useDispatch()

  function onSubmit(values) {
    const errors = submitValidate(values)
    if (errors) {
      return errors
    }

    dispatch(submitTrigger(values))
  }

  return (
    <Container>
      <TitleText center>{greetingByDayTime}</TitleText>
      <HBox />
      <BodyText center>
        Для бронирования помещений{'\n'}заполните форму
      </BodyText>
      <HBox x={2} />

      <Form onSubmit={onSubmit} subscription={{}} validate={validate}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <FormStateToRedux form={names.booking} />
            <fieldset disabled={fetching}>
              <RowToCol>
                <TextField
                  id="first"
                  name="firstName"
                  label="Ваше имя"
                  // autocomplete="given-name"
                />
                <VBox x={2} />
                <HBox x={0.5} />
                <TextField
                  id="last"
                  name="lastName"
                  label="Фамилия"
                  // autocomplete="family-name"
                />
              </RowToCol>
              <HBox x={0.5} />
              <TextField
                id="phone"
                name="phone"
                label="Телефон"
                parse={parsePhone}
                // autocomplete="tel-national"
              />
              <HBox x={0.5} />
              <TextField
                id="mail"
                name="mail"
                label="E-mail"
                // autocomplete="email"
              />
              <HBox x={0.5} />
              <TextField
                id="flatsCount"
                name="flatsCount"
                label="Количество помещений"
                parse={parseCount}
                // format={formatCount}
              />
            </fieldset>

            <HBox x={0.5} />
            <ButtonPrimary type="submit" loading={fetching}>
              {flatsCount && +flatsCount > 0
                ? `Забронировать ${flatsCount} ${getSmartEnding(flatsCount, [
                    'помещение',
                    'помещения',
                    'помещений',
                  ])}`
                : 'Забронировать'}
            </ButtonPrimary>
          </form>
        )}
      </Form>

      <HBox x={1.5} />
      <CaptionText center>
        Это дисклеймер, который есть во всех формах
      </CaptionText>
    </Container>
  )
}
