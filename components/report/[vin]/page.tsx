import { Suspense } from 'react'
import VinReport from './VinReport'

export default function ReportPage({ params }: { params: { vin: string } }) {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">VIN Report for {params.vin}</h2>
      <Suspense fallback={<p>Loading report...</p>}>
        <VinReport vin={params.vin} />
      </Suspense>
    </main>
  )
}