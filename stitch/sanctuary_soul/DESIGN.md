```markdown
# Design System Document: The Sacred Editorial

## 1. Overview & Creative North Star: "The Ethereal Stage"
The goal of this design system is to transcend the utility of a standard musician’s website and move into the realm of a digital sanctuary. We are building **"The Ethereal Stage"**—a Creative North Star that balances the weight of Gospel ministry with the sophisticated polish of a modern artist.

To break the "template" look, we abandon rigid grids in favor of **Intentional Asymmetry**. Large-scale serif typography should overlap container edges, and media elements should feel like they are floating in a vast, atmospheric space. By using expansive white space (up to `24` on our spacing scale) and layered surfaces, we create a sense of "divine breathing room."

---

## 2. Colors & Surface Philosophy
The palette is a dialogue between the "Deep Divine" (Purples) and "Radiant Grace" (Golds).

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts. 
*   *Example:* A section using `surface_container_low` should sit directly against a `surface` background. The shift in tone is the divider.

### Surface Hierarchy & Nesting
Treat the UI as a series of stacked sheets of fine, semi-transparent paper.
*   **Base:** `surface` (#fdf8fd) for the main page body.
*   **Secondary Content:** `surface_container_low` for large section blocks.
*   **High Prominence:** `surface_container_highest` for nested elements like event highlight cards.

### The "Glass & Gradient" Rule
To achieve a "divine" glow, main CTAs and Hero sections should utilize subtle linear gradients moving from `primary` (#0f0019) to `primary_container` (#320b44). For floating navigation or media controls, use **Glassmorphism**: 
*   **Fill:** `surface` at 70% opacity.
*   **Effect:** `backdrop-blur: 20px`.

---

## 3. Typography: The Elegant Voice
We utilize a high-contrast pairing: **Newsreader** (Serif) for the soul/authority and **Manrope** (Sans-serif) for the modern/utility.

*   **Display (Newsreader):** Use `display-lg` for Efua Black's name and key spiritual quotes. The serif's organic curves reflect the human voice.
*   **Headlines (Newsreader):** `headline-lg` should be used for section titles, often positioned with intentional negative margins to overlap image containers.
*   **Body & Labels (Manrope):** `body-lg` and `label-md` provide a clean, modern counter-balance. Manrope's geometric stability ensures professional readability for lyrics and event details.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are too "heavy" for a spiritual aesthetic. We use **Ambient Shadows** and **Tonal Lift**.

*   **The Layering Principle:** Depth is achieved by "stacking." Place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f7f2f8) background. This creates a natural, soft lift.
*   **Ambient Shadows:** If a "floating" effect is required (e.g., a mini-player), use a shadow with a blur of `40px` and an opacity of `4%`, tinted with the `on_surface` color.
*   **The "Ghost Border":** If a boundary is strictly required for accessibility in forms, use the `outline_variant` token at **15% opacity**. Never use a 100% opaque border.

---

## 5. Signature Components

### Media Player (The "Immersive" Console)
*   **Background:** Glassmorphism (`surface` @ 80% + blur).
*   **Controls:** Use `secondary` (#775a19) for the play/pause icons to signify "Gold/Value."
*   **Progress Bar:** A thin line of `outline_variant` with a `secondary` fill. No container box around the player; let it float at the bottom of the viewport.

### Event Cards (The "Sacred Invitation")
*   **Structure:** No borders. Use `surface_container_high` for the card body. 
*   **Typography:** The date should be in `display-sm` (Newsreader) to emphasize the moment.
*   **CTA:** A "text-only" button using `secondary` with a `label-md` weight.

### Professional Forms (The "Connection" Module)
*   **Inputs:** Forbid the "box" look. Use a `surface_container_lowest` fill with a subtle `2px` bottom-only stroke in `outline_variant`.
*   **Focus State:** Transition the bottom stroke to `secondary` (#775a19).
*   **Button:** Primary buttons use the `primary` to `primary_container` gradient with `on_primary` text.

### Chips & Tags
*   **Style:** Pill-shaped (`rounded-full`). 
*   **Color:** `secondary_container` (#fed488) background with `on_secondary_container` (#785a1a) text for high visibility without the "alert" feel.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use the `20` (7rem) spacing token between major sections to create a sense of awe.
*   **Do** allow images of Efua Black to break out of their containers using `overflow: visible` and asymmetrical cropping.
*   **Do** use `tertiary_fixed` (#eedbff) for subtle background accents behind text to add "texture" without weight.

### Don't:
*   **Don't** use 100% black. Use `primary` (#0f0019) for "deep" elements; it carries a purple soul that feels more sophisticated than pure black.
*   **Don't** use dividers or lines. If you feel the need to separate two things, increase the spacing to `8` or `10` or shift the surface color.
*   **Don't** use standard "Material" shadows. They are too industrial for this brand. Stick to Tonal Layering.

---

## 7. Accessibility Note
While we prioritize an editorial look, the `on_surface` (#1c1b1f) on `surface` (#fdf8fd) maintains a high contrast ratio. Ensure all `secondary` (Gold) text used on white backgrounds is checked for WCAG AA compliance; if it fails, use `on_secondary_container` (#785a1a) for those specific text elements.```