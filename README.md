# Lucania Contractors LLC — Website

The official website for **Lucania Contractors LLC**, a heavy civil construction firm in South Texas.

This is a plain static website (HTML + CSS + a tiny bit of JavaScript). There is **no build step**
and **no framework** — the files you see are exactly what gets served. It is designed to be **fast**
and to host **for free** on GitHub Pages using the domain **lucaniacontractors.com**.

---

## Pages

| File | Page |
|------|------|
| `index.html` | Home ("Who We Are") |
| `bridges-structures.html` | Services → Bridges & Structures |
| `underground-utilities.html` | Services → Underground Utilities |
| `employment.html` | Employment |
| `contact.html` | Contact Us |
| `404.html` | Shown for unknown URLs |

Shared assets live in `css/` (styles), `js/` (mobile menu), and `assets/` (logo + photos).

---

## Preview it on your computer

Because it's a static site, you can just **double-click `index.html`** and it opens in your browser.
All pages, the logo, and photos will work. (The contact form only sends email once the site is live —
see below.)

---

## Publish it free on GitHub Pages

Do this once. After that, updating the site is just editing a file and pushing.

### 1. Put the code on GitHub
1. Create a free account at <https://github.com> if you don't have one.
2. Create a new **public** repository (e.g. `lucania-website`). Don't add a README — this folder already has one.
3. Upload these files to the repo — either drag-and-drop them in the GitHub web uploader, or use Git:
   ```bash
   git init
   git add .
   git commit -m "Initial website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/lucania-website.git
   git push -u origin main
   ```

### 2. Turn on GitHub Pages
1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait ~1 minute. Your site is now live at `https://<your-username>.github.io/lucania-website/`.

### 3. Point your domain at it
The `CNAME` file in this repo already contains `lucaniacontractors.com`, so GitHub knows the domain.
You just need to update DNS **at your domain registrar** (wherever you bought/manage
lucaniacontractors.com — e.g. GoDaddy, Namecheap, Google Domains, or Wix if the domain is registered there).

Add these records:

**Apex domain `lucaniacontractors.com` — four A records:**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**(Recommended) IPv6 — four AAAA records:**
```
2606:50c0:8000::153
2606:50c0:8001::153
2606:50c0:8002::153
2606:50c0:8003::153
```

**`www` subdomain — one CNAME record:**
```
Host: www   →   Value: <your-username>.github.io
```

> If the domain is currently registered *through Wix*, you'll either update these DNS records in the
> Wix domain settings, or transfer the domain to another registrar first. You do **not** need to keep
> the paid Wix website plan to keep the domain — but confirm the domain itself doesn't lapse when you cancel.

### 4. Finish in GitHub
1. Back in **Settings → Pages**, under **Custom domain**, confirm it shows `lucaniacontractors.com`.
   (DNS changes can take from a few minutes up to 48 hours to take effect.)
2. Once the check passes, tick **Enforce HTTPS** so the site loads securely as `https://`.

That's it — the site is live on your domain, for free.

---

## The contact form

The form on `contact.html` uses [FormSubmit](https://formsubmit.co) — free, no account needed.

**One-time activation:** the *first* time someone submits the form after the site is live, FormSubmit
sends a confirmation email to **admin@lucaniacontractors.com**. Open it and click the activation link
**once**. After that, every submission is emailed to that inbox automatically.

To send submissions somewhere else, change the email in this line of `contact.html`:
```html
<form action="https://formsubmit.co/admin@lucaniacontractors.com" method="POST">
```

---

## Editing the site

- **Change text:** open the relevant `.html` file and edit the words between the tags.
- **Change phone/email/address:** they appear in the footer of every page and on `contact.html`.
  Search each file for `956-890-6069` or `admin@lucaniacontractors.com`.
- **Add project photos to a gallery:** drop image files into the `assets/` folder, then in
  `bridges-structures.html` or `underground-utilities.html` add lines inside the `<div class="gallery">`:
  ```html
  <img src="assets/your-photo.jpg" alt="Description of the project" loading="lazy">
  ```
- **Colors/fonts:** all styling is in `css/style.css`. The brand red (`#b8393e`) is defined once at the
  top as `--red`.

After editing, save the file and push to GitHub (or re-upload it). GitHub Pages updates within a minute.

---

## Notes

- `.nojekyll` tells GitHub Pages to serve files as-is (no Jekyll processing).
- `robots.txt` and `sitemap.xml` help search engines index the site.
- The `assets/logo.png` is the red logo; `assets/logo-white.png` is a white version used on the red footer.
