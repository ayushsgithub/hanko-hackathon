 # Image Gallery - A Dynamic Web App for Hanko Hacksquad Hackathon

This project is a dynamic web application built using the Next.js, Supabase, Tailwind and Hanko to manage the registration process for hackathons and hackathon-like events.

## Features

- User registration and login 
- Admin dashboard to manage registration emails and keys.
- Responsive design
- Image uploads for the gallery (Working) 


![login_page](https://github.com/ayushsgithub/hanko-hackathon/blob/main/public/login_page.png?raw=true)

### This login page is the replica of official [hanko_io](https://cloud.hanko.io/login) login page

## Installation

First, clone the repository:

```
git clone https://github.com/ayushsgithub/hanko-hackathon.git
```

Go to the directory:

```
cd hanko-hackathon
```

Install dependencies:

```
npm install
or
yarn
```

Create a .env file in the root directory and add the following variables:

```
NEXT_PUBLIC_HANKO_API_URL= <your api url after signing up for hanko>
NEXT_PUBLIC_SUPABASE_URL= <generate it from supabase -> project settings -> api> 
NEXT_PUBLIC_SUPABASE_ANON_KEY= <go to supabase -> project settings -> api>

```

to run the development server:

```
npm run dev
```

The app will be available on http://localhost:3000

## Usage

- Users can register for the event individually or in teams
- Admins can approve or reject registrations from the dashboard
- Users will receive email notifications when their registration is approved or rejected

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

Ayush

Hope this helps! Let me know if you have any other questions.



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
