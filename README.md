# *LA Hacks* Dashboard Project by Anastasia Marinopoulos

I was asked to develop this site as a 2nd interview type of project by the *LA Hacks* interview committee.

I was asked to use four components to build this dashboard.  They include

[React](https://react.dev/)
[NextJs](https://nextjs.org/)
[Tailwind CSS](https://tailwindcss.com/) and
[Firebase by Google](https://firebase.google.com/).

I managed to use React, NextJS and Tailwind.  I would have used Firebase for authentication and backend storage, but I simply ran out of time.  However, instead of using Cloud Firestore for storage, I simulated its use by reading data stored in JSON files which are read in dynamically when the page is rendered.

## Call Outs

* I used the new LLM model by Vercel located at [v0.dev](https://v0.dev) to help create the initial site template.

* I am using the latest version version of NextJS, which uses server generated page building and is great for SEO.

* `/schedule` and `/teams` are drivien by `JSON` files stored in the `/json` directory.  To  switch to a database I would simply `fecth()` the equivalent `JSON` blobs from the appropriate endpoints.

* I am using [font-awesome](https://fontawesome.com/) for the icon in the nav bar.











## To run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.




