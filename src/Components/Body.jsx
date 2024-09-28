import React from 'react'
import { useState } from 'react'

const Body = () => {


const questions = [
    
    {
      text: "Is it cold outside ?",
      options: ["Yes", "No", "Can't really say"],
      correctAnswer: "Yes"
    },
    {
      text: "Web3bridge is located at ?",
      options: ["Kano", "Agege", "Ikorodu"],
      correctAnswer: "Ikorodu"
    },
    {
      text: "When was the last Web3bridge Conference ?",
      options: ["January 2023", "September 2024", "August 2024"],
      correctAnswer: "September 2024"
    },
    {
        text: "CohortXI of Web3bridge commenced when ?",
        options: ["January 2024", "September 2024", "August 2024"],
        correctAnswer: "August 2024"
      },
  ];

  const [question, setQuestion] = useState(0); // Track current question index
  const [answers, setAnswers] = useState(Array(questions.length).fill(null)); // Store user's selected answers
  const [isDone, setIsDone] = useState(false);

  // Handle answer selection
  const handleAnswerSelect = (answer) => {
    const newAnswers = [...answers];
    newAnswers[question] = answer;
    setAnswers(newAnswers);
  };

  // Calculate score at the end of the quiz
  const calculateScore = () => {
    return answers.filter((answer, index) => answer === questions[index].correctAnswer).length;
  };

  // Move to the next question
  const handleNext = () => {
    if (question < questions.length - 1) {
      setQuestion(question + 1);
    } else {
      setIsDone(true);
    }
  };

  // Move to the previous question
  const handlePrevious = () => {
    if (question > 0) {
      setQuestion(question - 1);
    }
  };

  return (
    
    <div className=' w-125  mx-auto relative mt-2 rounded-2 text-center  bg-white shadow-md p-4 '>
   {isDone ? (
        <div>
          <h2>Your score: {calculateScore()} out of {questions.length}</h2>
        </div>
      ) : (
        <div>
          <h3 className='mb-3'>{questions[question].text}</h3>
          {questions[question].options.map(option => (
            <label className='mr-3  ' key={option}>
              <input
                type="radio"
                name={`question-${question}`}
                value={option}
                checked={answers[question] === option}
                onChange={() => handleAnswerSelect(option)}
              />
              {option}
            </label>
          ))}

          <div className='mt-3 '>
            <button className='mr-7  ' onClick={handlePrevious} disabled={question === 0}>
              Previous
            </button>
            <button onClick={handleNext}>
              {question < questions.length - 1 ? 'Next' : 'Submit'}
            </button>
          </div>
        </div>
      )} 
        
    </div>
  )
  
}

export default Body