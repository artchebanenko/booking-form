import { createSelector } from 'reselect'

const getIsFetching = (state) => state.api.offerSpecialGet.status === 'loading'

const getIsSucceeded = (state) => state.api.offerSpecialGet.status === 'success'

const getIsFailed = (state) => state.api.offerSpecialGet.status === 'failure'

const getData = (state) => state.api.offerSpecialGet.data

const getRandomOfferSpecial = createSelector(getData, (data) => {
  if (!data) {
    return
  }
  const randomIndex = Math.floor(Math.random() * data.length)
  return data[randomIndex]
})

export const selectors = {
  getIsFetching,
  getIsSucceeded,
  getIsFailed,
  getRandomOfferSpecial,
}
