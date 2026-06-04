# 🚀 Kala Kamna Website - Complete Setup Guide

## PART 1: HOW TO OPEN THE WEBSITE

### **Option A: Quick Start (Easiest Way)**

#### Step 1: Download Your Repository
1. Go to your GitHub repository: `https://github.com/meemansa-alt/kala-kamna-website`
2. Click the green **"Code"** button
3. Click **"Download ZIP"**
4. Extract the ZIP folder to any location on your computer

#### Step 2: Open index.html
1. Navigate to the extracted folder
2. Find **`index.html`** file
3. **Double-click on `index.html`** to open it in your default browser
   - OR Right-click → Open with → Choose your browser (Chrome, Firefox, Safari, Edge)

✅ **Website is now open!** You should see the Kala Kamna logo splash screen for 5 seconds.

---

### **Option B: Using a Local Server (Recommended for better performance)**

#### Step 1: Download and Extract
- Same as Option A (Steps 1-2)

#### Step 2: Install Python (if not already installed)
- **Windows**: Download from https://www.python.org/downloads/
- **Mac**: Already comes with system Python
- **Linux**: Already comes with system Python

#### Step 3: Open Command Prompt / Terminal
- **Windows**: Press `Win + R`, type `cmd`, press Enter
- **Mac**: Press `Cmd + Space`, type `terminal`, press Enter
- **Linux**: Open Terminal (Ctrl + Alt + T)

#### Step 4: Navigate to Your Folder
```bash
cd path/to/kala-kamna-website
```
Example:
```bash
cd C:\Users\YourName\Downloads\kala-kamna-website
```

#### Step 5: Start Local Server
- **Python 3** (Windows/Mac/Linux):
```bash
python -m http.server 8000
```

- **Python 2** (if Python 3 not available):
```bash
python -m SimpleHTTPServer 8000
```

#### Step 6: Open in Browser
1. Open your web browser
2. Type in address bar: `http://localhost:8000`
3. Press Enter
4. Click on `index.html`

✅ **Website is now running on local server!**

---

## PART 2: HOW TO ADD YOUR LOGO AND IMAGES

### **Step 1: Create the Assets Folder**

1. In your extracted `kala-kamna-website` folder
2. If `assets` folder doesn't exist, create it:
   - Right-click inside the folder
   - Select **"New Folder"**
   - Name it **`assets`**
3. You should now have: `kala-kamna-website/assets/`

---

### **Step 2: Prepare Your Images**

You need these files:

| File Name | Purpose | Recommended Size | Format |
|-----------|---------|-----------------|--------|
| `logo-monogram.png` | Logo in splash & corner | 400x400px | PNG (transparent bg) |
| `bharat-kala.jpg` | Category 1 image | 400x350px | JPG |
| `beyond-canvas.jpg` | Category 2 image | 400x350px | JPG |
| `scenic-escapes.jpg` | Category 3 image | 400x350px | JPG |
| `crystal-resin.jpg` | Category 4 image | 400x350px | JPG |
| `dev-kala.jpg` | Category 5 image | 400x350px | JPG |
| `product-placeholder.png` | Product default image | 300x250px | PNG |

**For Product Images:**
- If you want different images for each product, name them:
  - `product-1.jpg` to `product-20.jpg` (for 5 categories × 4 products each)

---

### **Step 3: Add Images to Assets Folder**

1. Open your `assets` folder inside `kala-kamna-website`
2. Copy and paste your prepared images into this folder
3. Make sure file names EXACTLY match what's listed above

Example folder structure:
```
kala-kamna-website/
├── assets/
│   ├── logo-monogram.png
│   ├── bharat-kala.jpg
│   ├── beyond-canvas.jpg
│   ├── scenic-escapes.jpg
│   ├── crystal-resin.jpg
│   ├── dev-kala.jpg
│   └── product-placeholder.png
├── index.html
├── styles.css
├── script.js
└── README.md
```

---

### **Step 4: Update Product Information (Optional)**

If you want to customize product names, descriptions, and prices:

1. Open **`script.js`** with a text editor (Notepad, VS Code, etc.)
2. Find the section marked: `// Product Database`
3. Update product details:

Example - Change Bharat Kala product:
```javascript
{
    id: 1,
    name: 'Your Product Name Here',           // ← Change this
    description: 'Your description here',     // ← Change this
    price: '₹15,000',                         // ← Change this
    size: '12" x 18"',                        // ← Change this
    image: 'assets/product-1.jpg',            // ← Optional: custom image
    badge: 'Handmade'                         // ← Change if needed
}
```

---

### **Step 5: Refresh Your Website**

1. Save any changes to `script.js`
2. Go to your browser where website is open
3. Press **`F5`** or **`Ctrl + R`** to refresh
4. Your new images and content should appear!

