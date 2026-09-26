# Heart Squad PWA

GitHub Pages-ready offline Progressive Web App for the Heart Squad class points system.

## Upload to GitHub

1. Create a GitHub repository.
2. Upload **all files and folders inside this package** to the repository's root.
3. In **Settings → Pages**, deploy the `main` branch from the `/ (root)` folder.
4. Open the resulting HTTPS GitHub Pages URL in Safari on the iPad.
5. Use Safari's **Share → Add to Home Screen** to install Heart Squad.

## Offline use

Open the GitHub Pages site at least once while online so Safari can install the service worker and cache the app shell. After that, the app can open and function offline.

Class data is stored in the browser's local storage, and the app's existing Import / Export feature can be used for backups.

## Updating the app

When you change the app files, increase the cache name in `sw.js` (for example, `heart-squad-v2`) so installed copies fetch the new app shell.
