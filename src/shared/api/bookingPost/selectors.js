const getIsFetching = (state) => state.api.bookingPost.status === 'loading'

const getIsSucceeded = (state) => state.api.bookingPost.status === 'success'

const getIsFailed = (state) => state.api.bookingPost.status === 'failure'

export const selectors = {
  getIsFetching,
  getIsSucceeded,
  getIsFailed,
}
