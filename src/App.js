import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountInfo from "./screens/AccountInfo";
import ApplyJob from "./screens/ApplyJob";
import Community from "./screens/Community";
import EditProfile from "./screens/EditProfile";
import Home from "./screens/Home";
import Job from "./screens/Job";
import JobDetail from "./screens/JobDetail";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Onboarding3 from "./screens/Onboarding3";
import Onboarding4 from "./screens/Onboarding4";
import Organisation from "./screens/Organisation";
import OrganisationForm from "./screens/OrganisationForm";
import PostJob from "./screens/PostJob";
import Profile from "./screens/Profile";
import Refer from "./screens/Refer";
import Signup from "./screens/Signup";
import UserPreference1 from "./screens/UserPreference1";
import UserPreference2 from "./screens/UserPreference2";
import UserPreference3 from "./screens/UserPreference3";
import UserPreference4 from "./screens/UserPreference4";
import UserPreference5 from "./screens/UserPreference5";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding1" element={<Onboarding1 />} />
          <Route path="/onboarding2" element={<Onboarding2 />} />
          <Route path="/onboarding3" element={<Onboarding3 />} />
          <Route path="/onboarding4" element={<Onboarding4 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/userpreference1" element={<UserPreference1 />} />
          <Route path="/userpreference2" element={<UserPreference2 />} />
          <Route path="/userpreference3" element={<UserPreference3 />} />
          <Route path="/UserPreference4" element={<UserPreference4 />} />
          <Route path="/UserPreference5" element={<UserPreference5 />} />
          <Route path="/job" element={<Job />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/community" element={<Community />} />
          <Route path="/editprofile" element={<EditProfile />} />
          <Route path="/accountinfo" element={<AccountInfo />} />
          <Route path="/jobdetail" element={<JobDetail />} />
          <Route path="/applyjob" element={<ApplyJob />} />
          <Route path="/refer" element={<Refer />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/organisation" element={<Organisation />} />
          <Route path="/organisationform" element={<OrganisationForm />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
