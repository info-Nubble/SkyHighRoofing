
# Sky High Roofing — Seacoast v4

**What’s included**
- Port 3030 for dev & start
- Hash links work from any page
- "Maine Seacoast" tagline
- Facebook links in header + footer
- Dynamic Gallery (client masonry) + server page
- Auto "Recent projects" from /public/gallery
- Sticky mobile call/estimate bar
- Before/After slider
- themeColor moved to viewport.ts
- Smooth section scrolling

## Use your own photos
1) Put your images here (local source): `C:\Projects\SkyHigh\gallery\`
2) Run `npm run import-gallery` to copy them into `/public/gallery`

## Before/After
Place pairs into `public/before-after/` and point the page to those files, or reuse items from `/public/gallery`.

## Run
```
npm install
npm run import-gallery
npm run dev   # http://localhost:3030
```

## Email
Copy `.env.local.example` to `.env.local` and set:
- NEXT_PUBLIC_SITE_URL
- CONTACT_EMAIL
- SMTP_HOST / SMTP_PORT / SMTP_USER / SMTP_PASS
