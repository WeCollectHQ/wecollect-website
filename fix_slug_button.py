import re

with open('app/blog/[slug]/page.tsx', 'r') as f:
    content = f.read()

# Replace the newsletter subscribe button
old_button = """                <button 
                  type="button"
                  className="bg-[#4B4BDB] text-white px-5 py-2 font-medium text-[13px] hover:bg-[#3838C5] transition-colors"
                >
                  Subscribe
                </button>"""

new_button = """                <Button 
                  type="button"
                  variant="primary"
                  className="!px-5 !py-2 !h-auto !text-[13px]"
                >
                  Subscribe
                </Button>"""

content = content.replace(old_button, new_button)

with open('app/blog/[slug]/page.tsx', 'w') as f:
    f.write(content)
