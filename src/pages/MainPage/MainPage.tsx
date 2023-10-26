import { useState, useEffect } from 'react'
import styles from './MainPage.module.scss'
import { Header } from '../../components/Header/Header'
import { Image } from '../../components/Image/Image'
import { usePaintsData } from '../../features/paintsData/usePaintsData'
import { Button } from '../../components/Button/Button'
import { Link } from 'react-router-dom'
import { PAINT_PAGE } from '../../variables/routes'
import { typePaints, typePaint } from '../../dataBaseServices/canvasService'

export const MainPage = () => {
  const { pictures } = usePaintsData()

  const [cards, setCard] = useState<typePaints | null>(null)
  const [typeCards, setTypeCard] = useState<'ALL' | 'FILTERED'>('ALL')

  useEffect(() => {
    setCard(pictures)
  }, [pictures])

  const filterPictures = (email?: string) => {
    const filteredCards = pictures?.filter((card: typePaint) => card.user === email)
    setTypeCard('FILTERED')

    if (filteredCards) setCard(filteredCards)
  }

  const setAllCards = () => {
    setTypeCard('ALL')
    setCard(pictures)
  }

  return (
    <main className={styles.mainPage}>
      <Header />
      <section>
        {cards?.map((card: typePaint, id: number) => {
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
              {card.picture && <Image src={card.picture} alt='' />}
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
