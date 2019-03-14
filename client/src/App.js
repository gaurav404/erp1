import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import TeacherForm from './components/addform/teacher'
 import StudentForm from './components/addform/student'
import JournalForm from './components/addform/Journals'
import SeminarForm from './components/addform/seminar'
import TaskForm from './components/addform/task_teacher'
import AcademicsForm from './components/addform/academics'
import PaperForm from './components/addform/paper'
import Students from './components/Lists/student'
import Teachers from './components/Lists/teacher'
import Papers from './components/Lists/paper'
import Journals from './components/Lists/Journals'
import Seminars from './components/Lists/Seminars'
import Academics from './components/Lists/Academics'
import assistantship from './components/Lists/assistantship'
import ProfileModal from './components/Profile/profile2'
import Studentprofile from './components/profile2/studentProfile'
import Teacherprofile from './components/profile2/teacherProfile'
import TasksTeacher from './components/Lists/task_teacher.js'
import TasksStudent from './components/Lists/task_student.js'
import TaskShow from './components/tasks/TaskShow.js'
import Paper from './components/tasks/viewPaper'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'
import Register2 from './components/auth/Register2.js'
import Main from './components/layouts/Landing.js'
import MainT from './components/layouts/Teacher_landing.js'
import MainS from './components/layouts/Student_landing.js'

import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path='/teacher' component={MainT}></Route>
            <Route exact path='/student' component={MainS}></Route>
            <Route exact path='/showStudents' component={Students}></Route>
            <Route exact path='/showTeachers' component={Teachers}></Route>
            <Route exact path='/showPapers' component={Papers}></Route>
            <Route exact path='/showPaper' component={Paper}></Route>
            <Route exact path='/showSeminars' component={Seminars}></Route>
            <Route exact path='/showJournals' component={Journals}></Route>
            <Route exact path='/showAcademics' component={Academics}></Route>
            <Route exact path='/showAssistantship' component={assistantship}></Route>
            <Route exact path='/addTeacher' component={TeacherForm}></Route>
            <Route exact path='/addStudent' component={StudentForm}></Route>
            <Route exact path='/addJournal' component={JournalForm}></Route>
            <Route exact path='/addSeminar' component={SeminarForm}></Route>
            <Route exact path='/addTask' component={TaskForm}></Route>
            <Route exact path='/addAcademics' component={AcademicsForm}></Route>
            <Route exact path='/addPaper' component={PaperForm}></Route>
            <Route exact path='/profile' component={ProfileModal}></Route>
            <Route exact path='/student/profile' component={Studentprofile}></Route>
            <Route exact path='/teacher/profile' component={Teacherprofile}></Route>
            <Route exact path='/teacher/tasks' component={TasksTeacher}></Route>
            <Route exact path='/student/tasks' component={TasksStudent}></Route>
            <Route exact path='/taskshow' component={TaskShow}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register/:token' component={Register2}></Route>

            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
