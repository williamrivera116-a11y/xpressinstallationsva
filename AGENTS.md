# Project guide

This is a static website for XPress Installations LLC, an appliance installer serving Northern Virginia. Preserve its business name, phone number (571-330-8412), and existing service scope unless the user requests changes.

## Architecture

- `public/index.html`: Complete landing page, inline kitchen SVG, metadata, and Netlify quote form.
- `public/styles.css`: Shared design tokens, responsive layout, focus states, and reduced-motion support.
- `public/script.js`: Service preselection, footer year, and progressively enhanced form submission.
- `public/thank-you.html`: Confirmation page for successful quote submissions.
- `netlify.toml`: Static publish directory and response headers.
- `.netlify/features/netlify-forms`: Activation marker for Netlify Forms.

Use semantic HTML and small, dependency-free enhancements. The palette is forest green, warm cream, and pale lime. Keep layouts usable without JavaScript and maintain explicit form labels, visible keyboard focus, and mobile tap targets. No build step is needed.

The quote form uses Netlify Forms; keep its form name, hidden `form-name`, and submitted field names in sync. POST requests are URL-encoded to `/`; check the response before displaying success. The native fallback uses `/thank-you`. Do not replace it with a placeholder external form endpoint.

The uploaded source referenced unavailable photos. The replacement inline SVG is illustrative rather than a claim about completed work. Avoid publishing fabricated project photography or adding unverified testimonials, credentials, or service guarantees.
