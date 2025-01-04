import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');

    if (!title) {
      return new Response('Missing title parameter', { status: 400 });
    }

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#fff',
            padding: '40px',
          }}
        >
          <div
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: '#000',
              textAlign: 'center',
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: '20px',
              fontSize: '30px',
              color: '#666',
            }}
          >
            galfrevn.com
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    return new Response(`Failed to generate image`, { status: 500 });
  }
} 