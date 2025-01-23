// Load the Visme embed script for the form
(function loadVismeScript() {
    const script = document.createElement('script');
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true; // Ensures it loads asynchronously for better performance
    document.head.appendChild(script);
  })();
  