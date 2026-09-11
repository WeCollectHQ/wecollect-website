import re

with open('components/blog/BlogList.tsx', 'r') as f:
    content = f.read()

# 1. Add Arrow icons and replace Chevron imports
icons_def = """
function ArrowLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5 4.5L7 10L12.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 4.5L13 10L7.5 15.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
"""
# Assuming the file has some place after imports to put this
content = content.replace('export function BlogList', icons_def + '\nexport function BlogList')

# Remove ChevronLeft/Right from imports
content = re.sub(r',\s*ChevronLeft\s*,', ',', content)
content = re.sub(r',\s*ChevronRight\s*,', ',', content)
content = re.sub(r'ChevronLeft\s*,', '', content)
content = re.sub(r',\s*ChevronRight', '', content)

# 2. Update Search button to follow Footer (use size instead of !h-auto !py-2.5)
old_search_btn = """            <Button
              type="submit"
              variant="primary"
              className="!px-8 !py-2.5 !h-auto !text-[14px]"
              icon={<SearchIcon />}
            >
              Search
            </Button>"""
new_search_btn = """            <Button
              type="submit"
              variant="primary"
              size="sm"
              className="px-6"
              icon={<SearchIcon />}
            >
              Search
            </Button>"""
content = content.replace(old_search_btn, new_search_btn)

# 3. Add cursor-pointer to tabs
old_tab_class = r'className={`py-3.5 text-\[12px\] font-medium text-center transition-colors border-x lg:border-none border-\[\#E9E9EF\] \$\{'
new_tab_class = r'className={`cursor-pointer py-3.5 text-[12px] font-medium text-center transition-colors border-x lg:border-none border-[#E9E9EF] ${'
content = re.sub(old_tab_class, new_tab_class, content)

# 4. Update Pagination Left button
old_left_btn = r'<button \s*onClick=\{\(\) => setCurrentPage\(p => Math\.max\(1, p - 1\)\)\}\s*disabled=\{currentPage === 1\}\s*className=\{`flex h-10 w-10 items-center justify-center \$\{currentPage === 1 \? \'bg-\[\#B9B9CC\] cursor-not-allowed\' : \'bg-\[\#4B4BDB\] hover:bg-\[\#3838C5\] transition-colors\'\} text-white`\}\s*>\s*<ChevronLeft />\s*</button>'
new_left_btn = """            <button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-9 w-9 items-center justify-center text-white transition-colors cursor-pointer bg-[#4B4BDB] hover:bg-[#3838C5] disabled:cursor-not-allowed disabled:bg-[#B9B9CC] disabled:hover:bg-[#B9B9CC]"
            >
              <ArrowLeftIcon />
            </button>"""
content = re.sub(old_left_btn, new_left_btn, content, flags=re.DOTALL)

# 5. Update Pagination Right button
old_right_btn = r'<button \s*onClick=\{\(\) => setCurrentPage\(p => Math\.min\(totalPages, p \+ 1\)\)\}\s*disabled=\{currentPage === totalPages\}\s*className=\{`flex h-10 w-10 items-center justify-center \$\{currentPage === totalPages \? \'bg-\[\#B9B9CC\] cursor-not-allowed\' : \'bg-\[\#4B4BDB\] hover:bg-\[\#3838C5\] transition-colors\'\} text-white`\}\s*>\s*<ChevronRight />\s*</button>'
new_right_btn = """            <button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-9 w-9 items-center justify-center text-white transition-colors cursor-pointer bg-[#4B4BDB] hover:bg-[#3838C5] disabled:cursor-not-allowed disabled:bg-[#B9B9CC] disabled:hover:bg-[#B9B9CC]"
            >
              <ArrowRightIcon />
            </button>"""
content = re.sub(old_right_btn, new_right_btn, content, flags=re.DOTALL)

with open('components/blog/BlogList.tsx', 'w') as f:
    f.write(content)
