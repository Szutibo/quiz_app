import { useState, useEffect } from 'react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content';
import { getExercises } from './components/Utility';

function App() {
  const [exercises, setExercises] = useState([]);
  const [step, setStep] = useState(1)
  const [activeTask, setActiveTask] = useState(0);
  const [answers, setAnswers] = useState([]);
  const win = window.localStorage;

  const loadTasks = async () => {
    try {
      const requestedTasksArray = await getExercises();
      setExercises(requestedTasksArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);


  return (
    <div className='bg-body flex flex-col max-h-screen min-h-screen text-xl'>
      <Navbar />
      <Content
        exercises={exercises}
        step={step}
        setStep={setStep}
        activeTask={activeTask}
        setActiveTask={setActiveTask}
        answers={answers}
        setAnswers={setAnswers}
        win={win}
      />
      <Footer />
    </div>
  );
}

export default App;
