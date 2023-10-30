import { useState, useEffect } from 'react'
import styles from './MainPage.module.scss'
import { Header } from '../../components/Header/Header'
import { Image } from '../../components/Image/Image'
import { useImages } from '../../features/images/useImages'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { PAINT_PAGE } from '../../variables/routes'
import { typeImages, typeImage } from '../../repositories/images/interfaces/imagesController'

export const MainPage = () => {
  const { images } = useImages()

  const [cards, setCard] = useState<typeImages | null>(null)
  const [typeCards, setTypeCard] = useState<'ALL' | 'FILTERED'>('ALL')

  useEffect(() => {
    setCard(images)
  }, [images])

  const filterPictures = (email?: string) => {
    const filteredCards = images?.filter((card: typeImage) => card.user === email)
    setTypeCard('FILTERED')

    if (filteredCards) setCard(filteredCards)
  }

  const setAllCards = () => {
    setTypeCard('ALL')
    setCard(images)
  }

  return (
    <main className={styles.mainPage}>
      <Header />
      <section>
        {cards?.map((card: typeImage, id: number) => {
          return (
            <div key={id} className={styles.mainPage__card}>
              <div className={styles.mainPage__infoLine}>
                <p>{card.user}</p>
                {typeCards === 'ALL' ? (
                  <Button
                    className={styles.mainPage__infoButton}
                    onClick={() => filterPictures(card.user)}
                  >
                    Show other pictures
                  </Button>
                ) : (
                  <Button className={styles.mainPage__infoButton} onClick={setAllCards}>
                    Show all pictures
                  </Button>
                )}
              </div>
              {card.image && <Image src={card.image} alt='' />}
            </div>
          )
        })}
        <Link to={PAINT_PAGE} className={styles.mainPage__paintLink}>
          <Button text='Paint' className={styles.mainPage__paintButton} />
        </Link>
      </section>
    </main>
  )
}
