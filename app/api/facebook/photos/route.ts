
export async function GET() {
  try {
    const PAGE_ID = process.env.FB_PAGE_ID;
    const TOKEN = process.env.FB_ACCESS_TOKEN;
    if (!PAGE_ID || !TOKEN) return new Response(JSON.stringify([]), { status: 200 });
    const fields = 'photos{images,source,name,created_time}';
    const url = `https://graph.facebook.com/v19.0/${PAGE_ID}?fields=${encodeURIComponent(fields)}&access_token=${TOKEN}`;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return new Response(JSON.stringify([]), { status: 200 });
    const data = await res.json();
    const photos = (data.photos?.data || []).map((p:any)=> ({
      id: p.id,
      source: p.images?.[0]?.source || p.source,
      name: p.name,
      created_time: p.created_time
    }));
    return new Response(JSON.stringify(photos), { status: 200 });
  } catch {
    return new Response(JSON.stringify([]), { status: 200 });
  }
}
