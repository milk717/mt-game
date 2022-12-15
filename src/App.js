import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./page/MainPage";
import MainContainer from "./container/MainContainer";
import BodyLanguageContainer from "./container/BodyLanguageContainer";
import QuizPage from "./page/QuizPage";
import BodyQuizContainer from "./container/BodyQuizContainer";
import ScorePage from "./page/ScorePage";
import PeopleQuizContainer from "./container/PeopleQuizContainer";
import TeamInputContainer from "./container/TeamInputContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}>
              <Route path='/' element={<MainContainer/>}/>
              <Route path='/body' element={<BodyLanguageContainer/>}/>
              <Route path='/team' element={<TeamInputContainer/>}/>
          </Route>
            <Route path='/quiz' element={<QuizPage/>}>
                <Route path='/quiz/body' element={<BodyQuizContainer/>}>
                    <Route path='/quiz/body/animal' element={<BodyQuizContainer/>}/>
                    <Route path='/quiz/body/movie' element={<BodyQuizContainer/>}/>
                    <Route path='/quiz/body/emotion' element={<BodyQuizContainer/>}/>
                </Route>
            </Route>
            <Route path='/people/quiz' element={<PeopleQuizContainer/>}/>
            <Route path='/score' element={<ScorePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
