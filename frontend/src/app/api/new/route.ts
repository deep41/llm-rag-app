export async function GET() {
  return Response.json({ message: "get message" });
}
export async function POST(req: Request) {
  const body = await req.json();
  return Response.json({ message: "post message", body });
}
