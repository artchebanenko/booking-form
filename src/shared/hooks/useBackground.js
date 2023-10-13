import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { dayTime } from '@shared/lib/dayTime'
import { apiActions, apiSelectors } from '@shared/api'
import { useIsMobile } from './useIsMobile'

const defaultUrl =
  dayTime === 'evening' || dayTime === 'night'
    ? 'https://0.pik.ru.cdn.pik-service.ru/undefined/2020/07/21/dsc06845_481909dfb262bfdcb554e38bd110c38f_eZGKKhSFQDqht6yz.jpg'
    : 'https://0.pik.ru.cdn.pik-service.ru/undefined/2021/08/03/dji_0093.rev00_wj16guVhKoupGK8K.jpg'

export function useBackground(force = false) {
  const dispatch = useDispatch()

  const offerSpecial = useSelector(
    apiSelectors.offerSpecialGet.getRandomOfferSpecial,
  )
  const failure = useSelector(apiSelectors.offerSpecialGet.getIsFailed)

  const isMobile = useIsMobile()
  const [bgUrl, setBgUrl] = useState()

  useEffect(() => {
    if (force || !offerSpecial) {
      dispatch(apiActions.offerSpecialGet.trigger())
    }

    let src
    if (offerSpecial && offerSpecial.desktop && !isMobile) {
      src = offerSpecial.desktop
    } else if (offerSpecial && offerSpecial.mobile && isMobile) {
      src = offerSpecial.mobile
    } else if (failure) {
      src = defaultUrl
    }

    if (src) {
      const image = new Image()
      image.src = src
      image.onload = () => {
        setBgUrl(src)
      }
    }
  }, [dispatch, force, offerSpecial, failure, isMobile])

  return bgUrl
}
