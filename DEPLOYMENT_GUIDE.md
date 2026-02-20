# How to Publish "Mollera Chocolates" for Free

The easiest and most professional way to host your React website for free is **Vercel** or **Netlify**. Both are excellent, free, and super fast.

I recommend **Netlify Drop** for the absolute simplest method (no coding tools needed), or **Vercel** if you want the best performance/Github integration.

---

## Option 1: The "Drag & Drop" Method (Simplest)
*Best if you just want it online right now without using Git/GitHub.*

1.  **Build your project locally:**
    Open your terminal in the project folder and run:
    ```bash
    npm run build
    ```
    This creates a `dist` folder in your project. This folder contains your finished, production-ready website.

2.  **Upload to Netlify:**
    - Go to [app.netlify.com/drop](https://app.netlify.com/drop).
    - Drag and drop your **`dist`** folder (from inside `Mollero web 2`) onto that page.
    - **Boom.** Your site is online instantly with a random name (e.g., `misty-mountain-123.netlify.app`).

---

## Option 2: The "Professional" Method (Recommended)
*Best for long-term maintenance. Updates automatically when you save code.*

1.  **Push your code to GitHub:**
    - Create a new repository on GitHub.com.
    - Run these commands in your project terminal:
      ```bash
      git init
      git add .
      git commit -m "Initial commit"
      git branch -M main
      git remote add origin https://github.com/YOUR_USERNAME/mollera-chocolates.git
      git push -u origin main
      ```

2.  **Connect to Vercel:**
    - Go to [vercel.com](https://vercel.com/signup) and sign up (free).
    - Click **"Add New..."** -> **"Project"**.
    - Import your `mollera-chocolates` repository.
    - Click **"Deploy"**.
    - Vercel will build and host it automatically.

---

## How to Connect Your Custom Domain
*If you already bought a domain (e.g., `mollerachocolates.com`) from GoDaddy, Namecheap, etc.*

### On Netlify:
1.  Go to **Site Settings** > **Domain Management**.
2.  Click **"Add a domain"** and type your domain name.
3.  Netlify will give you **DNS nameservers** (e.g., `dns1.p01.nsone.net`).
4.  **Log in to where you bought your domain** (GoDaddy/Namecheap).
5.  Find "Nameservers" or "DNS Management".
6.  Select "Custom Nameservers" and paste the ones Netlify gave you.
7.  Wait up to 24 hours (usually 30 mins) for it to work globally.

### On Vercel:
1.  Go to your project dashboard > **Settings** > **Domains**.
2.  Type your domain name and click **Add**.
3.  Vercel will give you an **A Record** (IP address) and a **CNAME** record.
4.  **Log in to where you bought your domain**.
5.  Go to "DNS Management".
6.  Add the **A Record** (`@` points to Vercel's IP).
7.  Add the **CNAME Record** (`www` points to `cname.vercel-dns.com`).
8.  It usually works within minutes!

---

## Summary
- **Quickest:** Run `npm run build` -> Drag `dist` folder to Netlify Drop.
- **Best:** Push to GitHub -> Connect to Vercel/Netlify.
- **Domain:** Update DNS settings at your registrar (GoDaddy/etc) to point to Vercel/Netlify.
