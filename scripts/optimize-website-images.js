#!/usr/bin/env node
const sharp = require('sharp')
const path = require('path')

const publicDir = path.join(process.cwd(), 'public')

const imagesToOptimize = [
  { input: 'amanicentre.png', output: 'community-organization-website' },
  { input: 'gymnwebsite.png', output: 'fitness-gym-coach-website' },
  { input: 'womd.png', output: 'domain-registration-website' }
]

const sizes = [640, 828, 1200]

async function optimizeWebsiteImages() {
  console.log('🖼️  Optimizing website screenshots...\n')

  for (const img of imagesToOptimize) {
    const inputPath = path.join(publicDir, img.input)
    const baseName = img.output

    try {
      // Generate WebP (high quality for screenshots)
      const webpPath = path.join(publicDir, `${baseName}.webp`)
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(webpPath)
      console.log(`✓ Created ${baseName}.webp`)

      // Generate AVIF (better compression)
      const avifPath = path.join(publicDir, `${baseName}.avif`)
      await sharp(inputPath)
        .avif({ quality: 75 })
        .toFile(avifPath)
      console.log(`✓ Created ${baseName}.avif`)

      // Generate responsive sizes
      const metadata = await sharp(inputPath).metadata()
      for (const size of sizes) {
        if (size < metadata.width) {
          const responsivePath = path.join(publicDir, `${baseName}-${size}w.webp`)
          await sharp(inputPath)
            .resize(size, null, { withoutEnlargement: true })
            .webp({ quality: 85 })
            .toFile(responsivePath)
          console.log(`✓ Created ${baseName}-${size}w.webp`)
        }
      }

      // Keep original as JPG for fallback
      const jpgPath = path.join(publicDir, `${baseName}.jpg`)
      await sharp(inputPath)
        .jpeg({ quality: 85 })
        .toFile(jpgPath)
      console.log(`✓ Created ${baseName}.jpg`)

      console.log('')
    } catch (err) {
      console.error(`✗ Error processing ${img.input}:`, err.message)
    }
  }

  console.log('✅ Website image optimization complete!')
}

optimizeWebsiteImages()
