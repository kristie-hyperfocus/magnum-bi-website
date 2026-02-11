# Decap CMS Setup Guide for Magnum BI Website

## Quick Start (15 minutes)

This guide will walk you through setting up Decap CMS on your Magnum BI website so you can edit content through a simple admin interface.

---

## What You'll Need

- ✅ Your website files (you already have this)
- ✅ A GitHub account (free to create at github.com)
- ✅ GitHub repository for your website (we'll create if you don't have one)
- ✅ A hosting service (Netlify, Vercel, or GitHub Pages - all free)

---

## Step 1: Create Admin Folder

Create a new folder called `admin` in your website root, then add two files:

### File 1: `admin/index.html`

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Content Manager</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</head>
<body>
  <!-- Include the script that builds the page and powers Decap CMS -->
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
```

### File 2: `admin/config.yml`

```yaml
# Decap CMS Configuration for Magnum BI

backend:
  name: git-gateway
  branch: main # Change to 'master' if your repo uses master branch

media_folder: "images" # Where uploaded images will be stored
public_folder: "/" # Public path for images

collections:
  # Services Collection
  - name: "services"
    label: "Services"
    folder: "content/services"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Service Name", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text"}
      - {label: "Icon", name: "icon", widget: "image", required: false}
      - {label: "Price", name: "price", widget: "string", required: false}
      - {label: "Full Details", name: "body", widget: "markdown"}

  # Blog Posts Collection
  - name: "blog"
    label: "Blog Posts"
    folder: "content/blog"
    create: true
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}"
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Author", name: "author", widget: "string", default: "Magnum BI Team"}
      - {label: "Featured Image", name: "thumbnail", widget: "image", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "Tags", name: "tags", widget: "list", required: false}

  # FAQ Collection
  - name: "faq"
    label: "FAQs"
    folder: "content/faq"
    create: true
    slug: "{{slug}}"
    fields:
      - {label: "Question", name: "question", widget: "string"}
      - {label: "Answer", name: "answer", widget: "markdown"}
      - {label: "Order", name: "order", widget: "number", default: 0}

  # Site Settings (Global content)
  - name: "settings"
    label: "Site Settings"
    files:
      - label: "Homepage"
        name: "homepage"
        file: "content/homepage.yml"
        fields:
          - {label: "Hero Title", name: "hero_title", widget: "string"}
          - {label: "Hero Subtitle", name: "hero_subtitle", widget: "text"}
          - {label: "Hero Image", name: "hero_image", widget: "image"}
          - {label: "About Section", name: "about", widget: "markdown"}

      - label: "Contact Info"
        name: "contact"
        file: "content/contact.yml"
        fields:
          - {label: "Email", name: "email", widget: "string"}
          - {label: "Phone", name: "phone", widget: "string"}
          - {label: "Address", name: "address", widget: "text"}
          - {label: "Business Hours", name: "hours", widget: "text"}
```

---

## Step 2: Add Identity Widget to Your Site

Add this script to your main `index.html` before the closing `</body>` tag:

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```

---

## Step 3: Set Up GitHub Repository

If you don't already have your site on GitHub:

1. Go to github.com and sign in
2. Click "New repository"
3. Name it "magnum-bi-website"
4. Make it Public or Private (your choice)
5. Click "Create repository"

Then push your code:

```bash
git init
git add .
git commit -m "Initial commit with Decap CMS"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/magnum-bi-website.git
git push -u origin main
```

---

## Step 4: Deploy to Netlify (Free Hosting)

1. Go to netlify.com and sign up (free)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your repository
4. Click "Deploy site"

**Enable Git Gateway:**

1. In Netlify dashboard, go to "Site settings" → "Identity"
2. Click "Enable Identity"
3. Scroll down to "Git Gateway" and click "Enable Git Gateway"
4. Under "Registration preferences", select "Invite only" (recommended)

---

## Step 5: Invite Yourself as a User

1. In Netlify dashboard, go to "Identity" tab
2. Click "Invite users"
3. Enter your email address
4. Check your email and accept the invitation
5. Set your password

---

## Step 6: Access Your CMS

Visit: `https://your-site-name.netlify.app/admin/`

You'll see a login page. Sign in with the email and password you just created!

---

## How to Use the CMS

### Adding a New Blog Post

1. Go to `/admin/`
2. Click "Blog Posts" in the sidebar
3. Click "New Blog Post"
4. Fill in the title, date, content, etc.
5. Click "Publish" → "Publish now"

### Editing Homepage Content

1. Go to `/admin/`
2. Click "Site Settings" → "Homepage"
3. Edit any field
4. Click "Publish" → "Publish now"

### Uploading Images

1. Click the "Image" field in any editor
2. Click "Choose an image"
3. Upload from your computer or select from existing images
4. Image is automatically stored in your repository

---

## Connecting CMS Data to Your Website

Decap CMS saves content as files in your repository. You'll need to update your HTML to read from these files.

### Option A: Use JavaScript to Load Content

Add this to your `index.html`:

```html
<script>
  // Load homepage content
  fetch('/content/homepage.yml')
    .then(response => response.text())
    .then(yaml => {
      // Parse YAML and update your HTML
      // You can use js-yaml library: https://github.com/nodeca/js-yaml
    });
</script>
```

### Option B: Use a Static Site Generator

For automatic builds, use a tool like:
- **11ty** (Eleventy) - Simple and flexible
- **Hugo** - Very fast
- **Jekyll** - GitHub Pages default

I can help you set up any of these!

---

## Folder Structure After Setup

```
magnum-bi-website/
├── admin/
│   ├── index.html
│   └── config.yml
├── content/
│   ├── services/
│   ├── blog/
│   ├── faq/
│   ├── homepage.yml
│   └── contact.yml
├── images/ (uploaded media)
├── index.html
└── (other files)
```

---

## Troubleshooting

### Can't log in to /admin/
- Make sure Git Gateway is enabled in Netlify
- Check that you've been invited as a user
- Clear browser cache and try again

### Changes not appearing on site
- Make sure you clicked "Publish" (not just "Save")
- Check your repository to see if files were committed
- If using a static site generator, make sure it's rebuilding

### Images not uploading
- Check the `media_folder` path in config.yml
- Make sure your repository has write permissions

---

## Next Steps

1. ✅ Customize the config.yml to match your content needs
2. ✅ Add more content collections (testimonials, team members, etc.)
3. ✅ Set up automatic builds with a static site generator
4. ✅ Add custom styling to the CMS (optional)

---

## Alternative: Skip Netlify and Use GitHub Only

If you prefer not to use Netlify, you can use the GitHub backend directly:

Update `admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR_USERNAME/magnum-bi-website
  branch: main
```

Then authenticate via GitHub OAuth. This requires more setup but gives you more control.

---

## Resources

- Decap CMS Docs: https://decapcms.org/docs/
- Example Config: https://decapcms.org/docs/configuration-options/
- Community Support: https://github.com/decaporg/decap-cms/discussions

---

**Need help with setup? Let me know which step you're on and I'll guide you through it!**
