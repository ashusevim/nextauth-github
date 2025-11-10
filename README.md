# NextAuth + GitHub OAuth Fun Project

Authentication demo using [Next.js](https://nextjs.org) and [NextAuth.js](https://next-auth.js.org/) with GitHub as the OAuth provider.

## What's This?

This is a learning project exploring authentication flows with:
- **Next.js 16** (App Router)
- **NextAuth.js v4** for OAuth
- **GitHub OAuth** for authentication
- **Tailwind CSS v4** for styling
- **TypeScript** for type safety

## Features

- GitHub OAuth authentication
- Session management

## Getting Started

### Prerequisites

- A GitHub account and Node.js installed on your machine

### This is how you can setup GitHub OAuth App

1. Go to GitHub Settings → Developer settings → [OAuth Apps](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill all the details:
   - **Application name**: as you want
   - **Homepage URL**: `http://localhost:3000`
   - **Authorization callback URL**: `http://localhost:3000/api/auth/callback/github`
4. Save your `Client ID` and generate a `Client Secret`

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
GITHUB_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_random_secret_here
```

> You can generate a secret with: `openssl rand -base64 32`

### Installation & Running

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

## Tech Stack

- Next.js (App Router), NextAuth.js v4, Tailwind CSS v4, TypeScript and GitHub

## What I Learned

- How OAuth 2.0 flows work
- Learned how to setting up NextAuth.js in Next.js 
- Managing sessions client-side and server-side
- Creating beautiful, modern UIs with Tailwind

## Contributing

This is a learning project so fork it and make it yours.

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [GitHub OAuth Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps)
- [Tailwind CSS v4](https://tailwindcss.com/docs)

## License

This is a fun learning project - do whatever you want with it! MIT License if you need one.