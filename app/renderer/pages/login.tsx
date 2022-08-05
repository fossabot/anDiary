import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Login() {
  return (
    <React.Fragment>
      <Head>
        <title>Login - anDiary</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
        <span>⚡ Login ⚡</span>
      </div>
      <div className='mt-5 w-full flex-wrap flex justify-center'>
        <Link href='/home'>
          <a className='btn-blue mr-5'>Login</a>
        </Link>
        <Link href='/register'>
          <a className='btn-blue'>Register</a>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Login
