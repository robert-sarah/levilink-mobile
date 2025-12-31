# LeviLink - Interface Design Plan

## Overview
LeviLink est un réseau social hybride combinant les meilleures fonctionnalités de Facebook, Instagram, TikTok et X. L'application permet aux utilisateurs de partager du contenu textuel, des photos, des vidéos et de s'engager avec d'autres utilisateurs via les likes, commentaires et partages.

## Design Principles
- **Mobile-First**: Conçu pour le portrait (9:16) et l'utilisation d'une main
- **iOS HIG Compliance**: Interface épurée et intuitive, conforme aux standards Apple
- **Content-Centric**: Le contenu utilisateur est au centre de l'expérience
- **Smooth Interactions**: Transitions fluides et retours haptiques subtils

## Screen List

### 1. **Feed Screen** (Home)
- Affichage principal du flux de contenu
- Défilement vertical des posts (texte, photos, vidéos)
- Actions: Like, Commentaire, Partage, Signaler
- Pull-to-refresh pour charger les nouveaux posts
- Indicateur de chargement en bas pour la pagination

### 2. **Create Post Screen**
- Formulaire de création de post
- Onglets: Texte, Photo, Vidéo, Sondage
- Sélecteur de photos/vidéos depuis la galerie
- Prévisualisation du contenu
- Options de confidentialité (Public, Amis, Privé)
- Bouton de publication

### 3. **Post Detail Screen**
- Affichage détaillé d'un post unique
- Commentaires en liste scrollable
- Formulaire de réponse en bas
- Actions: Like, Partager, Signaler, Supprimer (si propriétaire)

### 4. **Comments Screen**
- Liste des commentaires sur un post
- Réponses imbriquées aux commentaires
- Champ de saisie pour ajouter un commentaire
- Actions: Like, Répondre, Supprimer

### 5. **Explore/Discover Screen**
- Grille de contenu populaire (style Instagram)
- Recherche par hashtags et utilisateurs
- Catégories de tendances
- Suggestions de contenu basées sur les intérêts

### 6. **Profile Screen**
- Avatar et bio de l'utilisateur
- Statistiques (followers, following, posts)
- Grille des posts de l'utilisateur
- Boutons: Modifier le profil, Partager le profil, Paramètres

### 7. **Notifications Screen**
- Liste des notifications (likes, commentaires, follows)
- Marquage comme lu
- Actions rapides (accepter follow, répondre)

### 8. **Messages/Chat Screen**
- Liste des conversations
- Écran de chat avec messages en temps réel
- Indicateur de saisie
- Envoi de photos/vidéos dans les messages

### 9. **Settings Screen**
- Compte et sécurité
- Confidentialité et blocage
- Notifications
- Thème (clair/sombre)
- À propos et support

## Primary Content and Functionality

### Feed Screen
**Content**: Posts avec auteur, timestamp, contenu (texte/photo/vidéo), compteurs (likes, commentaires, partages)
**Functionality**:
- Affichage du flux principal
- Swipe up pour voir plus de posts
- Tap sur un post pour voir les détails
- Double tap pour liker
- Tap sur le profil de l'auteur pour voir son profil

### Create Post Screen
**Content**: Formulaire avec champs de saisie, sélecteur de médias, options de confidentialité
**Functionality**:
- Saisie de texte avec limite de caractères
- Sélection de photos/vidéos depuis la galerie
- Aperçu du contenu
- Publication avec validation

