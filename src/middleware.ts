import { NextResponse } from 'next/server';

const allowOrigins =
  process.env.NODE_ENV === 'production'
    ? ['https://www.yoursite-name.com', 'https://www.whatever-name.com']
    : ['http://localhost:3000'];

export function cors(request: Request) {
  const origin = request.headers.get('origin');
}

export function middleware(request: Request) {
  const origin = request.headers.get('origin');

  if (origin && !allowOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: 'Bad Request',
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
  const regex = new RegExp('/api/*');

  if (regex.test(request.url)) {
    return NextResponse.next();
  }

  console.log('middleware');

  console.log(request.method);
  console.log(request.url);

  console.log(origin);

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
