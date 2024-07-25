import { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import { connect } from 'react-redux'
import * as actions from "./actions"
import './App.css'


const Dashboard = () => <h2>Dashboard</h2>
const NewSurvey = () => <h2>New Survey</h2>
const Landing = () => <h2>Landing</h2>


class App extends Component {

  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <>
        <div className="container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path='/' Component={Landing} />
              <Route path='/surveys' Component={Dashboard} />
              <Route path='/surveys/new' Component={NewSurvey} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    )
  }
}

export default connect(null, actions)(App)