### Explore Screen
**Content**: Grille de posts populaires, barre de recherche, catégories
**Functionality**:
- Recherche par hashtags (#)
- Recherche par utilisateurs (@)
- Filtrage par catégories
- Tap sur un post pour voir les détails

### Profile Screen
**Content**: Avatar, bio, statistiques, grille de posts
**Functionality**:
- Affichage du profil utilisateur
- Modification du profil (si propriétaire)
- Suivi/Désuivi d'utilisateurs
- Affichage des posts de l'utilisateur

### Messages Screen
**Content**: Liste des conversations, messages
**Functionality**:
- Envoi et réception de messages
- Envoi de photos/vidéos
- Notifications de nouveaux messages
- Suppression de conversations

## Key User Flows

### 1. **Créer et Partager un Post**
1. Utilisateur appuie sur le bouton "+" dans la barre de navigation
2. Écran de création de post s'ouvre
3. Utilisateur saisit le texte ou sélectionne une photo/vidéo
4. Utilisateur appuie sur "Publier"
5. Post apparaît en haut du flux
6. Notification de succès affichée

### 2. **Interagir avec un Post**
1. Utilisateur voit un post dans le flux
2. Double tap pour liker (ou tap sur l'icône de like)
3. Tap sur l'icône de commentaire pour voir les commentaires
4. Tap sur l'icône de partage pour partager
5. Compteurs mis à jour en temps réel

### 3. **Découvrir du Contenu**
1. Utilisateur appuie sur l'onglet "Explore"
2. Grille de contenu populaire affichée
3. Utilisateur tape un hashtag ou un nom d'utilisateur
4. Résultats de recherche affichés
5. Tap sur un résultat pour voir le profil ou le post

### 4. **Suivre un Utilisateur**
1. Utilisateur appuie sur le profil d'un autre utilisateur
2. Écran de profil s'ouvre
3. Utilisateur appuie sur "Suivre"
4. Notification d'ajout de follower envoyée
5. Posts de cet utilisateur apparaissent dans le flux

### 5. **Envoyer un Message**
1. Utilisateur appuie sur l'onglet "Messages"
2. Appuie sur "Nouveau message" ou sélectionne une conversation existante
3. Saisit le message et appuie sur "Envoyer"
4. Message apparaît dans la conversation
5. Notification reçue par le destinataire

## Color Choices

### Primary Colors
- **Primary Accent**: `#0a7ea4` (Bleu moderne)
- **Secondary Accent**: `#FF6B6B` (Rouge vif pour les actions)
- **Success**: `#22C55E` (Vert pour les confirmations)
- **Warning**: `#F59E0B` (Orange pour les alertes)
- **Error**: `#EF4444` (Rouge pour les erreurs)

### Neutral Colors
- **Background**: `#FFFFFF` (Clair) / `#151718` (Sombre)
- **Surface**: `#F5F5F5` (Clair) / `#1E2022` (Sombre)
- **Foreground**: `#11181C` (Clair) / `#ECEDEE` (Sombre)
- **Muted**: `#687076` (Clair) / `#9BA1A6` (Sombre)
- **Border**: `#E5E7EB` (Clair) / `#334155` (Sombre)

### Brand Identity
- **Logo**: Icône stylisée représentant la connexion et le partage
- **Typography**: SF Pro Display (iOS) / Roboto (Android)
- **Spacing**: Multiples de 4px (4, 8, 12, 16, 20, 24, 32, 40, 48)

## Navigation Structure

```
Tab Bar (5 onglets):
├── Home (Feed)
├── Explore (Découverte)
├── Create Post (+)
├── Messages (Chat)
└── Profile (Profil)

Modal Screens:
├── Create Post
├── Post Detail
├── Comments
├── Profile Detail
├── Settings
└── Notifications
```

## Interaction Patterns

### Press Feedback
- **Primary Buttons**: Scale 0.97 + haptic light
- **List Items**: Opacity 0.7 on press
- **Icons**: Opacity 0.6 on press
- **Cards**: Subtle shadow increase

### Haptics
- Button tap: Light impact
- Toggle/Switch: Medium impact
- Success: Success notification
- Error: Error notification

### Animations
- Screen transitions: Slide from bottom (modals)
- List item animations: Fade in on load
- Like animation: Scale + fade (heart burst)
- Pull-to-refresh: Subtle spinner

## Accessibility
- Contraste de couleur: WCAG AA minimum
- Tailles de texte: Minimum 16px pour le corps
- Zones tactiles: Minimum 44x44pt
- Labels descriptifs pour tous les éléments interactifs
- Support du mode sombre natif
