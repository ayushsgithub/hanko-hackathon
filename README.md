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

- Users have to register for the first time
- Afterwards they can sign up with passkeys or windows hello features
- Explore the Image gallery or go the source of each image i.e. [unsplash](https://unsplash.com/)
- Adding own images to the gallery feature is yet not implemented.

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Author

[Ayush](https://ayushk.co)

#### If you like the project, you can star ✨🌠 the repository to show your love 😍 and support 🤝
