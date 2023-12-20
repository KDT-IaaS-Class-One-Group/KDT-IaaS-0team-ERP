import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="/cart" id="cart">cart</Link>
      <Link href="/login" id="login">login</Link>
      <Link href="/orderlist">orderlist</Link>
      <Link href="/signup">signup</Link>
    </div>
  )
}
