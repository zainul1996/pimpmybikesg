import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'edge'
export const alt = 'PimpMyBike SG - Premium Motorcycle Detailing Services'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  // Since we can't directly reference files in the public directory in OG Image components,
  // We'll use a more reliable approach with a solid colored background.
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(to bottom, #000000, #333333)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <div 
          style={{ 
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            padding: '40px 80px',
          }}
        >
          <div style={{ fontSize: '80px', fontWeight: 'bold', marginBottom: '20px' }}>
            PimpMyBike SG
          </div>
          <div style={{ fontSize: '40px', opacity: 0.9, maxWidth: '80%' }}>
            Premium Motorcycle Detailing Services
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}