---

## PART 3: QUICK REFERENCE - FILE EDITING

### **How to Edit Files:**

#### Option 1: Notepad (Windows)
1. Right-click on `script.js`
2. Select **"Open with"** → **"Notepad"**
3. Make changes
4. Press **Ctrl + S** to save
5. Close and refresh browser

#### Option 2: VS Code (Recommended - Free)
1. Download: https://code.visualstudio.com/
2. Install it
3. In VS Code: **File** → **Open Folder**
4. Select your `kala-kamna-website` folder
5. Edit any file and it auto-saves
6. Refresh browser to see changes

#### Option 3: Online Code Editor
1. Create account at https://replit.com/
2. Click **"Create"** → **"Import from GitHub"**
3. Paste: `https://github.com/meemansa-alt/kala-kamna-website`
4. Click **"Import"**
5. Edit online and it automatically updates!

---

## PART 4: IMAGE OPTIMIZATION TIPS

### **Resize Images (Online Tools - No Software Needed)**

1. Go to: https://www.iloveimg.com/resize-image
2. Upload your image
3. Set size:
   - Category images: **400 × 350 pixels**
   - Logo: **400 × 400 pixels**
   - Product images: **300 × 250 pixels**
4. Download resized image
5. Rename and place in `assets/` folder

### **Convert to PNG/JPG**

1. Go to: https://cloudconvert.com/
2. Upload image
3. Convert to PNG or JPG
4. Download and save to `assets/` folder

---

## PART 5: COMMON ISSUES & SOLUTIONS

### **Issue: Images not showing**
**Solution:**
1. Check file names match exactly (case-sensitive)
2. Make sure files are in `assets/` folder
3. Refresh browser (Ctrl + R)
4. Check file format (should be .jpg or .png)

### **Issue: Website looks broken**
**Solution:**
1. Make sure all files are in the main folder:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` folder
2. Refresh browser
3. Clear browser cache (Ctrl + Shift + Delete)

### **Issue: Local server not working**
**Solution:**
1. Make sure you're in the correct folder in terminal
2. Try a different port number:
   ```bash
   python -m http.server 8001
   ```
3. Then visit: `http://localhost:8001`

### **Issue: Changes not showing**
**Solution:**
1. Hard refresh browser: **Ctrl + Shift + R** (Windows) or **Cmd + Shift + R** (Mac)
2. Close browser completely and reopen
3. Clear browser cache

---

## PART 6: UPLOADING CHANGES TO GITHUB (Optional)

### **If you want to sync changes back to GitHub:**

1. Download GitHub Desktop: https://desktop.github.com/
2. Click **File** → **Clone Repository**
3. Enter: `meemansa-alt/kala-kamna-website`
4. Select folder location
5. Make changes to files
6. GitHub Desktop will show changed files
7. Write message (e.g., "Added logo and product images")
8. Click **Commit to main**
9. Click **Push origin**

---

## PART 7: GO LIVE (Host Your Website Online)

### **Option A: GitHub Pages (FREE)**
1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source" select **main** branch
4. Your website will be live at: `https://meemansa-alt.github.io/kala-kamna-website/`

### **Option B: Netlify (FREE)**
1. Go to https://www.netlify.com/
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag & drop your `kala-kamna-website` folder
4. Your website is live!

### **Option C: Vercel (FREE)**
1. Go to https://vercel.com/
2. Click **"Add New Project"**
3. Import from GitHub: `kala-kamna-website`
4. Click **"Deploy"**
5. Your website is live!

---

## FINAL CHECKLIST

Before your website is ready:

- [ ] Downloaded repository and extracted ZIP
- [ ] Opened `index.html` in browser
- [ ] Created `assets/` folder
- [ ] Added `logo-monogram.png` (your logo)
- [ ] Added category images (bharat-kala.jpg, etc.)
- [ ] Added `product-placeholder.png`
- [ ] Updated product names/prices in `script.js` (optional)
- [ ] Refreshed browser to see changes
- [ ] Tested all 5 categories
- [ ] Tested "Add to Cart" buttons
- [ ] Tested navigation (back button, logo click, ESC key)

---

## NEED HELP?

📧 **Common Questions:**
- **Q: Can I use PNG for all images?** A: Yes! PNG works for all images.
- **Q: What if I want different prices?** A: Edit the `price` field in `script.js` for each product.
- **Q: Can I add more products?** A: Yes! Duplicate product objects in `script.js` and add more.
- **Q: How do I change colors?** A: Edit CSS variables at top of `styles.css`:
  ```css
  --primary-color: #2d5016;      /* Dark green */
  --secondary-color: #d4af37;    /* Gold */
  ```

---

**You're all set! Enjoy your beautiful Kala Kamna website! 🎨✨**
