'use client'

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {singIn, singOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {
  return (
    <nav className="flex-between w-fll mb-16 pt-3">
        <Link href="/" className='flex gap-2 flex-center'>
            <Image className='object-contain'
            src="/assets/images/logo.svg"
            alt="promptopia logo"
            width={30}
            height={30}
            
            />

            <p className="logo_text">Promptopia</p>
        </Link>
      
    </nav>
  )
}

export default Nav
