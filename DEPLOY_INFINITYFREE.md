# Deploy InsightLoop to InfinityFree

InfinityFree is a static/PHP host, so do **not** upload the project source, `node_modules`, or `.next` folder. Build the app locally and upload only the generated `out` folder.

## 1. Create the static site

From this project folder, run:

```bash
npm run build
```

This creates `out/`, containing `index.html`, JavaScript, CSS, and assets ready for upload.

## 2. Create an InfinityFree account and website

1. Register at https://www.infinityfree.com.
2. Create a new hosting account.
3. Choose either a free subdomain or connect your own domain.
4. Open the account's Control Panel.

## 3. Upload the site

Use either **Online File Manager** or an FTP client such as FileZilla:

1. Open the site's `htdocs` directory.
2. Delete the default `index2.html` file if InfinityFree created one.
3. Open the local `out` directory.
4. Upload the **contents inside** `out` into `htdocs`.

Your remote folder should look like this:

```text
htdocs/
├── index.html
├── _next/
├── 404.html
└── ...
```

Do not upload an `out` folder inside `htdocs`, otherwise the site will load at `/out/` rather than the domain root.

## 4. Verify

Open the temporary subdomain or connected domain in a private browser window. The login page should load immediately.

## Important limitations

The current authentication is a client-side demo. It will work visually after deployment, but it does not persist user accounts. A real login system needs an external service such as Supabase, Firebase, Clerk, or an API hosted somewhere that supports Node.js/server functions.

For future updates, run `npm run build` again and replace the contents of `htdocs` with the new contents of `out`.
