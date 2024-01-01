import { Inter } from '@next/font/google'
import { Card, CardInfo, Deck } from '@vitaovich/card-components'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const suits: any[] = ['♠', '♦', '☘', '♥'];
const ranks: any[] = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

const CreateDeck = () => {
  let deck: CardInfo[] = [];
  for (let suit of suits) {
    for (let rank of ranks) {
      deck.push(new CardInfo(suit, rank))
    }
  }

  return deck;
}
const DUMMY_DECK: CardInfo[] = CreateDeck()

const PYRAMID_GRAPH = [
  [3, 4],//0
  [5, 6],
  [7, 8],//2
  [9, 10],
  [10, 11],//4
  [12, 13],
  [13, 14],//6
  [15, 16],
  [16, 17],//8
  [18, 19],
  [19, 20],//10
  [20, 21],
  [21.22],//12
  [22, 23],
  [23, 24],//14
  [24, 25],
  [25, 26],//16
  [26, 27],
  [], [], [], [], [], [], [], [], [], []
]

export default function Home() {
  const [deck, setDeck] = useState<CardInfo[]>(DUMMY_DECK.slice(27))
  const [curCard, setCurCard] = useState<CardInfo>()

  const [slots, setSlots] = useState<CardInfo[]>(DUMMY_DECK.slice(0,28))
  const [graph, setGraph] = useState<number[][]>(PYRAMID_GRAPH)

  // const pyramid = <>
  //   <div className="flex justify-center">
  //     <Card />
  //   </div>
  //   <div className="flex justify-center -mt-16 space-x-6">
  //     <Card />
  //     <Card />
  //   </div>
  //   <div className="flex justify-center -mt-16 space-x-6">
  //     <Card />
  //     <Card />
  //     <Card />
  //   </div>
  // </>

  const levels = <>
    <div className="flex flex-row justify-center z-10">
      {slots.slice(0, 3)
        .map((elem, idx) =>
          <Card
            key={`${elem.rank}${elem.suit}`}
            cardValue={elem.rank} cardSuit={elem.suit}
            isHidden={false}
            isValid={true}
          />
        )}
    </div>
    <div className="flex flex-row justify-center -mt-16 z-20">
      {slots.slice(3, 9)
        .map((elem, idx) =>
          <Card
            key={`${elem.rank}${elem.suit}`}
            cardValue={elem.rank} cardSuit={elem.suit}
            isHidden={false}
            isValid={true}
          />
        )}
    </div>
    <div className="flex flex-row  justify-center -mt-16 z-30">
      {slots.slice(9, 18)
        .map((elem, idx) =>
          <Card
            key={`${elem.rank}${elem.suit}`}
            cardValue={elem.rank} cardSuit={elem.suit}
            isHidden={false}
            isValid={true}
          />
        )}
    </div>
    <div className="flex flex-row justify-center -mt-16 z-40">
      {slots.slice(18, 28)
        .map((elem, idx) =>
          <Card
            key={`${elem.rank}${elem.suit}`}
            cardValue={elem.rank} cardSuit={elem.suit}
            isHidden={false}
            isValid={true}
          />
        )}
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
      <div className="flex flex-col space-y-12 bg-green-100 p-6 font-mono">
        <div className="flex flex-col">
          {levels}
        </div>
        {/* <div className="flex flex-row space-x-6 justify-center">
          <div className="flex flex-col">
            {pyramid}
          </div>
          <div className="flex flex-col">
            {pyramid}
          </div>
          <div className="flex flex-col">
            {pyramid}
          </div>
        </div> */}
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
