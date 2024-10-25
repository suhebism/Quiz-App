// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import quizData from "../../../../../data/quizData"; // Adjust the path as necessary
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Scale, X, Info, MoveLeft, Link } from "lucide-react";
// import congratulations from '@/public/animation/congratulations.json'
// import loader from '@/public/animation/loader.json'
// import LottieAnimations from "@/components/LottieAnimations";
// import Image from "next/image";
// import bird from '@/public/img/bird.png'
// import Loading from "@/components/Loading";
// import ProgressBar from "@/components/ProgressBar";

// export default function QuizPage() {
//   const pathname = usePathname(); // Get the current pathname
//   const router = useRouter(); // Initialize the router
//   const [subject, setSubject] = useState(null);
//   const [chapter, setChapter] = useState(null);
//   const [level, setLevel] = useState(null);
//   const [loadingSubject, setLoadingSubject] = useState(true);
//   const [loadingChapter, setLoadingChapter] = useState(true);
//   const [loadingLevel, setLoadingLevel] = useState(true);
//   const [prompt, setPrompt] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question index
//   const [selectedAnswer, setSelectedAnswer] = useState(null); // Track selected answer
//   const [score, setScore] = useState(0); // Track score
//   const [showResult, setShowResult] = useState(false); // Show results at the end
//   const [info, setInfo] = useState(false);

//   useEffect(() => {
//     const segments = pathname.split("/").filter(Boolean); // Split the pathname and remove empty segments
//     const subjectId = segments[1]; // subjectId is at index 1
//     const chapterId = segments[2]; // chapterId is at index 2
//     const levelId = segments[3]; // levelId is at index 3

//     // Find the subject based on subjectId
//     if (subjectId) {
//       const foundSubject = quizData.subjects.find(
//         (subj) => subj.id === subjectId
//       );
//       if (foundSubject) {
//         setSubject(foundSubject);
//         setLoadingSubject(false);
//       } else {
//         console.warn("No subject found for ID:", subjectId);
//         setLoadingSubject(false);
//       }
//     }
//   }, [pathname]);

//   useEffect(() => {
//     if (subject && pathname) {
//       const segments = pathname.split("/").filter(Boolean);
//       const chapterId = segments[2];

//       // Find the chapter based on chapterId
//       if (chapterId) {
//         const foundChapter = subject.chapters.find(
//           (chap) => chap.id === chapterId
//         );
//         if (foundChapter) {
//           setChapter(foundChapter);
//           setLoadingChapter(false);
//         } else {
//           console.warn("No chapter found for ID:", chapterId);
//           setLoadingChapter(false);
//         }
//       }
//     }
//   }, [subject, pathname]);

//   useEffect(() => {
//     if (chapter && pathname) {
//       const segments = pathname.split("/").filter(Boolean);
//       const levelId = segments[3];

//       // Find the level based on levelId
//       if (levelId) {
//         const foundLevel = chapter.levels.find((lvl) => lvl.id === levelId);
//         if (foundLevel) {
//           setLevel(foundLevel);
//           setLoadingLevel(false);
//         } else {
//           console.warn("No level found for ID:", levelId);
//           setLoadingLevel(false);
//         }
//       }
//     }
//   }, [chapter, pathname]);

//   const handleAnswerSubmit = () => {
//     const currentQuestion = level?.questions?.[currentQuestionIndex];

//     if (!currentQuestion) {
//       console.error("Current question is undefined.");
//       return;
//     }

//     // Capture the selected answer text based on the selected index
//     const selectedAnswerText = currentQuestion.options[selectedAnswer];

//     // Debugging: Log selected answer and correct answer for comparison
//     console.log("Selected Answer:", selectedAnswerText);
//     console.log("Correct Answer:", currentQuestion.correctAnswer);

//     if (!selectedAnswerText) {
//       alert("Please select an answer");
//       return;
//     }

//     // Compare the selected answer with the correctAnswer string
//     if (selectedAnswerText === currentQuestion.answer) {
//       setScore(score + 1); // Increase score if correct

//       if (currentQuestionIndex < level.questions.length - 1) {
//         // Move to the next question
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//         setSelectedAnswer(null); // Reset selected answer for the next question
//       } else {
//         setShowResult(true); // Show the result if it's the last question
//       }
//     } else {
//       alert("Wrong answer! Try again.");
//     }
//   };

//   const handleNextLevel = () => {
//     // Find the index of the current level
//     const currentLevelIndex = chapter.levels.findIndex(
//       (lvl) => lvl.id === level.id
//     );

