(() => {
  const header = document.querySelector('.md-header__inner') || document.querySelector('header');
  if (!header || header.querySelector('.amwa-header-branding')) return;

  const scriptUrl = document.currentScript && document.currentScript.src;
  const assetUrl = (file) => new URL(`../images/${file}`, scriptUrl || window.location.href).href;
  const branding = document.createElement('div');
  branding.className = 'amwa-header-branding';
  branding.setAttribute('aria-label', 'AMWA branding');

  for (const logo of [{"file": "AMWA-logo.png", "alt": "AMWA logo", "href": "https://www.amwa.tv"}, {"src": "https://static.wixstatic.com/media/219a48_9e03812d08064ed0a8be326563d9cb9c~mv2.png", "alt": "JT-DMF logo"}]) {
    const image = document.createElement('img');
    image.src = logo.src || assetUrl(logo.file);
    image.alt = logo.alt;
    if (logo.href) {
      const link = document.createElement('a');
      link.href = logo.href;
      link.setAttribute('aria-label', logo.alt);
      link.appendChild(image);
      branding.appendChild(link);
    } else {
      branding.appendChild(image);
    }
  }

  header.insertBefore(branding, header.firstChild);
})();
