import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { typeImage, typeImages } from '../../repositories/images/interfaces/imagesController'

export const useImages = () => {
  const dispatch = useAppDispatch()

  const images: typeImages | null = useAppSelector((state) => state.images.images)

  const getImages = () => dispatch({ type: 'images/getImages' })

  const postImage = (image: typeImage) => dispatch({ type: 'images/postImage', payload: image })

  return {
    images,
    getImages,
    postImage,
  }
}
