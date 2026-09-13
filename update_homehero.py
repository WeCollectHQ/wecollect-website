import re

with open('components/home/hero/HomeHero.tsx', 'r') as f:
    content = f.read()

# Replace imports
content = content.replace('import HomeHeroPhoneImage from "@/assets/pngs/home-hero-phone.webp";\n', '')
content = content.replace('import { HeroAnimation } from "./HeroAnimation";\n', '')
content = content.replace('import HomeHeroBgImage from "@/assets/pngs/home-hero-bg-image.webp";\n', 'import HomeHeroBgImage from "@/assets/pngs/home-hero-bg-image.webp";\nimport HomeHeroImage from "@/assets/pngs/home-hero-image.webp";\n')


# Replace the block
old_block = """<div className="relative mx-auto mt-15 md:mt-28 lg:mt-24 mb-[37.89px] md:mb-35.5 w-full max-w-200">
          {/* Lottie dashboard animation */}
          <HeroAnimation />

          {/* Phone overlay — bottom-right, matches Figma */}
          <div className="absolute bottom-5 md:bottom-12 right-0 translate-y-[12%] translate-x-[4%] w-[22%] md:w-[21%]">
            <Image
              src={HomeHeroPhoneImage}
              alt="WeCollect mobile app"
              className="h-auto w-full drop-shadow-2xl"
              priority
            />
          </div>
        </div>"""

new_block = """<div className="relative mx-auto mt-15 md:mt-28 lg:mt-24 mb-[37.89px] md:mb-35.5 w-full max-w-200">
          <Image
            src={HomeHeroImage}
            alt="WeCollect platform dashboard and mobile app"
            className="h-auto w-full"
            priority
          />
        </div>"""

content = content.replace(old_block, new_block)

with open('components/home/hero/HomeHero.tsx', 'w') as f:
    f.write(content)

