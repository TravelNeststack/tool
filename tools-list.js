const toolCategories = [
  {
    name: 'Image Tools',
    tools: [
      { title: 'Image to PNG Converter', file: 'image-to-png.html' },
      { title: 'Image to JPG Converter', file: 'image-to-jpg.html' },
      { title: 'Image Resizer', file: 'image-resizer.html' },
      { title: 'Image Compressor', file: 'image-compressor.html' },
      { title: 'Image Cropper', file: 'image-cropper.html' },
      { title: 'Convert Image to Base64', file: 'image-to-base64.html' },
      { title: 'Convert WebP to PNG', file: 'webp-to-png.html' },
      { title: 'GIF Maker', file: 'gif-maker.html' },
      { title: 'QR Code Generator', file: 'qr-code-generator.html' },
      { title: 'Screenshot to PDF Converter', file: 'screenshot-to-pdf.html' },
      { title: 'Image Background Remover', file: 'image-background-remover.html' },
    ]
  },
  {
    name: 'SEO Tools',
    tools: [
      { title: 'Meta Tag Generator', file: 'meta-tag-generator.html' },
      { title: 'Keyword Density Checker', file: 'keyword-density-checker.html' },
      { title: 'Sitemap Generator', file: 'sitemap-generator.html' },
      { title: 'Robots.txt Generator', file: 'robots-txt-generator.html' },
      { title: 'Google Index Checker', file: 'google-index-checker.html' },
      { title: 'Domain Authority Checker', file: 'domain-authority-checker.html' },
      { title: 'Backlink Checker', file: 'backlink-checker.html' },
      { title: 'Page Speed Checker', file: 'page-speed-checker.html' },
      { title: 'XML Sitemap Validator', file: 'xml-sitemap-validator.html' },
      { title: 'Mobile-Friendly Test', file: 'mobile-friendly-test.html' },
    ]
  },
  {
    name: 'Text Tools',
    tools: [
      { title: 'Word Counter', file: 'word-counter.html' },
      { title: 'Character Counter', file: 'character-counter.html' },
      { title: 'Case Converter', file: 'case-converter.html' },
      { title: 'Plagiarism Checker', file: 'plagiarism-checker.html' },
      { title: 'Grammar Checker', file: 'grammar-checker.html' },
      { title: 'Text-to-Speech', file: 'text-to-speech.html' },
      { title: 'Speech-to-Text', file: 'speech-to-text.html' },
      { title: 'URL Encoder & Decoder', file: 'url-encoder-decoder.html' },
      { title: 'Fancy Text Generator', file: 'fancy-text-generator.html' },
      { title: 'Random Text Generator', file: 'random-text-generator.html' },
    ]
  },
  {
    name: 'Developer Tools',
    tools: [
      { title: 'JSON Formatter', file: 'json-formatter.html' },
      { title: 'HTML to Markdown Converter', file: 'html-to-markdown.html' },
      { title: 'CSS Minifier', file: 'css-minifier.html' },
      { title: 'JavaScript Minifier', file: 'js-minifier.html' },
      { title: 'SQL Formatter', file: 'sql-formatter.html' },
      { title: 'HTACCESS Redirect Generator', file: 'htaccess-redirect-generator.html' },
      { title: 'Markdown to HTML Converter', file: 'markdown-to-html.html' },
      { title: 'Color Code Picker', file: 'color-code-picker.html' },
      { title: 'Base64 Encoder & Decoder', file: 'base64-encoder-decoder.html' },
      { title: 'IP Address Lookup', file: 'ip-lookup.html' },
    ]
  },
  {
    name: 'Math & Calculators',
    tools: [
      { title: 'Percentage Calculator', file: 'percentage-calculator.html' },
      { title: 'Age Calculator', file: 'age-calculator.html' },
      { title: 'BMI Calculator', file: 'bmi-calculator.html' },
      { title: 'Loan EMI Calculator', file: 'loan-emi-calculator.html' },
      { title: 'Scientific Calculator', file: 'scientific-calculator.html' },
      { title: 'Discount Calculator', file: 'discount-calculator.html' },
      { title: 'Currency Converter', file: 'currency-converter.html' },
      { title: 'Time Zone Converter', file: 'time-zone-converter.html' },
      { title: 'Binary to Decimal Converter', file: 'binary-to-decimal.html' },
      { title: 'Tip Calculator', file: 'tip-calculator.html' },
    ]
  },
  {
    name: 'Unit Converters',
    tools: [
      { title: 'Length Converter', file: 'length-converter.html' },
      { title: 'Weight Converter', file: 'weight-converter.html' },
      { title: 'Speed Converter', file: 'speed-converter.html' },
      { title: 'Temperature Converter', file: 'temperature-converter.html' },
      { title: 'Volume Converter', file: 'volume-converter.html' },
      { title: 'Data Storage Converter', file: 'data-storage-converter.html' },
      { title: 'Energy Converter', file: 'energy-converter.html' },
      { title: 'Pressure Converter', file: 'pressure-converter.html' },
      { title: 'Fuel Efficiency Converter', file: 'fuel-efficiency-converter.html' },
      { title: 'Angle Converter', file: 'angle-converter.html' },
    ]
  },
  {
    name: 'Security & Encryption Tools',
    tools: [
      { title: 'MD5 Hash Generator', file: 'md5-hash-generator.html' },
      { title: 'SHA256 Hash Generator', file: 'sha256-hash-generator.html' },
      { title: 'Password Generator', file: 'password-generator.html' },
      { title: 'Random String Generator', file: 'random-string-generator.html' },
      { title: 'URL Shortener', file: 'url-shortener.html' },
      { title: 'IP Geolocation Finder', file: 'ip-geolocation-finder.html' },
      { title: 'SSL Certificate Checker', file: 'ssl-certificate-checker.html' },
      { title: 'Whois Lookup', file: 'whois-lookup.html' },
      { title: 'HTTP Headers Checker', file: 'http-headers-checker.html' },
      { title: 'Privacy Policy Generator', file: 'privacy-policy-generator.html' },
    ]
  },
  {
    name: 'Social Media Tools',
    tools: [
      { title: 'YouTube Thumbnail Downloader', file: 'youtube-thumbnail-downloader.html' },
      { title: 'Instagram Photo Downloader', file: 'instagram-photo-downloader.html' },
      { title: 'Twitter Video Downloader', file: 'twitter-video-downloader.html' },
      { title: 'Facebook Video Downloader', file: 'facebook-video-downloader.html' },
      { title: 'TikTok Video Downloader', file: 'tiktok-video-downloader.html' },
      { title: 'YouTube Tags Extractor', file: 'youtube-tags-extractor.html' },
      { title: 'Hashtag Generator', file: 'hashtag-generator.html' },
      { title: 'Social Media Post Generator', file: 'social-media-post-generator.html' },
      { title: 'Emoji Keyboard', file: 'emoji-keyboard.html' },
      { title: 'Twitter Character Counter', file: 'twitter-character-counter.html' },
    ]
  },
  {
    name: 'Miscellaneous Tools',
    tools: [
      { title: 'Barcode Generator', file: 'barcode-generator.html' },
      { title: 'Meme Generator', file: 'meme-generator.html' },
      { title: 'Resume Builder', file: 'resume-builder.html' },
      { title: 'Invoice Generator', file: 'invoice-generator.html' },
      { title: 'Business Name Generator', file: 'business-name-generator.html' },
      { title: 'Lottery Number Generator', file: 'lottery-number-generator.html' },
      { title: 'Flip a Coin Simulator', file: 'flip-coin.html' },
      { title: 'Random Number Generator', file: 'random-number-generator.html' },
      { title: 'Dice Roller Simulator', file: 'dice-roller.html' },
      { title: 'Internet Speed Test', file: 'internet-speed-test.html' },
      { title: 'Daily Planner Creator', file: 'daily-planner.html' },
      { title: 'Wedding Invitation Generator', file: 'wedding-invitation-generator.html' },
      { title: 'Story Plot Generator', file: 'story-plot-generator.html' },
      { title: 'E-book Creator', file: 'ebook-creator.html' },
      { title: 'AI Chatbot Demo', file: 'ai-chatbot-demo.html' },
      { title: 'IP Address Tracker', file: 'ip-address-tracker.html' },
      { title: 'Fake Address Generator', file: 'fake-address-generator.html' },
      { title: 'Calculator for Electric Bills', file: 'electric-bill-calculator.html' },
      { title: 'Leap Year Checker', file: 'leap-year-checker.html' },
      { title: 'Name to Numerology Calculator', file: 'numerology-calculator.html' },
    ]
  }
];

