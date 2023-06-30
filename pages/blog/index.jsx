import React from 'react'
import BlogHero from '../../components/blogs/BlogHero'
import Footer from '../../components/LandingPage/Footer'
import AllBlogs from '../../components/blogs/AllBlogs'

const index = () => {
  return (
      <div className='w-full flex flex-col'>
          <BlogHero />
          <AllBlogs />
          <Footer />
    </div>
  )
}

export default index