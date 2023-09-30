let counter = 0;

setInterval(() => {
  counter++;
}, 1000);

export async function GET() {
  return new Response(JSON.stringify({ value: counter }), {
    headers: { "Content-Type": "application/json" },
  });
}
