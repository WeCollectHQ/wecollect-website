import re

with open('components/blog/BlogList.tsx', 'r') as f:
    content = f.read()

old_button = """            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-6 text-[#4B4BDB] font-semibold text-[14px] hover:underline"
            >
              Clear all filters
            </button>"""

new_button = """            <Button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              variant="ghost"
              className="mt-6 !text-[14px] hover:underline"
            >
              Clear all filters
            </Button>"""

content = content.replace(old_button, new_button)

with open('components/blog/BlogList.tsx', 'w') as f:
    f.write(content)
