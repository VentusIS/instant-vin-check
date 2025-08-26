'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

type MenuItem = {
  label: string
  url: string
}

export default function Footer() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    fetch('https://cms.bidatlanticcars.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          {
            menu(id: "footer", idType: NAME) {
              menuItems {
                nodes {
                  label
                  url
                }
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMenuItems(data?.data?.menu?.menuItems?.nodes || [])
      })
  }, [])

  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 823a05d (Fix footer to use internal paths only)
      <div className="flex justify-center space-x-4 flex-wrap">
        {menuItems.map((item, idx) => {
          // Extract pathname only (e.g. "/about-us") to avoid redirecting to WordPress
          let pathname = ''
          try {
            pathname = new URL(item.url).pathname.replace(/\/$/, '')
          } catch (e) {
            pathname = item.url // fallback
          }

          return (
            <Link key={idx} href={pathname} className="hover:underline">
<<<<<<< HEAD
=======
      <div className="flex justify-center space-x-4">
<<<<<<< HEAD
        {menuItems.map((item, idx) => {
          const path = new URL(item.url).pathname.replace(/\/$/, '') // strip trailing slash
          return (
            <Link key={idx} href={path} className="hover:underline">
>>>>>>> 843f249 (Fix footer links to use relative URLs)
=======
>>>>>>> 823a05d (Fix footer to use internal paths only)
              {item.label}
            </Link>
          )
        })}
<<<<<<< HEAD
=======
        {menuItems.map((item, idx) => (
          <Link key={idx} href={item.url} className="hover:underline">
            {item.label}
          </Link>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Bid Atlantic Cars
>>>>>>> 53abcf6 (Fix footer links to strip domain from WordPress URLs)
=======
>>>>>>> 823a05d (Fix footer to use internal paths only)
      </div>
      <div className="mt-4 text-sm text-gray-400">&copy; 2025 Bid Atlantic Cars</div>
    </footer>
  )
}

