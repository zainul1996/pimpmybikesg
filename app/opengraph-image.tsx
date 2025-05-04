import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'PimpMyBike SG - Premium Motorcycle Detailing Services'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom, #000000, #333333)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '40px 80px',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '80px', fontWeight: 'bold', marginBottom: '20px' }}>
          PimpMyBike SG
        </div>
        <div style={{ fontSize: '40px', opacity: 0.8, maxWidth: '80%' }}>
          Premium Motorcycle Detailing Services
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // Note: If you need to use fonts, use Next.js's built-in font loading mechanism
      // or include the font file in your project and use FileSystem APIs
      ...size,
    }
  )
} 