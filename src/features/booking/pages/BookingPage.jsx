import { useSelector } from 'react-redux'
import { Layout } from '@shared/layout'
import { BookingForm } from '../components/BookingForm'
import { BookingStatus } from '../components/BookingStatus'
import { submitTrigger } from '../actions'
import { getFlatsCount } from '../selectors'
import { apiSelectors } from '@shared/api'

export const BookingPage = () => {
  const fetching = useSelector(apiSelectors.bookingPost.getIsFetching)
  const success = useSelector(apiSelectors.bookingPost.getIsSucceeded)
  const failure = useSelector(apiSelectors.bookingPost.getIsFailed)
  const flatsCount = useSelector(getFlatsCount)

  return (
    <Layout>
      {success || failure ? (
        <BookingStatus success={success} failure={failure} />
      ) : (
        <BookingForm
          fetching={fetching}
          flatsCount={flatsCount}
          submitTrigger={submitTrigger}
        />
      )}
    </Layout>
  )
}
