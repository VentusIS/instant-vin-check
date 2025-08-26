import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url!)
  const vin = searchParams.get("vin")
  const apiKey = process.env.VIN_API_KEY

  if (!vin || vin.length !== 17) {
    return NextResponse.json({ error: 'Invalid VIN' }, { status: 400 })
  }

  const url = `https://api.vinaudit.com/query.php?vin=${vin}&key=${apiKey}&reportType=all&format=json`

  try {
    const res = await fetch(url)
    const data = await res.json()
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json({ error: 'API call failed' }, { status: 500 })
  }
}