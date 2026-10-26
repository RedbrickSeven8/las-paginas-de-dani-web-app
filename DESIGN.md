# DESIGN SYSTEM: Las páginas de Dani
*Grounded in Brand Identity (Manual de Marca) + styles.refero.design (Ramp Style Reference: High-contrast Editorial & Precision)*

---

## 1. Brand Identity & Archetype
- **Brand Name:** Las páginas de Dani
- **Archetype:** El solucionador ágil (Speed & No-code overhead for B2B/pymes colombianas).
- **Brand Promise:** Tu negocio en internet en 24 horas, sin enredos técnicos y con cuota clara.
- **Tone of Voice:** Directo, ágil, vendedor, transparente y B2B profesional.

---

## 2. Color Palette (Tokens)
- **Primary / Accent (Electric Orange / Energy & Conversion):** `#FF5E14` (Hover: `#E04E0B`, Light Wash: `#FFF4ED`)
- **Secondary (Obsidian & Deep B2B Trust):** `#0F172A` (Rich Slate Black)
- **Surface Dark (Cards & Inverted Sections):** `#1E293B`
- **Surface Paper / Light:** `#FFFFFF`
- **Canvas / Background:** `#F8FAFC` (Subtle warm off-white / bone)
- **Border Hairline:** `#E2E8F0`
- **Text Primary (Ink):** `#0F172A`
- **Text Muted (Ash):** `#64748B`
- **Success Signal:** `#10B981`
- **Alert / Non-Included Signal:** `#EF4444`

---

## 3. Typography Scale
- **Display & Headings:** `Montserrat`, sans-serif (Weights: 700 Bold, 800 ExtraBold, 900 Black). Tight letter-spacing (-0.03em) on display sizes.
- **Body & UI Elements:** `Inter`, system-ui, sans-serif (Weights: 400 Regular, 500 Medium, 600 SemiBold). Line height 1.5 - 1.6.
- **Scale:**
  - H1 Hero Display: 3.25rem - 4.5rem (52px - 72px), Leading tight 1.05
  - H2 Section: 2.25rem - 3rem (36px - 48px), Leading 1.15
  - H3 Subsection / Card Title: 1.25rem - 1.5rem (20px - 24px)
  - Body: 1rem (16px), Leading 1.6
  - Caption / Micro-labels: 0.75rem - 0.8125rem (12px - 13px), Tracking wide +0.05em, Uppercase

---

## 4. Spacing, Borders & Shadows
- **Base Rhythm:** 4px / 8px / 12px / 16px / 24px / 32px / 48px / 64px
- **Border Radius:**
  - Badges & Buttons: 8px to 9999px (pill for tags)
  - Cards: 16px (1rem)
  - Modals & Sheets: 20px
- **Hairline Elevation:** Substituted heavy drop shadows with 1px border (`border border-slate-200/80`) and crisp ambient hover lift (`hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/5`).

---

## 5. Architectural & Interactive Components
- **Live Simulator / Interactive Calculator:** Cotizador interactivo en tiempo real con selector de plan, add-ons (tarjetas NFC adicionales, dominio personalizado, copywriting express) y proyección de inversión inicial + mensualidad.
- **Interactive Comparison Matrix:** Matriz visual interactiva para contrastar los 4 niveles de servicio con badges de inclusión y exclusión clara.
- **Portafolio Interactivo en Vivo:** Muestras de proyectos reales verificados con vista previa interactiva, estadísticas de entrega y enlace directo: NexPlay, Gave Propiedades, Impacto Burger.
- **Simulator / Demo NFC:** Demostración interactiva de cómo funciona la tarjeta inteligente NFC física con emulador táctil en pantalla.
- **Micro-interactions:** Badges animados, acordión FAQ expandible, selector dinámico de planes con auto-scroll a WhatsApp con mensaje preconfigurado, feedback con Toasts sonner y confetti al solicitar cotización.
