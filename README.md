# L'Instant J — Landing page

Landing page pour un photographe de mariage (Gironde · Landes · Pays Basque), construite avec **Next.js 16** (App Router) et React 19.

## Démarrer en local (VS Code)

1. Ouvrez ce dossier dans VS Code.
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le serveur de développement :
   ```bash
   npm run dev
   ```
4. Ouvrez [http://localhost:3000](http://localhost:3000).

> La première compilation télécharge les polices (Anton, Work Sans, JetBrains Mono) depuis Google Fonts via `next/font/google` — une connexion internet est nécessaire au premier lancement / build.

## Build de production

```bash
npm run build
npm run start
```

## Structure

```
app/
  layout.js          # polices + métadonnées
  globals.css         # tokens de design (couleurs, typo)
  page.js             # assemble toutes les sections
  components/
    Header.js          # navigation fixe + menu mobile
    Hero.js             # section hero (photo + titre + accroche)
    About.js            # présentation de la photographe
    Itinerary.js         # signature: itinéraire Gironde → Landes → Pays Basque
    Services.js         # 3 formules (élopement / journée / destination)
    Gallery.js           # mosaïque photo
    Testimonials.js      # avis clients
    Contact.js            # formulaire + coordonnées
    Footer.js
public/
  images/hero.jpg      # image fournie, utilisée en fond de hero
```

## Personnalisation rapide

- **Couleurs & polices** : tout est centralisé dans `app/globals.css` (variables CSS en haut du fichier).
- **Textes** : chaque section a son contenu directement dans le fichier `.js` correspondant (tableaux `OFFERS`, `QUOTES`, `STOPS`, etc.).
- **Photos** : remplacez `public/images/hero.jpg` par vos propres visuels, et ajoutez d'autres fichiers dans `public/images/` pour la galerie (`app/components/Gallery.js`).
- **Formulaire de contact** : le formulaire est statique par défaut (pas d'envoi réel). Branchez-le sur un service comme Resend, Formspree ou une route API Next.js selon vos besoins.
