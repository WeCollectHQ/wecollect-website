import re

with open('components/blog/BlogList.tsx', 'r') as f:
    content = f.read()

# Add Button import
content = content.replace(
    'import { Container } from "@/components/common/Container";',
    'import { Container } from "@/components/common/Container";\nimport { Button } from "@/components/common/Button";'
)

# Replace the search button
old_button = """            <button
              type="submit"
              className="bg-[#4B4BDB] text-white px-8 py-2.5 text-[14px] font-medium hover:bg-[#3838C5] transition-colors flex items-center gap-2"
            >
              <SearchIcon />
              Search
            </button>"""

new_button = """            <Button
              type="submit"
              variant="primary"
              className="!px-8 !py-2.5 !h-auto !text-[14px]"
              icon={<SearchIcon />}
            >
              Search
            </Button>"""

content = content.replace(old_button, new_button)

with open('components/blog/BlogList.tsx', 'w') as f:
    f.write(content)
