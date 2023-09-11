let counter = 0;

// Increment the counter every second
setInterval(() => {
  counter++;
}, 1000);

export async function GET() {
  return new Response(JSON.stringify({ value: counter }), {
    headers: { "Content-Type": "application/json" },
  });
}
