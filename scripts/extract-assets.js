import sharp from 'sharp';
import fs from 'fs';

async function main() {
  const mockupPath = '/Users/kiran/Desktop/Sri Parinithee Real Estate Website Mockup.png';
  const logoPath = '/Users/kiran/Desktop/Untitled Design (14).png';

  console.log('Processing official logo...');
  await sharp(logoPath)
    .trim()
    .toFile('public/brand-logo.png');

  fs.copyFileSync('public/brand-logo.png', 'public/logo-icon.png');
  console.log('Saved trimmed brand-logo.png');

  // Exact crop for entrance arch with zero white border:
  await sharp(mockupPath)
    .extract({ left: 211, top: 309, width: 168, height: 98 })
    .resize(1200, null, { kernel: sharp.kernel.lanczos3 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/images/entrance-arch.jpg');
  console.log('Saved clean entrance-arch.jpg');

  // Exact crop for Our Journey building with zero white border:
  await sharp(mockupPath)
    .extract({ left: 612, top: 143, width: 172, height: 83 })
    .resize(1200, null, { kernel: sharp.kernel.lanczos3 })
    .jpeg({ quality: 95 })
    .toFile('public/assets/images/our-journey.jpg');
  console.log('Saved clean our-journey.jpg');
}

main().catch(console.error);

