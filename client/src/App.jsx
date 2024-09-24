import { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { connect } from 'react-redux'
import * as actions from "./actions"
import './App.css'
import Header from './components/Header'
import Landing from './components/Landing'


const Dashboard = () => <h2>Dashboard</h2>
const NewSurvey = () => <h2>New Survey</h2>


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
