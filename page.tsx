'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {
  const [vin, setVin] = useState('')
  const router = useRouter()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (vin.length === 17) router.push(`/report/${vin}`)
  }

  return (
    <main className="min-h-screen bg-[#12372A] flex flex-col justify-center items-center px-4 text-white">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Get a vehicle history report</h1>
        <p className="mb-6 text-lg">Access accident, damage, and service information in real-time</p>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={vin}
            onChange={e => setVin(e.target.value)}
            placeholder="Enter VIN"
            className="w-full p-3 rounded text-black"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded">Search</button>
        </form>
      </div>
    </main>
  )
}