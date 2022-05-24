import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';

import ProtectedRoute from './components/routing/ProtectedRoute';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path='/create-profile'
              element={
                <ProtectedRoute>
                  <CreateProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path='/edit-profile'
              element={
                <ProtectedRoute>
                  <EditProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path='/add-experience'
              element={
                <ProtectedRoute>
                  <AddExperience />
                </ProtectedRoute>
              }
            />
            <Route
              path='/add-education'
              element={
                <ProtectedRoute>
                  <AddEducation />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
