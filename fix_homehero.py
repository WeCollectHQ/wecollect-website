import re

with open('components/home/hero/HomeHero.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'mb-[37.89px] md:mb-35.5 w-full max-w-200',
    'w-full max-w-200'
)

with open('components/home/hero/HomeHero.tsx', 'w') as f:
    f.write(content)
