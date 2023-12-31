import { Inter } from '@next/font/google'
import { Card } from '@vitaovich/card-components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const pyramid = <>
    <div className="flex justify-center">
      <Card />
    </div>
    <div className="flex justify-center -mt-16 space-x-12">
      <Card />
      <Card />
    </div>
    <div className="flex justify-center -mt-16 space-x-12">
      <Card />
      <Card />
      <Card />
    </div>
  </>

  return (
    <>
      <div className="flex">

          <div className="flex flex-row space-x-12">
            <div className="flex flex-col items center">
              {pyramid}
            </div>
            <div className="flex flex-col items center">
              {pyramid}
            </div>
            <div className="flex flex-col items center">
              {pyramid}
            </div>
          </div>
        </div>
    </>
  )
}