//     // Log current level and index for debugging
//     console.log("Current Level ID:", level.id);
//     console.log("Current Level Index:", currentLevelIndex);
//     console.log("Total Levels in Chapter:", chapter.levels.length);

//     // Check if there's a next level
//     if (currentLevelIndex < chapter.levels.length - 1) {
//       const nextLevel = chapter.levels[currentLevelIndex + 1];
//       console.log("Next Level ID:", nextLevel.id); // Log the next level's ID
//       // Navigate to the next level's URL
//       router.push(`/subjects/${subject.id}/${chapter.id}/${nextLevel.id}`);
//     } else {
//       // If there are no more levels, navigate back or display a message
//       alert("You've completed all levels in this chapter!");
//       router.push(`/subjects/`);
//       // Optionally, navigate back to the chapter or subject
//       // router.push(`/${subject.id}/${chapter.id}`);
//     }
//   };

//   if (loadingSubject || loadingChapter || loadingLevel) {
//     return <div className="flex items-center justify-center h-screen">
//     <Loading/>
//   </div>;
//   }

//   if (!subject) {
//     return <div>Subject not found!</div>;
//   }

//   if (!chapter) {
//     return <div>Chapter not found!</div>;
//   }

//   if (!level) {
//     return <div>Level not found!</div>;
//   }

//   const promptToClose = () => {
//     setPrompt(true);
//   };
//   const confirmExit = (choice) => {
//     if (choice === "yes") {
//       router.push("/");
//     } else {
//       setPrompt(false);
//     }
//   };
//   const infoToClose =()=>{
//     setInfo(false);
//   }
//   const infoToOPen =()=>{
//     setInfo(true);
//   }
//   return (
//     <motion.div
//     initial= { {opacity: 0} }
//     animate={{ opacity: 1 }}
//     exit= { {opacity: 0} }
//     transition= { {ease: "easeInOut", duration: 0.5} }

//       className="flex flex-col items-center h-screen pt-5 pb-10 justify-between"
//     >
//       <X
//         className="fixed top-5 left-5 text-white cursor-pointer"
//         onClick={promptToClose}
//       />
//       <Info className="fixed top-5 right-5 text-white cursor-pointer"
//         onClick={infoToOPen}/>
//         <AnimatePresence>
//         {info && (
//           <motion.div
//           initial={{ y: 600 }}
//           animate={{ y: 0 }}
//           exit={{ y: 600 }} // Exit animation
//           transition={{ duration: 0.2, ease: "easeInOut" }}
//           className="fixed px-5 pt-5 bottom-0 h-screen w-screen bg-[#161515] z-50">
//             <MoveLeft onClick={infoToClose} color="white" size={28} className="cursor-pointer"/>
//             <div className="flex items-center justify-between">
//               <h1 className="text-white">
//                 {subject.name} - {chapter.name}
//               </h1>
//               <h1 className="text-white text-xs font-light">
//                 {level.name}
//               </h1>

//             </div>
//           </motion.div>
//         )}
//         </AnimatePresence>
//       <AnimatePresence>
//         {prompt && (
//           <div
//             className="fixed z-50 h-screen w-screen bg-opacity-50 backdrop-blur-lg  text-white flex items-center justify-center transition ease-in-out delay-500 duration-500"
//             onClick={() => setPrompt(false)} // Close modal when clicking outside
//           >
//             <motion.div
//               initial={{ y: -200 }}
//               animate={{ y: 0 }}
//               exit={{ y: -200 }} // Exit animation
//               transition={{ duration: 0.2, ease: "easeInOut" }} // Adjust duration for exit animation
//               className="absolute -top-5 h-[160px] w-screen bg-[#75BC7B] flex flex-col items-center justify-around rounded-b-3xl"
//               onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the backdrop
//             >
//               <h1 className="font-semibold text-lg text-black">
//                 Do you really want to exit?
//               </h1>
//               <div className="flex gap-5">
//                 <button
//                   className="w-28 h-10 bg-white text-black font-bold text-lg rounded-full"
//                   onClick={() => confirmExit("yes")}
//                 >
//                   Yes
//                 </button>
//                 <button
//                   className="w-28 h-10 bg-black text-white font-bold text-lg rounded-full"
//                   onClick={() => confirmExit("no")}
//                 >
//                   No
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//       {showResult ? (
//         <>
//           <div className="text-center flex flex-col justify-center items-center ">
//             <h2 className="text-white font-bold text-lg">Quiz Complete!</h2>
//             <p className="text-white font-bold text-lg m-auto">
//               Your score is: {score} / {level.questions.length}
//             </p>
//           </div>
//           <div className="flex flex-col items-center -mt-10">
//             <LottieAnimations animationData={congratulations} />
//             <h1 className="text-white font-bold text-lg -mt-20">Congatulations</h1>
//           </div>

