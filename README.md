# Pilote — Marketing

Site marketing de Pilote. Stack : Astro 7 + React 19 (îlots) + Tailwind CSS 4.

## Structure

```
/
├── public/
│   └── favicon.svg
├── src
│   ├── components
│   │   └── react/
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── index.astro
│   └── styles
│       └── global.css
└── package.json
```

## Commandes

| Commande         | Action                                        |
| :--------------- | :--------------------------------------------- |
| `pnpm install`    | Installe les dépendances                      |
| `pnpm dev`        | Démarre le serveur local sur `localhost:4321` |
| `pnpm build`      | Build de production dans `./dist/`            |
| `pnpm preview`    | Prévisualise le build en local                |
| `pnpm astro ...`  | Commandes CLI Astro (`astro add`, `astro check`) |
