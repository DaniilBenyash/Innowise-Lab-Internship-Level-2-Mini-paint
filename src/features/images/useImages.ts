import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { IImage } from '@/repositories/images/interfaces/imagesController'

export const useImages = () => {
  const dispatch = useAppDispatch()

  const images: IImage[] | null = useAppSelector((state) => state.images.images)

  const getImages = () => dispatch({ type: 'images/getImages' })

  const postImage = (image: IImage) => dispatch({ type: 'images/postImage', payload: image })

  const setImages = (images: IImage[]) => dispatch({ type: 'images/setImages', payload: images })

  return {
    images,
    getImages,
    postImage,
    setImages,
  }
}
