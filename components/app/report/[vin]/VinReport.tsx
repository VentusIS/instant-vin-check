'use client'
import { useEffect, useState } from 'react'

export default function VinReport({ vin }: { vin: string }) {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    fetch(`/api/vin?vin=${vin}`)
      .then(res => res.json())
      .then(setData)
  }, [vin])

  if (!data) return <p>Loading...</p>
  if (data.error) return <p className="text-red-600">Error: {data.error}</p>

  return (
    <div className="space-y-2">
      <p><strong>Make:</strong> {data.make}</p>
      <p><strong>Model:</strong> {data.model}</p>
      <p><strong>Year:</strong> {data.year}</p>
      <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto text-black">{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}