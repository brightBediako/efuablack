This is the **Efua Black** official site — a [Next.js](https://nextjs.org) app. The app sits at the **repository root** (where this `README.md` and `package.json` live), so you can connect the Git repo to Vercel without setting a subfolder **Root Directory**.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

1. Import this Git repository — leave **Root Directory** empty (or `.`), since `package.json` is at the repo root.
2. In the project **Settings → Environment Variables**, add at least:
   - **`MONGODB_URI`** — required. Without it, booking / contact / subscribe APIs return **503** (use MongoDB Atlas and allow Vercel’s IPs or `0.0.0.0/0` while testing).
   - **`NEXT_PUBLIC_RECAPTCHA_SITE_KEY`** and **`RECAPTCHA_SECRET_KEY`** — both required if you set either one; omit both to skip reCAPTCHA (dev only).
   - **`NOTIFY_EMAIL`**, **`EMAIL_FROM`**, **`SMTP_*`** — for outbound mail (optional; forms still save to Mongo).
3. Deploy, then **Redeploy** after changing env vars so serverless functions pick them up.

Copy names and placeholders from `.env.example`. See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more detail.

## Admin UI

- **URL:** `/admin` (sign in at `/admin/login`).
- **Env:** set **`ADMIN_PASSWORD`** (and optionally **`ADMIN_SESSION_SECRET`** for cookie signing; otherwise the password is used as the HMAC secret).
- **Robots:** `/admin/` is disallowed in `robots.txt`; pages use `noindex`.
- Sessions last **7 days** (HTTP-only cookie). Sign out from the sidebar.
