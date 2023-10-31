import { useState, useEffect } from 'react'
import styles from './MainPage.module.scss'
import { Header } from '@components/Header/Header'
import { Image } from '@components/Image/Image'
import { useImages } from '@/features/images/useImages'
import { Button } from '@components/Button/Button'
import { LinkComponent } from '@/components/LinkComponent/LinkComponent'
import { PAINT_PAGE } from '@/variables/routes'
import { typeImages, typeImage } from '@/repositories/images/interfaces/imagesController'

enum TypesCards {
  All,
  Filtered,
}

export const MainPage = () => {
  const { images } = useImages()

  const [cards, setCards] = useState<typeImages | null>(null)
  const [typeCards, setTypeCard] = useState<TypesCards>(TypesCards.All)

  useEffect(() => {
    setCards(images)
  }, [images])

  const sortCards = (email: string | undefined) => {
    switch (typeCards) {
      case TypesCards.All: {
        if (!email) return

        const filteredCards = images?.filter((card: typeImage) => card.user === email)

        setTypeCard(TypesCards.Filtered)
        if (filteredCards) setCards(filteredCards)

        break
      }
      case TypesCards.Filtered: {
        setTypeCard(TypesCards.All)
        setCards(images)

        break
      }
      default: {
        setTypeCard(TypesCards.All)
        setCards(images)

        break
      }
    }
  }

  return (
    <main className={styles.mainPage}>
      <Header />
      <section>
        {cards?.map((card: typeImage, id: number) => {
          return (
            <div key={id} className={styles.card}>
              <div className={styles.infoLine}>
                <p>{card.user}</p>
                <Button type='mainInfo' onClick={() => sortCards(card.user)}>
                  {typeCards === TypesCards.All ? 'Show other pictures' : 'Show all cards'}
                </Button>
              </div>
              {card.image && <Image src={card.image} alt='' />}
            </div>
          )
        })}
        <LinkComponent to={PAINT_PAGE}>
          <Button text='Paint' type='mainPaint' />
        </LinkComponent>
      </section>
    </main>
  )
}
