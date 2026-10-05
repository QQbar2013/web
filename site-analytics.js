window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

gtag('js', new Date());
gtag('config', 'G-H75JQ8DB7B');

document.addEventListener('click', function (event) {
  var link = event.target.closest('a[href*="line.me"]');
  if (!link) return;

  gtag('event', 'line_click', {
    link_url: link.href,
    link_text: (link.textContent || link.getAttribute('aria-label') || '').trim()
  });
});
