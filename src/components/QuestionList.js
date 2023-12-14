import React, {useState, useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([])

  useEffect(()=>{
  fetch("http://localhost:4000/questions")
  .then((r)=>r.json())
  .then((fetchedQuestions)=>setQuestions(fetchedQuestions))
  },[])
  
  function handleDeletedQuestion(question){
    const updatedQuestions = questions.filter((q)=> question.id !== q.id)
    console.log(updatedQuestions)
    setQuestions(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question,index)=>{
          return <QuestionItem question={question} key={index} onDeletedQuestion={handleDeletedQuestion}/>
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
