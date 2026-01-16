## Objectif
- Réduire et harmoniser la taille des polices sur mobile (≤480px) pour une lecture confortable sans zoom.
- Conserver la hiérarchie visuelle (H1>H2>H3) tout en limitant les gros titres sur les bannières.

## Cibles et Sélecteurs
- Global: h1–h6, p, .section-title h2
- Accueil: #typed-heading, .hero-tagline
- About: .banner-content h1, .mv-content h3
- Services: .services-banner .banner-content h1, .service-content h2
- Contact: #typed-contact-heading
- CTA: .final-cta .cta-content h2, .cta-subtext

## Modifications CSS Globales (style.css)
1. Ajouter un bloc « Typographie mobile »:
   - @media (max-width: 480px):
     - html { font-size: 15px }
     - body { line-height: 1.65 }
     - h1 { font-size: clamp(1.6rem, 4.5vw, 2rem); margin-bottom: 0.75rem }
     - h2 { font-size: clamp(1.4rem, 4vw, 1.8rem) }
     - h3 { font-size: clamp(1.2rem, 3.8vw, 1.5rem) }
     - p  { font-size: 0.95rem }
2. Réduire letter-spacing et éviter les UPPERCASE sur mobile pour les textes longs:
   - .btn, .hero-tagline, .service-subtitle { text-transform: none; letter-spacing: 0.2px }

## Spécifiques Pages
- Accueil (homepage-styles.css):
  - #typed-heading → font-size: clamp(1.6rem, 4.5vw, 2.2rem)
  - .hero-tagline → font-size: clamp(0.95rem, 3.5vw, 1.1rem); letter-spacing: 0; text-transform: none
- About (about-styles.css):
  - .banner-content h1 → clamp(1.6rem, 4.5vw, 2.2rem)
  - .mv-content h3 → clamp(1.3rem, 4vw, 1.7rem)
- Services (services-styles.css):
  - .services-banner .banner-content h1 → clamp(1.6rem, 4.5vw, 2.2rem)
  - .service-content h2 → clamp(1.4rem, 4vw, 1.8rem)
- Contact (contact-styles.css):
  - #typed-contact-heading → clamp(1.6rem, 4.5vw, 2.2rem)

## Lisibilité et Espacements
- Augmenter line-height des titres: h1–h3 à 1.3–1.4 en mobile
- Marges sous les titres: 0.75–1rem pour éviter les blocs trop denses

## Validation
- Vérifier aux breakpoints 375px, 414px, 430px, 768px
- Contrôler: absence de overflow horizontal, lisibilité des bannières, cohérence de hiérarchie, contrastes inchangés
- Tester pages: Accueil, About, Services, Contact sur http://localhost:8000/

## Livrables
- Mise à jour de style.css + overrides ciblés dans homepage-styles.css, about-styles.css, services-styles.css, contact-styles.css
- Aucune modification de contenu, uniquement de CSS

Confirmez et j’applique les ajustements immédiatement.