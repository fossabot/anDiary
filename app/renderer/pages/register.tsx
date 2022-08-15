import Header from '../components/Header';
import Link from 'next/link';

function Register() {
  return (
    <>
      <Header name='Register' />
      <div className='grid grid-col-1 text-2xl w-76 text-center'>
        <img className='ml-auto mr-auto w-72' src='/images/logo.png' />
        <span>⚡ Register ⚡</span>
      </div>
      <div className='mt-5 w-full flex-wrap flex justify-center'>
        <Link href='/home'>
          <a className='btn-blue mr-5'>Register</a>
        </Link>
        <Link href='/login'>
          <a className='btn-blue'>Login</a>
        </Link>
      </div>
    </>
  )
}

export default Register