function getCategoryIcon(categoryName) {
  const icons = {
    'Image Tools': 'bi-image',
    'SEO Tools': 'bi-graph-up',
    'Text Tools': 'bi-fonts',
    'Developer Tools': 'bi-code-slash',
    'Math & Calculators': 'bi-calculator',
    'Unit Converters': 'bi-arrow-left-right',
    'Security & Encryption Tools': 'bi-shield-lock',
    'Social Media Tools': 'bi-share',
    'Miscellaneous Tools': 'bi-stars',
  };
  return icons[categoryName] || 'bi-tools';
}

function renderTools() {
  const container = document.getElementById('tool-categories');
  container.innerHTML = '';
  toolCategories.forEach(category => {
    const section = document.createElement('section');
    const sectionId = `category-${category.name.replace(/\s+/g, '-').toLowerCase()}`;
    section.className = 'mb-5';
    section.id = sectionId;
    section.innerHTML = `<h2 class=\"mb-4\"><i class=\"bi ${getCategoryIcon(category.name)} me-2\"></i>${category.name}</h2>`;
    const row = document.createElement('div');
    row.className = 'row g-4';
    category.tools.forEach(tool => {
      const col = document.createElement('div');
      col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
      col.innerHTML = `
        <a href=\"${tool.file}\" class=\"text-decoration-none\">
          <div class=\"card tool-card h-100\">
            <div class=\"card-body d-flex flex-column justify-content-center align-items-center\">
              <h3 class=\"card-title tool-card-title text-center fs-5\">${tool.title}</h3>
            </div>
          </div>
        </a>
      `;
      row.appendChild(col);
    });
    section.appendChild(row);
    container.appendChild(section);
  });
}

// Populate categories dropdown in header
function renderCategoriesDropdown() {
  const menu = document.getElementById('categories-menu');
  if (!menu) return;
  menu.innerHTML = '';
  toolCategories.forEach(category => {
    const li = document.createElement('li');
    li.innerHTML = `<a class="dropdown-item" href="#category-${category.name.replace(/\s+/g, '-').toLowerCase()}">${category.name}</a>`;
    menu.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderTools();
  renderCategoriesDropdown();
  // Smooth scroll for category links
  document.body.addEventListener('click', function(e) {
    if (e.target.matches('.dropdown-item[href^="#category-"]')) {
      e.preventDefault();
      const targetId = e.target.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}); 