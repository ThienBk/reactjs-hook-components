import React, { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums"];
export default function UseEffect_1() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");

  const [showGoToTop, setShowGoToTop] = useState(false)
  console.log(type);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);
  useEffect(() =>{
    const handleScroll = () =>{
      if(window.scrollY >= 200){
        //show
        setShowGoToTop(true)
      }else {
        //hide
        setShowGoToTop(false)
      }

      //setShowGoToTop(window.scrollY >= 200) => boolean
    }
    window.addEventListener('scroll', handleScroll)

    //clean up function
    return () => {
    window.removeEventListener('scroll', handleScroll)

      console.log('Unmounting...');
    }
  })
  return (
    <div>
      {tabs.map((tab) => (
        <button
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
          onClick={() => setType(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map((post, i) => (
          <li key={post.id}> {post.title || post.name} </li>
        ))}
      </ul>

      {showGoToTop && (
        <button style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
        }}>
          Go to Top
        </button>
      )}
    </div>
  );
}
