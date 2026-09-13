with open('app/blog/[slug]/page.tsx', 'r') as f:
    content = f.read()

chevron_text = """function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18L9 12L15 6" />
    </svg>
  );
}"""

content = content.replace(chevron_text, "")

with open('app/blog/[slug]/page.tsx', 'w') as f:
    f.write(content)
