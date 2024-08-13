'use client';

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PromptCard from './PromptCard';


const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}  
    </div>
  )
}
const Feed = () => {
  const [searchText, setsearchText] = useState('');
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const handleSearchChange = (e) => {
    setsearchText(e.target.value);
  }
  const fetchPosts = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/prompt`);
        if (!response.ok){
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    };
  }

  useEffect(() => {
    fetchPosts();
  }, [router.asPath]); // Refetch posts when the route changes

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch('/api/prompt');
  //     const data = await response.json();
  //     setPosts(data);
  //   }
  //   fetchPosts();
  // }, [])
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type="text" 
          placeholder='Search for a tag or username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      <PromptCardList 
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}
export default Feed;