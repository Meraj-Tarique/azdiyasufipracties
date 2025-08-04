// app/api/post/route.js
export async function GET() {
  try {
    const res = await fetch("https://dummyjson.com/posts?limit=5&skip=0", {
      headers: { accept: "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
