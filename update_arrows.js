const fs = require('fs');
const files = [
  'src/app/nri-services/page.tsx',
  'src/app/recovery-of-shares/page.tsx',
  'src/app/testimonial/landingtestimonial.tsx',
  'src/app/landingtestimonial2/page.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Replace type_of_unclaimed_investments select
  content = content.replace(/<select\s+id="([^"]+)"\s+name="type_of_unclaimed_investments"\s+className="([^"]*)cursor-pointer"\s+required\s*>([\s\S]*?)<\/select>/g, (match, id, className, inner) => {
    return `<div className="relative">
                      <select
                        id="${id}"
                        name="type_of_unclaimed_investments"
                        className="${className}appearance-none pr-10 cursor-pointer"
                        required
                      >
                        ${inner.trim()}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>`;
  });

  // Replace preferred_callback_time select
  content = content.replace(/<select\s+id="([^"]+)"\s+name="preferred_callback_time"\s+className="([^"]*)cursor-pointer"\s+required\s*>([\s\S]*?)<\/select>/g, (match, id, className, inner) => {
    return `<div className="relative">
                      <select
                        id="${id}"
                        name="preferred_callback_time"
                        className="${className}appearance-none pr-10 cursor-pointer"
                        required
                      >
                        ${inner.trim()}
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated', file);
  } else {
    console.log('No changes in', file);
  }
}