//           <button onClick={handleNextLevel} className="bottom-5 w-[350px] h-14 font-bold rounded-full bg-green-500 text-white" >Next Level</button>{" "}
//           {/* Call handleNextLevel on click */}
//         </>
//       ) : (
//         <>
//         <div className="flex flex-col items-center justify-center gap-8 h-full text-center">
//            <ProgressBar
//       currentQuestionIndex={currentQuestionIndex}
//       totalQuestions={level.questions.length}
//     />
//           {/* Show current question */}
//           <h2 className="text-white text-xl text-center font-semibold h-10">
//             Question {currentQuestionIndex + 1} of {level.questions.length}
//           </h2>
//           <p className="text-lg font-bold text-white">{level.questions[currentQuestionIndex].question}</p>
//           <Image src={bird} />
//           {/* Render options for the current question */}
//           <ul className="flex flex-col gap-5">
//             {level.questions[currentQuestionIndex].options.map(
//               (option, index) => (
//                 <li key={index} className="w-[350px] h-14">
//                   <label
//                     className={`flex items-center justify-between py-3 px-5 w-full h-14 border-[1px] rounded-full text-white focus:outline-none transition-all duration-300 cursor-pointer ${
//                       selectedAnswer === index
//                         ? "border-green-400 text-green-400 border-2 transition-all duration-300"
//                         : "border-gray-500 text-gray-500"
//                     }`}
//                     onClick={() => setSelectedAnswer(index)} // Handle selection on click
//                   >
//                     <input
//                       type="radio"
//                       name="answer"
//                       value={index}
//                       checked={selectedAnswer === index}
//                       onChange={() => setSelectedAnswer(index)}
//                       className="hidden" // Hide the radio input
//                     />
//                     <span className={`flex-grow text-lg  transition-all duration-300  ${
//                       selectedAnswer === index
//                         ? " text-green-400 font-bold"
//                         : "text-gray-500"
//                     }`}>{option}</span>
//                   </label>
//                 </li>
//               )
//             )}
//           </ul>

//           {/* Submit button */}
//           <button
//             className={`bottom-5 w-[350px] h-14 font-bold rounded-full bg-green-500 text-white transition-all duration-300 ${
//               selectedAnswer === null
//                 ? "opacity-50 cursor-not-allowed"
//                 : "opacity-100"
//             }`}
//             onClick={handleAnswerSubmit}
//             disabled={selectedAnswer === null}
//           >
//             Submit Answer
//           </button>
//         </div>
//         </>
//       )}
//     </motion.div>
//   );
// }

"use client";
import { usePathname, useRouter } from "next/navigation";
import quizData from "../../../../../data/quizData";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X,Check,CircleX } from "lucide-react";
import congratulations from "@/public/animation/congratulations.json";
import flash from "@/public/animation/flash.json";
import hooray from "@/public/animation/hooray.json";
import LottieAnimations from "@/components/LottieAnimations";
import Image from "next/image";
import bird from "@/public/img/bird.png";
import Loading from "@/components/Loading";
import ProgressBar from "@/components/ProgressBar";

