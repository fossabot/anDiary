import Header from '../components/Header'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Header name='Home' />
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto w-72' src='/images/logo.png' />
        <span>⚡ anDiary ⚡</span>
        <span>💕 </span>
        <span>Logged in</span>
      </div>
      <div className='mt-5 w-full flex-wrap flex justify-center'>
        <Link href='/login'>
          <a className='btn-blue'>Log out</a>
        </Link>
      </div>
    </>
  )
}

export default Home
