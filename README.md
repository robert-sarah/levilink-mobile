# LeviLink - Social Network App

LeviLink est une application mobile de réseau social moderne qui combine les meilleures fonctionnalités de **Facebook**, **Instagram**, **TikTok** et **X**. Conçue avec React Native et Expo, elle offre une expérience utilisateur fluide et intuitive sur iOS et Android.

## 🚀 Fonctionnalités Principales

### 📱 Écrans Principaux

- **Accueil (Feed)** - Flux dynamique de posts avec photos, vidéos et texte
- **Explorer** - Découvrez du contenu tendance et recherchez par hashtags
- **Créer** - Publiez du contenu textuel, des photos ou des vidéos
- **Messages** - Communiquez avec d'autres utilisateurs en temps réel
- **Profil** - Gérez votre profil et consultez vos publications

### ✨ Fonctionnalités Sociales

- ❤️ Système de likes avec retours haptiques
- 💬 Commentaires et réponses imbriquées
- 🔄 Partage de contenu
- 🔍 Recherche par hashtags et utilisateurs
- 👥 Système de suivi (follow/unfollow)
- 🔔 Notifications en temps réel

## 🛠️ Stack Technologique

- **Framework**: React Native 0.81 + Expo SDK 54
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Routing**: Expo Router 6
- **State Management**: React Context + AsyncStorage
- **Language**: TypeScript 5.9
- **Animations**: React Native Reanimated 4

## 📦 Installation

### Prérequis

- Node.js 18+ et pnpm
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (macOS) ou Android Emulator

### Étapes d'Installation

```bash
# Cloner le dépôt
git clone https://github.com/robert-sarah/levilink-mobile.git
cd levilink-mobile

# Installer les dépendances
pnpm install

# Démarrer le serveur de développement
pnpm dev

# Sur iOS
pnpm ios

# Sur Android
pnpm android

# Sur Web
pnpm web
```

## 📁 Structure du Projet

```
levilink-mobile/
├── app/
│   ├── (tabs)/
│   │   ├── _layout.tsx         # Configuration de la barre de navigation
│   │   ├── index.tsx           # Écran d'accueil (Feed)
│   │   ├── explore.tsx         # Écran d'exploration
│   │   ├── create.tsx          # Écran de création de post
│   │   ├── messages.tsx        # Écran de messages
│   │   └── profile.tsx         # Écran de profil
│   ├── _layout.tsx             # Layout racine avec providers
│   └── oauth/                  # Callbacks OAuth
├── components/
│   ├── screen-container.tsx    # Wrapper SafeArea réutilisable
│   ├── themed-view.tsx         # Vue avec thème
│   └── ui/
│       └── icon-symbol.tsx     # Composant d'icônes
├── hooks/
│   ├── use-colors.ts           # Hook pour les couleurs du thème
│   ├── use-color-scheme.ts     # Hook pour le mode clair/sombre
│   └── use-auth.ts             # Hook pour l'authentification
├── lib/
│   ├── utils.ts                # Utilitaires (cn, etc.)
│   ├── theme-provider.tsx      # Provider de thème global
│   └── trpc.ts                 # Client API tRPC
├── constants/
│   └── theme.ts                # Palette de couleurs
├── assets/
│   └── images/                 # Icônes et images
├── theme.config.js             # Configuration du thème Tailwind
├── tailwind.config.js          # Configuration Tailwind
├── app.config.ts               # Configuration Expo
└── package.json
```

## 🎨 Thème et Couleurs

LeviLink utilise un système de couleurs moderne avec support du mode clair et sombre:

| Couleur | Clair | Sombre |
|---------|-------|--------|
| Primary | #0a7ea4 | #0a7ea4 |
| Secondary | #FF6B6B | #FF8787 |
| Background | #ffffff | #151718 |
| Surface | #f5f5f5 | #1e2022 |
| Foreground | #11181C | #ECEDEE |

## 📝 Développement

### Ajouter un Nouvel Écran

```tsx
// app/(tabs)/nouveau-screen.tsx
import { ScreenContainer } from "@/components/screen-container";
import { Text, View } from "react-native";

export default function NouveauScreen() {
  return (
    <ScreenContainer className="p-4">
      <Text className="text-foreground text-lg font-bold">
        Nouvel Écran
      </Text>
    </ScreenContainer>
  );
}
```

### Ajouter une Icône à la Barre de Navigation

1. Ajouter le mapping dans `components/ui/icon-symbol.tsx`:
```tsx
const MAPPING = {
  "nouveau.icon": "nouveau-material-icon",
  // ...
} as const satisfies Record<string, string>;
```

2. Ajouter l'écran dans `app/(tabs)/_layout.tsx`:
```tsx
<Tabs.Screen
  name="nouveau"
  options={{
    title: "Nouveau",
    tabBarIcon: ({ color }) => <IconSymbol size={28} name="nouveau.icon" color={color} />,
  }}
/>
```

## 🧪 Tests

```bash
# Exécuter les tests
pnpm test

# Exécuter les tests en mode watch
pnpm test:watch
```

## 📱 Déploiement

### iOS

```bash
# Build pour App Store
eas build --platform ios --auto-submit
```

### Android

```bash
# Build pour Google Play
eas build --platform android --auto-submit
```

## 🔐 Sécurité

- Authentification OAuth intégrée
- Stockage sécurisé des tokens avec Expo Secure Store
- Validation des données côté client et serveur
- Support HTTPS pour toutes les communications

## 📚 Documentation Supplémentaire

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## 🤝 Contribution

Les contributions sont bienvenues! Veuillez:

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👨‍💻 Auteur

**LeviLink Development Team**

- GitHub: [@robert-sarah](https://github.com/robert-sarah)

## 🙏 Remerciements

- Expo et React Native pour le framework
- La communauté open-source pour les bibliothèques utilisées
- Tous les contributeurs et testeurs

## 📞 Support

Pour toute question ou problème, veuillez ouvrir une issue sur GitHub.

---

**Dernière mise à jour**: Décembre 2025
**Version**: 1.0.0
