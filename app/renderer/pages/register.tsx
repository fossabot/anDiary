import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Register() {
  return (
    <React.Fragment>
      <Head>
        <title>Register - anDiary</title>
      </Head>
      <div className='grid grid-col-1 text-2xl w-full text-center'>
        <img className='ml-auto mr-auto' src='/images/logo.png' />
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
    </React.Fragment>
  );
}

export default Register