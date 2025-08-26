'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

type MenuItem = {
  label: string
  url: string
}

export default function Header() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])

  useEffect(() => {
    fetch('https://cms.bidatlanticcars.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          {
            menu(id: "header", idType: NAME) {
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
    <header className="bg-gray-900 text-white p-4 shadow-md z-50">
      <nav className="flex justify-center space-x-6">
        {menuItems.map((item, idx) => {
          let pathname = ''
          try {
            pathname = new URL(item.url).pathname.replace(/\/$/, '')
          } catch (e) {
            pathname = item.url
          }

          return (
            <Link key={idx} href={pathname} className="hover:underline">
              {item.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}
