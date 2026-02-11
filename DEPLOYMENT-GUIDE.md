# Decap CMS Deployment Guide - Magnum BI Website

## ✅ What's Been Set Up

Your Magnum BI website now has a complete headless CMS installed! Here's what's ready:

### Files Created:
- ✅ `/admin/index.html` - CMS admin panel interface
- ✅ `/admin/config.yml` - CMS configuration with your content types
- ✅ `/content/` folder - Stores all your editable content
- ✅ Identity widget added to index.html
- ✅ Example content files (services, FAQs, contact info)

### Content Collections Available:
- **Homepage Settings** - Hero section, about section
- **Services** - Building inspection services
- **Blog Posts** - News and articles
- **FAQs** - Frequently asked questions
- **Testimonials** - Client reviews
- **Service Areas** - Locations you serve
- **Site Settings** - Contact info, SEO settings

---

## 🚀 Next Steps: Deploy to Netlify

### Step 1: Push to GitHub

If you haven't already pushed to GitHub:

```bash
# If you don't have a GitHub repo yet:
# 1. Go to github.com and create a new repository
# 2. Then run these commands:

git remote add origin https://github.com/YOUR_USERNAME/magnum-bi-website.git
git push -u origin main
```

If you already have a GitHub repo:
```bash
git push
```

### Step 2: Deploy to Netlify (FREE)

1. **Sign up for Netlify**
   - Go to https://netlify.com
   - Click "Sign up" and use your GitHub account

2. **Connect Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Select your `magnum-bi-website` repository
   - Click "Deploy site"

3. **Enable Netlify Identity**
   - After deployment, go to your site dashboard
   - Click "Site settings" → "Identity"
   - Click "Enable Identity"

4. **Enable Git Gateway**
   - Scroll down to "Services" → "Git Gateway"
   - Click "Enable Git Gateway"

5. **Set Registration to Invite Only**
   - Under "Registration preferences"
   - Select "Invite only" (recommended for security)

### Step 3: Create Your CMS User Account

1. **Invite Yourself**
   - In Netlify dashboard, go to "Identity" tab
   - Click "Invite users"
   - Enter your email: `kristiemassage@gmail.com`
   - Click "Send invitation"

2. **Accept Invitation**
   - Check your email for the invitation
   - Click the link and set your password
   - You're now a CMS admin!

### Step 4: Access Your CMS

Once deployed, you can access your CMS at:

```
https://YOUR-SITE-NAME.netlify.app/admin/
```

**Login with:**
- Email: kristiemassage@gmail.com
- Password: (the one you set during invitation)

---

## 📝 How to Use the CMS

### Editing Homepage Content

1. Go to `/admin/`
2. Click "Homepage" in the sidebar
3. Select "Hero Section" or "About Section"
4. Edit the content
5. Click "Save" then "Publish"

### Adding a New Service

1. Go to `/admin/`
2. Click "Services" in sidebar
3. Click "New Service"
4. Fill in:
   - Service Name
   - Description
   - Price
   - Full details (in Markdown)
5. Upload an icon/image if needed
6. Set "Featured Service" to show on homepage
7. Click "Publish"

### Creating a Blog Post

1. Go to `/admin/`
2. Click "Blog & News"
3. Click "New Blog & News"
4. Fill in title, date, content
5. Upload a featured image
6. Click "Publish"

### Adding FAQs

1. Go to `/admin/`
2. Click "FAQs"
3. Click "New FAQ"
4. Enter question and answer
5. Select category
6. Click "Publish"

### Updating Contact Information

1. Go to `/admin/`
2. Click "Site Settings"
3. Select "Contact Information"
4. Update phone, email, address, etc.
5. Click "Publish"

---

## 🔄 How Content Updates Work

When you publish content in the CMS:

1. **CMS saves to GitHub** - Your content is saved as files in the `content/` folder
2. **Git commits automatically** - Decap CMS creates a commit
3. **Netlify rebuilds** - Your site automatically rebuilds with new content
4. **Live in minutes** - Changes appear on your live site

---

## 🛠️ Connecting CMS Content to Your Website

Right now, the CMS is set up and saving content, but your HTML file isn't reading from it yet. You have two options:

### Option A: Use JavaScript to Load Content (Simple)

Add this to your `index.html` to load content dynamically:

```javascript
// Load hero content
fetch('/content/hero.json')
  .then(res => res.json())
  .then(data => {
    document.querySelector('.hero h1').textContent = data.title;
    document.querySelector('.hero p').textContent = data.subtitle;
  });
```

### Option B: Use a Static Site Generator (Recommended)

For automatic builds, use a tool like:
- **11ty (Eleventy)** - Simple, flexible
- **Hugo** - Very fast
- **Astro** - Modern, component-based

I can help you set up any of these!

---

## 🎨 Customizing the CMS

### Change Content Types

Edit `/admin/config.yml` to:
- Add new fields to existing collections
- Create new content collections
- Change field types (text, markdown, image, etc.)
- Modify file paths

### Add Media Library

Already configured! Upload images through the CMS and they'll be saved to `/images/uploads/`

---

## 🔐 Security Notes

- ✅ Only invited users can access the CMS
- ✅ Git Gateway handles authentication
- ✅ All content changes are tracked in Git
- ✅ You can revert any change through GitHub

---

## 🆘 Troubleshooting

### Can't log into /admin/
- Check that Git Gateway is enabled in Netlify
- Verify you accepted the email invitation
- Clear browser cache and try again

### Changes not appearing on site
- Make sure you clicked "Publish" (not just "Save")
- Check GitHub to see if commit was created
- Netlify may take 1-2 minutes to rebuild

### Images not uploading
- Check the `media_folder` path in config.yml
- Ensure `images/uploads` folder exists
- Verify write permissions in Git Gateway

---

## 📞 Need Help?

If you need assistance with:
- Setting up the static site generator
- Connecting CMS content to your HTML
- Adding more content types
- Customizing the admin interface

Just let me know!

---

## 🎉 You're All Set!

Your CMS is ready to use. Once you:
1. Push to GitHub
2. Deploy to Netlify
3. Enable Identity & Git Gateway
4. Invite yourself as a user

You'll be able to edit your website content at `/admin/` without touching code!
