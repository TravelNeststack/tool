function injectAdSense(id) {
  const adDiv = document.getElementById(id);
  if (!adDiv || adDiv.querySelector('ins')) return;
  adDiv.innerHTML = `<ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-2873451977903450"
    data-ad-slot="${id}-slot"
    data-ad-format="auto"
    data-full-width-responsive="true"></ins>`;
  if (window.adsbygoogle) {
    window.adsbygoogle.push({});
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ['ad-top', 'ad-bottom', 'ad-footer'].forEach(injectAdSense);
  // Load AdSense script if not present
  if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
    document.body.appendChild(s);
  }
}); 