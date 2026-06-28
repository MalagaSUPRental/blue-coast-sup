# Blue Coast SUP — Next.js 15 Website

A professional, multilingual SUP rental website for Malaga, Spain.

## Tech Stack
- **Next.js 15** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Custom i18n** (EN / UA / RU) with browser language detection

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deployment (Vercel)

1. Push to GitHub
2. Connect repo to Vercel
3. Deploy — zero config needed

## Customization

### Telegram & WhatsApp links
Update in these files:
- `src/components/Navbar.tsx` — `TELEGRAM_URL`
- `src/components/Hero.tsx` — `TELEGRAM_URL`
- `src/components/Pickup.tsx` — `TELEGRAM_URL`
- `src/components/Contact.tsx` — `TELEGRAM_URL`, `WHATSAPP_URL`, `PHONE`
- `src/components/StickyCTA.tsx` — `TELEGRAM_URL`
- `src/components/Footer.tsx` — `TELEGRAM_URL`

### Translations
All text is in `src/lib/i18n.ts` — edit any string in the `translations` object.

### Colors
Defined in `tailwind.config.ts`:
- `ocean-deep`: #0B2545
- `ocean-mid`: #134074
- `turquoise`: #0ABFBC
- `sand`: #F2E9D8