export default function QuizPage() {
  const pathname = usePathname();
  const router = useRouter();
  const [subject, setSubject] = useState(null);
  const [chapter, setChapter] = useState(null);
  const [level, setLevel] = useState(null);
  const [loadingSubject, setLoadingSubject] = useState(true);
  const [loadingChapter, setLoadingChapter] = useState(true);
  const [loadingLevel, setLoadingLevel] = useState(true);
  const [prompt, setPrompt] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResultCard, setShowResultCard] = useState(false);
  const [info, setInfo] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showCompletionMessage, setShowCompletionMessage] = useState(false);
  const [finalMessage, setFinalMessage] = useState(false);
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    const subjectId = segments[1];
    const chapterId = segments[2];
    const levelId = segments[3];

    if (subjectId) {
      const foundSubject = quizData.subjects.find(
        (subj) => subj.id === subjectId
      );
      if (foundSubject) {
        setSubject(foundSubject);
        setLoadingSubject(false);
      } else {
        console.warn("No subject found for ID:", subjectId);
        setLoadingSubject(false);
      }
    }
  }, [pathname]);

  useEffect(() => {
    if (subject && pathname) {
      const segments = pathname.split("/").filter(Boolean);
      const chapterId = segments[2];

      if (chapterId) {
        const foundChapter = subject.chapters.find(
          (chap) => chap.id === chapterId
        );
        if (foundChapter) {
          setChapter(foundChapter);
          setLoadingChapter(false);
        } else {
          console.warn("No chapter found for ID:", chapterId);
          setLoadingChapter(false);
        }
      }
    }
  }, [subject, pathname]);

  useEffect(() => {
    if (chapter && pathname) {
      const segments = pathname.split("/").filter(Boolean);
      const levelId = segments[3];

      if (levelId) {
        const foundLevel = chapter.levels.find((lvl) => lvl.id === levelId);
        if (foundLevel) {
          setLevel(foundLevel);
          setLoadingLevel(false);
        } else {
          console.warn("No level found for ID:", levelId);
          setLoadingLevel(false);
        }
      }
    }
  }, [chapter, pathname]);

  const handleAnswerSubmit = () => {
    const currentQuestion = level?.questions?.[currentQuestionIndex];
    if (!currentQuestion) return;

    const selectedAnswerText = currentQuestion.options[selectedAnswer];
    if (!selectedAnswerText) {
      alert("Please select an answer");
      return;
    }

    const correct = selectedAnswerText === currentQuestion.answer;
    setIsCorrect(correct);
    setShowResultCard(true); // Show the result card


    const correctAnswerSound = new Audio("/sound/correctAnswer.mp3");
    
    const randomIndex = Math.floor(Math.random() * flashCardBg.length);
    setBgColor(flashCardBg[randomIndex]);

     if (correct) {
    correctAnswerSound.play(); // Play the correct answer sound
  } else {
    navigator.vibrate(200); // Vibrate the device for a wrong answer (200 milliseconds)
  }

    // Reset selected answer for the next question
    setSelectedAnswer(null);

    // Update score only for correct answers
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const levelCompletionSound = new Audio("/sound/levelCompletion.mp3");

    if (currentQuestionIndex < level.questions.length - 1) {
      // Move to the next question if there are more questions.
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // All questions answered, show the congratulatory message.
      setShowCompletionMessage(true);
      levelCompletionSound.play();
      // Check if all questions are answered and then set finalMessage if needed
      const segments = pathname.split("/").filter(Boolean);
      const subjectId = segments[1];
      const chapterId = segments[2];
      const nextLevelIndex = chapter.levels.findIndex((lvl) => lvl.id === level.id) + 1;
  
      if (nextLevelIndex >= chapter.levels.length) {
        // If all levels in the chapter are completed, set finalMessage to true.
        setFinalMessage(true);
        // alert("Congratulations! You have completed all levels in this chapter.");
      }
    }
    setShowResultCard(false); // Hide the result card after each question.
  };
  
  const levelCompletionSound = new Audio("/sound/levelCompletion.mp3");

  const handleNextLevel = () => {
    const segments = pathname.split("/").filter(Boolean);
    const subjectId = segments[1];
    const chapterId = segments[2];
    const nextLevelIndex =
      chapter.levels.findIndex((lvl) => lvl.id === level.id) + 1;
  
    if (nextLevelIndex < chapter.levels.length) {
      // Navigate to the next level when the user clicks the button.
      const nextLevelId = chapter.levels[nextLevelIndex].id;
      router.push(`/subjects/${subjectId}/${chapterId}/${nextLevelId}`);
  
      // Reset states for the next level.
      setCurrentQuestionIndex(0); // Reset question index for the next level.
      setScore(0); // Optionally, reset the score if needed.
      setShowCompletionMessage(false); // Hide the congratulatory message.
      setFinalMessage(false); // Reset finalMessage when moving to the next level.
    } else {
      // If all levels in the chapter are completed, show a final message.
      setFinalMessage(true);
      // alert("Congratulations! You have completed all levels in this chapter.");
      router.push('/subjects')
      // Optionally, navigate to a chapter summary or back to the chapter list.

    }
    // levelCompletionSound.play().catch((error) => {
    //   console.error("Failed to play level completion sound:", error);
    // });
  
  };

  
  const handleCancel = () => {
    setShowResultCard(false); // Hide the result card
  };

  if (loadingSubject || loadingChapter || loadingLevel) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loading />
      </div>
    );
  }

  if (!subject || !chapter || !level) {
    return <div>Content not found!</div>;
  }

  const promptToClose = () => setPrompt(true);
  const confirmExit = (choice) => {
    if (choice === "yes") {
      router.push("/");
    } else {
      setPrompt(false);
    }
  };

  const currentQuestion = level?.questions?.[currentQuestionIndex];
  const feedback = currentQuestion?.feedBack?.[0] || {
    forCorrect: "No feedback available",
    forWrong: "No feedback available",
  };

  const flashCardBg = [
    'bg-[#69B3B6]',
    'bg-[#7569B6]',
    'bg-[#899DD5]',
    'bg-[#FA8A5A]',
    'bg-[#4F74EE]',
  ];



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}
      className="flex flex-col items-center h-screen pt-5 pb-5 justify-between "
    >
      <div>
        <X
          className="fixed top-5 left-5  text-white cursor-pointer"
          onClick={promptToClose}
        />
      </div>
      <ProgressBar
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={level.questions.length}
      />
      <h2 className="text-white text-xl text-center font-semibold h-10">
        Question {currentQuestionIndex + 1} of {level.questions.length}
      </h2>
      <p className="text-lg font-bold text-white">
        {level.questions[currentQuestionIndex].question}
      </p>
      <Image src={bird} />
      <ul className="flex flex-col gap-5">
        {level.questions[currentQuestionIndex].options.map((option, index) => (
          <li key={index} className="w-[350px] h-14">
            <button
              onClick={() => setSelectedAnswer(index)}
              className={`w-full h-full rounded-full border-2 ${
                selectedAnswer === index
                  ? "border-green-500 text-green-500"
                  : "border-gray-500 text-gray-500 transition-all ease-in-out duration-300"
              } text-center flex items-center justify-center`}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleAnswerSubmit}
        className={`bottom-5 w-[350px] h-14 font-bold rounded-full ${
          selectedAnswer !== null
            ? "bg-green-500 text-white transition-all ease-in-out duration-300"
            : "bg-[#767676]  text-[#4d4d4d]"
        }`}
      >
        Submit
      </button>
      <AnimatePresence>
        {prompt && (
          <div
            className="fixed z-50 h-screen w-screen bg-opacity-50 backdrop-blur-lg  text-white flex items-center justify-center transition ease-in-out delay-500 duration-500"
            onClick={() => setPrompt(false)} // Close modal when clicking outside
          >
            <motion.div
              initial={{ y: -200 }}
              animate={{ y: 0 }}
              exit={{ y: -200 }} // Exit animation
              transition={{ duration: 0.2, ease: "easeInOut" }} // Adjust duration for exit animation
              className="absolute -top-5 h-[160px] w-full bg-[#75BC7B] flex flex-col items-center justify-around rounded-b-3xl"
              onClick={(e) => e.stopPropagation()} // Prevent click from propagating to the backdrop
            >
              <h1 className="font-semibold text-lg text-black">
                Do you really want to exit?
              </h1>
              <div className="flex gap-5">
                <button
                  className="w-32 h-12 bg-white text-black font-bold text-lg rounded-full"
                  onClick={() => confirmExit("yes")}
                >
                  Yes
                </button>
                <button
                  className="w-32 h-12 bg-black text-white font-bold text-lg rounded-full"
                  onClick={() => confirmExit("no")}
                >
                  No
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showResultCard && (
          <div className="fixed inset-0  backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-40">
            <motion.div
              className={` top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[400px]  shadow-lg  bg-[#69B683] flex flex-col items-center justify-around rounded-2xl p-5
`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }} // Exit animation
              transition={{ duration: 0.2, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-10 h-10 rounded-full  absolute top-5 left-5 ">
              <LottieAnimations animationData={flash} />

              </div>
              <div>
              {isCorrect ? (<Check className="text-white " strokeWidth={4} size={40} />):(<CircleX className="text-red-600" strokeWidth={3} size={40}/>)}
               
            </div>
              <span
                className={`text-lg font-bold ${
                  isCorrect ? "text-white" : "text-red-500"
                }`}
              >
                {isCorrect ? "Correct Answer!" : "Wrong Answer"}
              </span>
              <h1 className="font-semibold text-lg text-white text-center">
                {isCorrect ? feedback.forCorrect : feedback.forWrong}
              </h1>
              <div className="flex justify-around w-full mt-4 ">
                {isCorrect ? (
                  <button
                    className="w-full h-14 bg-black text-white font-bold text-lg rounded-full"
                    onClick={handleNextQuestion} // Proceed to next question
                  >
                    Next
                  </button>
                ):(
                  <button
                    onClick={handleCancel} // Hide the result card
                    className="w-full h-14 bg-black text-white font-bold text-lg rounded-full"
                  >
                    Try again
                  </button>
                )
                }
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showCompletionMessage && (
          <div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              className="w-[350px] h-[400px] bg-[#2D2A2B] flex flex-col items-center justify-around rounded-2xl shadow-lg p-4"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {finalMessage ? (
                <div className="flex flex-col items-center justify-center gap-5">
                  <LottieAnimations
                animationData={hooray}
                loop={true}
                className="-mt-10 w-20"
                style={{ width: 200, height: 200 }}
              />
              <h2 className="text-white font-bold text-xl -mt-10">
                Hooraayyy!
              </h2>
                
                <p className="text-white text-center my-1">
                 
               
                      You have completed all the levels. Go to next topic!
                   
                 
                </p>
                <div
                  className="w-36 h-14 flex items-center justify-center bg-[#75BC7B] text-white font-semibold text-lg rounded-full mt-"
                  onClick={handleNextLevel}
                >
                  Next Topic
                </div>
                </div>
              ):(
                <div className="flex flex-col items-center justify-center gap-5">
                  <LottieAnimations
                animationData={congratulations}
                loop={true}
                className="-mt-20"
              />
                 <h2 className="text-white font-bold text-xl -mt-20">
                Congratulations!
              </h2>
                <p className="text-white text-center my-1">
                 
               
                      You have completed this level. Get ready for the next
                      challenge!
                   
                 
                </p>
                <div
                  className="w-36 h-14 flex items-center justify-center bg-[#75BC7B] text-white font-semibold text-lg rounded-full mt-"
                  onClick={handleNextLevel}
                >
                  Next Level
                </div>
                </div>
              )}
              
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// "use client";
// import { usePathname, useRouter } from "next/navigation";
// import quizData from "../../../../../data/quizData";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Info, MoveLeft } from "lucide-react";
// import congratulations from '@/public/animation/congratulations.json';
// import LottieAnimations from "@/components/LottieAnimations";
// import Image from "next/image";
// import bird from '@/public/img/bird.png';
// import Loading from "@/components/Loading";
// import ProgressBar from "@/components/ProgressBar";

// export default function QuizPage() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const [subject, setSubject] = useState(null);
//   const [chapter, setChapter] = useState(null);
//   const [level, setLevel] = useState(null);
//   const [loadingSubject, setLoadingSubject] = useState(true);
//   const [loadingChapter, setLoadingChapter] = useState(true);
//   const [loadingLevel, setLoadingLevel] = useState(true);
//   const [prompt, setPrompt] = useState(false);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showResult, setShowResult] = useState(false);
//   const [info, setInfo] = useState(false);
//   const [flipped, setFlipped] = useState(false);
//   const [isCorrect, setIsCorrect] = useState(false);
//   const [showResultCard, setShowResultCard] = useState(false); // New state for showing the result card

//   useEffect(() => {
//     const segments = pathname.split("/").filter(Boolean);
//     const subjectId = segments[1];
//     const chapterId = segments[2];
//     const levelId = segments[3];

//     if (subjectId) {
//       const foundSubject = quizData.subjects.find(
//         (subj) => subj.id === subjectId
//       );
//       if (foundSubject) {
//         setSubject(foundSubject);
//         setLoadingSubject(false);
//       } else {
//         console.warn("No subject found for ID:", subjectId);
//         setLoadingSubject(false);
//       }
//     }
//   }, [pathname]);

//   useEffect(() => {
//     if (subject && pathname) {
//       const segments = pathname.split("/").filter(Boolean);
//       const chapterId = segments[2];

//       if (chapterId) {
//         const foundChapter = subject.chapters.find(
//           (chap) => chap.id === chapterId
//         );
//         if (foundChapter) {
//           setChapter(foundChapter);
//           setLoadingChapter(false);
//         } else {
//           console.warn("No chapter found for ID:", chapterId);
//           setLoadingChapter(false);
//         }
//       }
//     }
//   }, [subject, pathname]);

//   useEffect(() => {
//     if (chapter && pathname) {
//       const segments = pathname.split("/").filter(Boolean);
//       const levelId = segments[3];

//       if (levelId) {
//         const foundLevel = chapter.levels.find((lvl) => lvl.id === levelId);
//         if (foundLevel) {
//           setLevel(foundLevel);
//           setLoadingLevel(false);
//         } else {
//           console.warn("No level found for ID:", levelId);
//           setLoadingLevel(false);
//         }
//       }
//     }
//   }, [chapter, pathname]);

//   // const handleAnswerSubmit = () => {
//   //   const currentQuestion = level?.questions?.[currentQuestionIndex];
//   //   if (!currentQuestion) return;

//   //   const selectedAnswerText = currentQuestion.options[selectedAnswer];
//   //   if (!selectedAnswerText) {
//   //     alert("Please select an answer");
//   //     return;
//   //   }

//   //   const correct = selectedAnswerText === currentQuestion.answer;
//   //   setIsCorrect(correct);
//   //   setFlipped(true);

//   //   setTimeout(() => {
//   //     if (correct) {
//   //       setScore(score + 1);
//   //     }

//   //     if (currentQuestionIndex < level.questions.length - 1) {
//   //       setCurrentQuestionIndex(currentQuestionIndex + 1);
//   //     } else {
//   //       setShowResult(true);
//   //     }

//   //     setFlipped(false);
//   //     setSelectedAnswer(null);
//   //   }, 1500);
//   // };
//   const handleAnswerSubmit = () => {
//     const currentQuestion = level?.questions?.[currentQuestionIndex];
//     if (!currentQuestion) return;

//     const selectedAnswerText = currentQuestion.options[selectedAnswer];
//     if (!selectedAnswerText) {
//       alert("Please select an answer");
//       return;
//     }

//     const correct = selectedAnswerText === currentQuestion.answer;
//     setIsCorrect(correct);
//     setFlipped(true);
//     setShowResultCard(true); // Show the result card

//   //   setTimeout(() => {
//   //     if (correct) {
//   //       setScore(score + 1);

//   //       if (currentQuestionIndex < level.questions.length - 1) {
//   //         setCurrentQuestionIndex(currentQuestionIndex + 1);
//   //       } else {
//   //         setShowResult(true);
//   //       }
//   //     }

//   //     setFlipped(false);
//   //     setSelectedAnswer(null);
//   //   }, 1500);
//   // };
//   setTimeout(() => {
//     if (correct) {
//       setScore(score + 1);
//     }

//     // Do not change the question if the answer is incorrect
//     if (correct && currentQuestionIndex < level.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else if (!correct) {
//       // Reset selected answer for incorrect answers
//       setSelectedAnswer(null);
//     }

//     // Hide the result card after a delay
//     setTimeout(() => {
//       setShowResultCard(false);
//       setFlipped(false);
//     }, 350000);
//   }, 0);
// };

//   const handleNextLevel = () => {
//     const currentLevelIndex = chapter.levels.findIndex(
//       (lvl) => lvl.id === level.id
//     );

//     if (currentLevelIndex < chapter.levels.length - 1) {
//       const nextLevel = chapter.levels[currentLevelIndex + 1];
//       router.push(`/subjects/${subject.id}/${chapter.id}/${nextLevel.id}`);
//     } else {
//       alert("You've completed all levels in this chapter!");
//       router.push(`/subjects/`);
//     }
//   };

//   if (loadingSubject || loadingChapter || loadingLevel) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <Loading />
//       </div>
//     );
//   }

//   if (!subject || !chapter || !level) {
//     return <div>Content not found!</div>;
//   }

//   const promptToClose = () => setPrompt(true);
//   const confirmExit = (choice) => {
//     if (choice === "yes") {
//       router.push("/");
//     } else {
//       setPrompt(false);
//     }
//   };

//   const infoToClose = () => setInfo(false);
//   const infoToOpen = () => setInfo(true);

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ ease: "easeInOut", duration: 0.5 }}
//       className="flex flex-col items-center h-screen pt-5 pb-10 justify-between"
//     >
//       <X className="fixed top-5 left-5 text-white cursor-pointer" onClick={promptToClose} />
//       <Info className="fixed top-5 right-5 text-white cursor-pointer" onClick={infoToOpen} />
//       <AnimatePresence>
//         {info && (
//           <motion.div
//             initial={{ y: 600 }}
//             animate={{ y: 0 }}
//             exit={{ y: 600 }}
//             transition={{ duration: 0.2, ease: "easeInOut" }}
//             className="fixed px-5 pt-5 bottom-0 h-screen w-screen bg-[#161515] z-50"
//           >
//             <MoveLeft onClick={infoToClose} color="white" size={28} className="cursor-pointer" />
//             <div className="flex items-center justify-between">
//               <h1 className="text-white">{subject.name} - {chapter.name}</h1>
//               <h1 className="text-white text-xs font-light">{level.name}</h1>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//       {showResult ? (
//         <>
//           <div className="text-center flex flex-col justify-center items-center">
//             <h2 className="text-white font-bold text-lg">Quiz Complete!</h2>
//             <p className="text-white font-bold text-lg">Your score is: {score} / {level.questions.length}</p>
//           </div>
//           <div className="flex flex-col items-center -mt-10">
//             <LottieAnimations animationData={congratulations} />
//             <h1 className="text-white font-bold text-lg -mt-20">Congratulations</h1>
//           </div>
//           <button onClick={handleNextLevel} className="bottom-5 w-[350px] h-14 font-bold rounded-full bg-green-500 text-white">
//             Next Level
//           </button>
//         </>
//       ) : (
//         <>
//           <div className="flex flex-col items-center justify-center gap-8 h-full text-center">
//             <ProgressBar currentQuestionIndex={currentQuestionIndex} totalQuestions={level.questions.length} />
//             <h2 className="text-white text-xl text-center font-semibold h-10">
//               Question {currentQuestionIndex + 1} of {level.questions.length}
//             </h2>
//             <p className="text-lg font-bold text-white">{level.questions[currentQuestionIndex].question}</p>
//             <Image src={bird} />
//             <ul className="flex flex-col gap-5">
//               {level.questions[currentQuestionIndex].options.map((option, index) => (
//                 <li key={index} className="w-[350px] h-14">
//                   <motion.div
//                     className="relative w-full h-full "
//                     animate={{ rotateY: flipped && selectedAnswer === index ? 180 : 0 }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <div
//                       className={`absolute inset-0 flex items-center justify-center p-4 ${
//                         flipped && selectedAnswer === index ? "hidden" : "block"
//                       } ${
//                         selectedAnswer === index ? (isCorrect ? "bg-transparent border-[1px] rounded-full border-green-500 text-green-500" :'bg-transparent border-[1px] rounded-full border-green-500 text-green-500') : "bg-transparent rounded-full border-[1px] border-gray-500 text-gray-500"
//                       }`}
//                       onClick={() => setSelectedAnswer(index)}
//                     >
//                       <span className="">{option}</span>
//                     </div>
//                     {showResultCard && (
//       <motion.div
//         className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-[350px] h-[200px] bg-white rounded-lg shadow-lg flex items-center justify-center flex-col z-50`}
//         initial={{ scale: 0 }}
//         animate={{ scale: 1 }}
//         exit={{ scale: 0 }}
//       >
//         <span className={`text-lg font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
//           {isCorrect ? "Correct Answer!" : "Wrong Answer"}
//         </span>
//         <button
//           onClick={() => setShowResultCard(false)} // Hide the result card
//           className="mt-4 w-24 h-10 bg-gray-500 text-white rounded hover:bg-gray-600"
//         >
//           Cancel
//         </button>
//       </motion.div>
//     )}
//                     <div
//                       className={`absolute inset-0 flex items-center justify-center p-4 ${
//                         flipped && selectedAnswer === index ? "block" : "hidden"
//                       } ${isCorrect ? "bg-green-500" : "bg-red-500"}`}
//                     >
//                       <span className="text-white">
//                         {isCorrect ? "Correct Answer!" : "Wrong Answer"}
//                       </span>
//                     </div>
//                   </motion.div>
//                 </li>
//               ))}
//             </ul>
//             <button
//               className={`bottom-5 w-[350px] h-14 font-bold rounded-full ${
//                 selectedAnswer !== null ? "bg-green-500 text-white" : "bg-[#473D3D] text-[#6F5E5E]"
//               }`}
//               onClick={handleAnswerSubmit}
//             >
//               Submit
//             </button>
//           </div>
//         </>
//       )}
//       <AnimatePresence>
//         {prompt && (
//           <motion.div
//             initial={{ y: 600 }}
//             animate={{ y: 0 }}
//             exit={{ y: 600 }}
//             transition={{ duration: 0.2, ease: "easeInOut" }}
//             className="fixed px-5 pt-5 bottom-0 h-[45%] w-screen bg-[#161515] z-50"
//           >
//             <p className="text-white font-semibold text-xl">Are you sure you want to exit?</p>
//             <div className="w-full h-[60%] flex justify-center gap-4 items-center">
//               <button
//                 onClick={() => confirmExit("yes")}
//                 className="w-40 py-2 bg-red-500 text-white font-bold rounded-full"
//               >
//                 Yes
//               </button>
//               <button
//                 onClick={() => confirmExit("no")}
//                 className="w-40 py-2 bg-[#473D3D] text-white font-bold rounded-full"
//               >
//                 No
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.div>
//   );
// }
