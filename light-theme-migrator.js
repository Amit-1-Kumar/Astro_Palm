const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

// Regex mappings to migrate strict hardcoded hex/rgba to theme variables
const replacements = [
  { match: /#0B0D17/gi, replace: 'var(--bg-dark)' },
  { match: /#000000/gi, replace: 'var(--bg-dark)' },
  { match: /#000/g, replace: 'var(--bg-dark)' },
  { match: /#FFFFFF/gi, replace: 'var(--text-main)' },
  { match: /#fff/gi, replace: 'var(--text-main)' },
  { match: /#A0AEC0/gi, replace: 'var(--text-muted)' },
  { match: /#E0FFFF/gi, replace: 'var(--text-accent)' },
  { match: /rgba\(255\s*,\s*255\s*,\s*255\s*,\s*0\.03\)/g, replace: 'rgba(0,0,0,0.02)' },
  { match: /rgba\(255\s*,\s*255\s*,\s*255\s*,\s*0\.05\)/g, replace: 'rgba(0,0,0,0.04)' },
  { match: /rgba\(255\s*,\s*255\s*,\s*255\s*,\s*0\.08\)/g, replace: 'rgba(0,0,0,0.06)' },
  { match: /rgba\(255\s*,\s*255\s*,\s*255\s*,\s*0\.1\)/g, replace: 'rgba(0,0,0,0.08)' },
  { match: /rgba\(255\s*,\s*255\s*,\s*255\s*,\s*0\.15\)/g, replace: 'rgba(0,0,0,0.12)' },
  { match: /rgba\(255\s*,\s*255\s*,\s*255\s*,\s*0\.2\)/g, replace: 'rgba(0,0,0,0.16)' },
  { match: /rgba\(11\s*,\s*13\s*,\s*23\s*,/g, replace: 'rgba(240, 244, 248,' },
  { match: /rgba\(30\s*,\s*21\s*,\s*58\s*,/g, replace: 'rgba(255, 255, 255,' },
  { match: /#140A26/gi, replace: '#E2E8F0' },
  { match: /#241442/gi, replace: '#EDF2F7' },
  { match: /#1A0D36/gi, replace: '#E2E8F0' },
  { match: /#40E0D0/gi, replace: 'var(--secondary-accent)' },
  { match: /#8A2BE2/gi, replace: 'var(--primary-accent)' },
  { match: /#EE82EE/gi, replace: 'var(--tertiary-accent)' }
];

walk('./src', function(filePath) {
  if (filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
    // Skip the colors.css as we overwrite it entirely anyway
    if (filePath.includes('colors.css')) return;

    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    replacements.forEach(r => {
      // In JS, '#fff' will become 'var(--text-main)', which is structurally valid for React inline styles
      content = content.replace(r.match, r.replace);
    });

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Migrated:', filePath);
    }
  }
});

// Overwrite colors.css with Light Theme equivalent mapping
const colorsCSS = `:root {
  /* Astrological Light Theme */
  --bg-dark: #F7FAFC; /* Kept variable name for backward-compatibility but actual value is Light */
  --bg-card: rgba(255, 255, 255, 0.75);
  --bg-card-hover: rgba(255, 255, 255, 0.95);
  
  --primary-accent: #6B46C1;
  --secondary-accent: #319795; /* Teal-ish Cyan */
  --tertiary-accent: #D53F8C;
  
  --text-main: #1A202C;
  --text-muted: #4A5568;
  --text-accent: #2B6CB0;
  
  --neon-glow: 0 0 10px rgba(49, 151, 149, 0.2), 0 0 20px rgba(107, 70, 193, 0.15);
  --glass-border: 1px solid rgba(0, 0, 0, 0.08); /* Dark subtle border for light theme */
  --glass-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
}
`;

fs.writeFileSync('./src/theme/colors.css', colorsCSS, 'utf8');
console.log('Successfully wrote new colors.css config.');
