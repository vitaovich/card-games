import { Inter } from '@next/font/google'
import { Card, CardInfo, Deck } from '@vitaovich/card-components'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const DUMMY_DECK: CardInfo[] = [{ suit: '♠', rank: '10' }, { suit: '♥', rank: '10' }]

export default function Home() {
  const [deck, setDeck] = useState<CardInfo[]>(DUMMY_DECK)
  const [curCard, setCurCard] = useState<CardInfo>()


  const pyramid = <>
    <div className="flex justify-center">
      <Card />
    </div>
    <div className="flex justify-center -mt-16 space-x-6">
      <Card />
      <Card />
    </div>
    <div className="flex justify-center -mt-16 space-x-6">
      <Card />
      <Card />
      <Card />
    </div>
  </>

  const HandleOnDeckClick = () => {
    console.log('Deck clicked.')
    let newDeck = [...deck];
    const removedCard = newDeck.pop()
    setDeck(newDeck)
    setCurCard(removedCard)
  }

  const HandleOnCardClick = (card?: CardInfo) => {
    console.log('Card clicked.', card)
  }


  return (
    <>
      <div className="flex flex-col space-y-12 bg-green-100 p-6">
        <div className="flex flex-row space-x-6 justify-center">
          <div className="flex flex-col">
            {pyramid}
          </div>
          <div className="flex flex-col">
            {pyramid}
          </div>
          <div className="flex flex-col">
            {pyramid}
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-row bg-green-300 p-8 space-x-16">
            <Deck cards={deck} onClick={HandleOnDeckClick} isStacked={true} />
            <Card
              onClick={() => HandleOnCardClick(curCard)}
              isValid={curCard !== undefined}
              isHidden={curCard === undefined}
              cardValue={curCard?.rank ?? ''}
              cardSuit={curCard?.suit ?? ''} />
          </div>
        </div>
      </div>
    </>
  )
}
