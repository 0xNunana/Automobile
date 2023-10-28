import { NextResponse } from 'next/server';

export async function GET(request: Request) { 
  const res = await fetch(`https://api.staging.myautochek.com/v1/inventory/make?popular=true`)
    const product = await res.json()
    return NextResponse.json({ product })
  }