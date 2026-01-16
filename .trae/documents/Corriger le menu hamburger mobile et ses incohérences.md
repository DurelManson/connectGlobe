## Diagnostic
- Pas de verrouillage du scroll en mobile quand le menu est ouvert.
- Pas d’overlay ni fermeture au clic extérieur.
- Pas de fermeture via la touche Échap.
- Pas de focus trap (la tabulation sort du menu).
- Dropdown “Services” n’a pas d’états ARIA (expanded/haspopup/controls) et pas de contrôle clavier (Entrée/Espace).
- Ciblage tactile perfectible (padding/espacement des liens) et tailles de texte parfois trop grandes.

## Changements JavaScript (script.js)
1. Ouvrir/fermer menu:
   - Ajouter/retirer body.classList('menu-open').
   - Créer .nav-overlay au moment de l’ouverture; clic sur overlay ferme le menu.
   - Gérer Escape pour fermer.
2. Focus trap:
   - Au moment de l’ouverture, focus sur le premier lien.
   - Boucler la tabulation entre les éléments focusables du menu.
3. Dropdown “Services”:
   - Ajouter gestion clavier (Enter/Space) pour toggle.
   - Mettre à jour aria-expanded sur le lien parent et aria-controls sur la liste .dropdown.
   - Empêcher propagation quand on clique à l’intérieur du dropdown.

## Changements CSS (style.css)
1. Ajouter .nav-overlay (position: fixed; fond semi‑transparent; z-index < nav).
2. Body.menu-open { overflow: hidden } pour bloquer le scroll.
3. Améliorer lisibilité mobile:
   - Réduire légèrement la taille/line-height des liens.
   - Augmenter le padding vertical des items pour de meilleures zones tactiles.

## Accessibilité
- aria-haspopup="true", aria-expanded="true/false" sur le lien “Services”.
- aria-controls pointant vers l’ID de la liste dropdown.

## Validation
- Tester aux breakpoints 375/414/430/768.
- Vérifier: clic extérieur, Échap, focus trap, scroll bloqué, navigation clavier dans dropdown.

## Livrables
- Mise à jour de script.js et style.css uniquement (pas de modification de contenu HTML structurel).