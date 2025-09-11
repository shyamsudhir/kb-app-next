// add-image-import-specific.js
const fs = require('fs');
const path = require('path');

// List of files that need Image import
const filesToFix = [
  './src/app/getting_started/page.js',
  './src/app/not-found.js',
  './src/components/GettingStarted/GettingStarted.js',
  './src/components/GettingStarted/page.js',
  './src/components/Ticket/Ticket.js',
  './src/components/Ticket/TicketPriority.js',
  './src/components/TopMenu.js'
];

// Function to add Image import to a specific file
function addImageImport(filePath) {
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Check if file already has Image import
    if (content.includes('import Image') || content.includes('from \'next/image\'')) {
      console.log(`Image import already exists in: ${filePath}`);
      return false;
    }

    // Add import after the first line (usually React import)
    const lines = content.split('\n');
    let importAdded = false;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes('import ') && !lines[i].includes('from \'next/image\'')) {
        // Add Image import after this line
        lines.splice(i + 1, 0, 'import Image from \'next/image\';');
        importAdded = true;
        break;
      }
    }

    // If no import line found, add at the top
    if (!importAdded) {
      lines.unshift('import Image from \'next/image\';');
    }

    content = lines.join('\n');

    // Write the fixed content back to the file
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Added Image import to: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix img tags in specific files
function fixImgTags(filePath) {
  try {
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace img tags with Image components
    content = content.replace(
      /<img\s+([^>]*)\s*\/?>/g,
      (match, attributes) => {
        // Extract src, alt, and class from attributes
        const srcMatch = attributes.match(/src=(["'])(.*?)\1/);
        const altMatch = attributes.match(/alt=(["'])(.*?)\1/);
        const classMatch = attributes.match(/class=(["'])(.*?)\1/) || 
                          attributes.match(/className=(["'])(.*?)\1/);
        
        const src = srcMatch ? srcMatch[2] : '';
        const alt = altMatch ? altMatch[2] : 'Image';
        const className = classMatch ? classMatch[2] : '';
        
        // Skip if it's already an Image component or doesn't have src
        if (match.includes('Image') || !src) return match;
        
        // Return Next.js Image component
        return `<Image src="${src}" alt="${alt}" className="${className}" width={500} height={300} />`;
      }
    );

    // Add Image import if we've replaced any img tags
    if (content !== originalContent && content.includes('<Image') && !content.includes('import Image')) {
      const lines = content.split('\n');
      let importAdded = false;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('import ') && !lines[i].includes('from \'next/image\'')) {
          lines.splice(i + 1, 0, 'import Image from \'next/image\';');
          importAdded = true;
          break;
        }
      }
      
      if (!importAdded) {
        lines.unshift('import Image from \'next/image\';');
      }
      
      content = lines.join('\n');
    }

    // Write the fixed content back to the file
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed img tags in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
if (require.main === module) {
  console.log('Fixing Image imports in specific files...');
  
  let fixedCount = 0;
  
  // Fix files that need Image import
  filesToFix.forEach(filePath => {
    if (addImageImport(filePath)) {
      fixedCount++;
    }
  });
  
  // Fix files with img tags
  const imgFiles = [
    './src/components/Admin/BusinessHours.js',
    './src/components/Admin/CallRoute.js'
  ];
  
  imgFiles.forEach(filePath => {
    if (fixImgTags(filePath)) {
      fixedCount++;
    }
  });
  
  console.log(`\nFixed ${fixedCount} files.`);
  console.log('\nNote: SidemenuBkp.js has a parsing error that needs manual fixing.');
}

module.exports = { addImageImport, fixImgTags };