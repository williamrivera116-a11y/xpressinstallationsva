# XPress Installations

A responsive website for an appliance installation business serving Northern Virginia. It presents five installation services, explains the booking process, and collects free quote requests.

The site uses static HTML, CSS, vanilla JavaScript, and Netlify Forms. The kitchen illustration is an inline SVG, so it requires no external image files. DM Sans and Manrope are loaded from Google Fonts with local font fallbacks.

## Local development

No dependencies or build step are required. Serve the `public` directory with any static HTTP server. For Netlify development, run `netlify dev --port 8889`. Form processing requires deployment to Netlify; the local static server does not store submissions.

Netlify publishes `public` as configured in `netlify.toml`. Quote submissions appear in the Netlify Forms dashboard under `installation-quote`. The form works with native browser submission and progressively enhances to an asynchronous request with inline failure feedback.
