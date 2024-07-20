export async function GET(request) {
  const ip =
    request.headers.get('x-forwarded-for') ||
    request.headers.get('x-real-ip') ||
    request.connection.remoteAddress;

  return new Response(JSON.stringify({ ip }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
