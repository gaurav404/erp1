import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './store'

import TeacherForm from './components/addform/teacher'
import StudentForm from './components/addform/student'
import JournalForm from './components/addform/Journals'
import Students from './components/Lists/student'
import Teachers from './components/Lists/teacher'
import ProfileModal from './components/Profile/profile'
import Tasks from './components/tasks/Tasks.js'
import TaskShow from './components/tasks/TaskShow.js'
import Register from './components/auth/Register.js'
import Login from './components/auth/Login.js'
import Register2 from './components/auth/Register2.js'
import Main from './components/layouts/Landing.js'
import Studentprofile from './components/profile2/studentProfile'
import Teacherprofile from './components/profile2/teacherProfile'



import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar/>
            <Route exact path='/' component={Main}></Route>
            <Route exact path='/showStudents' component={Students}></Route>
            <Route exact path='/showTeachers' component={Teachers}></Route>
            <Route exact path='/addTeacher' component={TeacherForm}></Route>
            <Route exact path='/addStudent' component={StudentForm}></Route>
            <Route exact path='/addJournal' component={JournalForm}></Route>
            <Route exact path='/profile' component={ProfileModal}></Route>
            <Route exact path='/tasks' component={Tasks}></Route>
            <Route exact path='/taskshow' component={TaskShow}></Route>
            <Route exact path='/register' component={Register}></Route>
            <Route exact path='/login' component={Login}></Route>
            <Route exact path='/register/:token' component={Register2}></Route>
            <Route exact path='/student/profile' component={Studentprofile}></Route>
            <Route exact path='/teacher/profile' component={Teacherprofile}></Route>

            <Footer/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
