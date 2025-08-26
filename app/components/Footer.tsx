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
      <div className="flex justify-center space-x-4 flex-wrap">
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
      </div>
      <div className="mt-4 text-sm text-gray-400">&copy; 2025 Bid Atlantic Cars</div>
    </footer>
  )
}
