import Image from 'next/image'
import QrCodeGen from './QrCodeGen'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <QrCodeGen/>
    </main>
  )
}
