# Step 1: Add homepage to package.json
 "homepage": "https://XXX.github.io/reactlectures"

# Step 2: Install gh-pages and add deploy to scripts in package.json
 npm install --save gh-pages
   "scripts": {
## + "predeploy": "npm run build",
## + "deploy": "gh-pages -d build",
      "start": "react-scripts start",
      "build": "react-scripts build"
   }

# Step 3: Deploy the site by running npm run deploy

npm run predeploy
npm run deploy

# Step 4: For a project page, ensure your project’s settings use gh-pages

Your site is now live at https://XXX.github.io/reactlectures/
