export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const code = searchParams.get('code');
  const customerKey = searchParams.get('customerKey');

  await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/payment/auth?code=${code}&customerKey=${customerKey}`);

  return Response.json({});
}
