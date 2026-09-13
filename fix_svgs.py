import re

svgs_to_add = """

export const ArrowLeftIcon = ({ className = "" }: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12.5 4.5L7 10L12.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ArrowRightIcon = ({ className = "" }: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M7.5 4.5L13 10L7.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const ChevronLeftIcon = ({ className = "" }: IconProps) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 18L9 12L15 6" />
  </svg>
);
"""

# Append to assets/svgs/index.tsx
with open('assets/svgs/index.tsx', 'r') as f:
    index_content = f.read()

if 'export const ArrowLeftIcon' not in index_content:
    with open('assets/svgs/index.tsx', 'a') as f:
        f.write(svgs_to_add)

# Clean app/blog/[slug]/page.tsx
with open('app/blog/[slug]/page.tsx', 'r') as f:
    content = f.read()

content = re.sub(r'function ChevronLeftIcon\(\) \{[\s\S]*?</svg>\s*\n\}', '', content)
content = re.sub(r'\n+', '\n', content)

with open('app/blog/[slug]/page.tsx', 'w') as f:
    f.write(content)
