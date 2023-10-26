import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { typePaints, typePaint } from '../../dataBaseServices/canvasService'

export const usePaintsData = () => {
  const dispatch = useAppDispatch()

  const pictures: typePaints | null = useAppSelector((state) => state.paints.paints)

  const getPictures = () => dispatch({ type: 'paints/getPaints' })

  const postPicture = (paint: typePaint) => dispatch({ type: 'paints/postPaint', payload: paint })

  return {
    pictures,
    getPictures,
    postPicture,
  }
}
