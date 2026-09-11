import re

with open('components/blog/BlogList.tsx', 'r') as f:
    content = f.read()

# Replace ChevronLeft block
content = re.sub(
    r'<button[^>]*onClick=\{\(\) => setCurrentPage\(\(p\) => Math\.max\(1, p - 1\)\)\}[^>]*>.*?<ChevronLeft />.*?</button>',
    """<button 
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-9 w-9 items-center justify-center text-white transition-colors cursor-pointer bg-[#4B4BDB] hover:bg-[#3838C5] disabled:cursor-not-allowed disabled:bg-[#B9B9CC] disabled:hover:bg-[#B9B9CC]"
            >
              <ArrowLeftIcon />
            </button>""",
    content,
    flags=re.DOTALL
)

# Replace ChevronRight block
content = re.sub(
    r'<button[^>]*onClick=\{\(\) => setCurrentPage\(\(p\) => Math\.min\(totalPages, p \+ 1\)\)\}[^>]*>.*?<ChevronRight />.*?</button>',
    """<button 
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-9 w-9 items-center justify-center text-white transition-colors cursor-pointer bg-[#4B4BDB] hover:bg-[#3838C5] disabled:cursor-not-allowed disabled:bg-[#B9B9CC] disabled:hover:bg-[#B9B9CC]"
            >
              <ArrowRightIcon />
            </button>""",
    content,
    flags=re.DOTALL
)

with open('components/blog/BlogList.tsx', 'w') as f:
    f.write(content)
