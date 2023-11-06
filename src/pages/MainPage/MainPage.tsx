import { useState } from 'react'
import styles from './MainPage.module.scss'
import { Header } from '@components/Header/Header'
import { Image } from '@components/Image/Image'
import { useImages } from '@/features/images/useImages'
import { Button } from '@components/Button/Button'
import { LinkComponent } from '@/components/LinkComponent/LinkComponent'
import { PAINT_PAGE } from '@/variables/routes'
import { IImage } from '@/repositories/images/interfaces/imagesController'

enum CardTypes {
  All,
  Filtered,
}

export const MainPage = () => {
  const { images, setImages } = useImages()

  const [cardType, setCardType] = useState<CardTypes>(CardTypes.All)

  const sortCards = (email?: string) => {
    if (!images || !email) return

    if (cardType === CardTypes.All) {
      const filteredCards = images.filter((card: IImage) => card.user === email)
      setCardType(CardTypes.Filtered)
      setImages(filteredCards)
    }
    if (cardType === CardTypes.Filtered) {
      setCardType(CardTypes.All)
      setImages(images)
    }
  }
  const textButton = cardType === CardTypes.All ? 'Show other pictures' : 'Show all cards'
  return (
    <main className={styles.mainPage}>
      <Header />
      <section>
        {images?.map((card: IImage, id: number) => {
          return (
            <div key={id} className={styles.card}>
              <div className={styles.infoLine}>
                <p>{card.user}</p>
                <Button type='tertiary' onClick={() => sortCards(card.user)} text={textButton} />
              </div>
              {card.image && <Image src={card.image} alt='' />}
            </div>
          )
        })}
        <LinkComponent to={PAINT_PAGE}>
          <Button text='Paint' type='secondary' />
        </LinkComponent>
      </section>
    </main>
  )
}
