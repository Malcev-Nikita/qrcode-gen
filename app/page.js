import Image from 'next/image'
import QrCodeGen from './QrCodeGen'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between container m-auto pt-24">
      <QrCodeGen/>
    </main>
  )
}
