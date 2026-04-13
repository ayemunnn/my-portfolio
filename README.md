# Portfolio

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup

The contact form uses Resend.

1. Copy `.env.example` to `.env.local`.
2. Add your `RESEND_API_KEY`.
3. Set `CONTACT_TO_EMAIL` to the inbox where you want messages delivered.
4. For production, set `CONTACT_FROM_EMAIL` to a sender address on your verified Resend domain.

Example:

```env
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_TO_EMAIL=amankumark4@gmail.com
CONTACT_FROM_EMAIL=Portfolio Contact <hello@yourdomain.com>
```

Notes:

- `onboarding@resend.dev` is fine for initial testing, but for a real deployed portfolio you should use a verified sender domain in Resend.
- If the form is not configured, the API now returns a clear error message instead of failing silently.
