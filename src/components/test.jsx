import React, { useState, useEffect } from "react";

const lessons = [
  {
    id: 1,
    name: "ReactJS là gì? Tại sao nên học ReactJS",
  },
  {
    id: 2,
    name: "SPA, MPA là gì?",
  },
  {
    id: 3,
    name: "Arrow Function",
  },
];
export default function Test() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {
    const handleComment = ({ detail }) => {
      console.log(detail);
    };

    window.addEventListener(`lesson-${lessonId}`, handleComment);

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    };
  }, [lessonId]);

  return (
    <div>
      <ul>
        {lessons.map((lesson, i) => (
          <li
            key={lesson.id}
            style={{color: lessonId === lessonId ? 'red' : '#333'}}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
