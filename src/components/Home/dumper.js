{/* <Route path='/job-detail' element={<JobDetails />}/> */}
            <Route path='/current-job/:id' element={<JobDetails />}/>
            <Route path='/application-form/:id' element={<ApplicationForm />}/>
          
            <Route path='/shortlist' element={<ShortlistedCandidates />}/>
            <Route path='/shortlist/details/:candidate_id/:job_id' element={<ShortlistedDetails />}/>
            <Route path='/assign-recruiter/:id' element={<AssignRecruiter />}/>

            <Route path='/recruiter/review' element={<RecruiterDashboard />}/>
            {/* <Route path='/recruiter/review' element={<RecruiterDashboard />}/> */}
            <Route path='/coordinator/review' element={<CoordinatorDashboard />}/>
            <Route path='/dash' element={<FeaturedJobs />}/>
            <Route path='/all-posted-jobs' element={<FeaturedJobs/>}/>
    
            <Route path='/my-jobs/' element={<MyJobs />}/>
            <Route path="/" element={<Details/>} />
            <Route path="/page2" element={<Update />} />
              
          </Route>
          