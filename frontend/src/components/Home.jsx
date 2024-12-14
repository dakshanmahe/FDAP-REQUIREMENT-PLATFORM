import { green } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
    <div className='hero'>
      <div className='content'>
      <div className='textt' style={{color:'red', marginBottom:'24px'}}>REQUIREMENT PLATFORM- JOB SEEKERS</div>
      </div>
      <Link

              className="main-button"
              style={{
                color:'blue',
                borderRadius: 20,
                width: "200px",
                height: "50px",
                justifyContent: 'center',
                alignitems: 'center'
              }}

              sx={{
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}

              to="/allEvents"
            >
              SERACH ALL JOBS
            </Link>
    </div>

    <div>
    <div className='content-box1'>
    <div style={{ marginTop:'40px', marginBottom:'24px', fontWeight: 600, fontSize:'x-large'}}>Looking for Different type of job</div>
    <Link

              className="second-button"
              style={{ 
                color:'#F2EF0E',
                borderRadius: 20,
                width: "200px",
                height: "50px",
                justifyContent: 'center',
                alignitems: 'center'
              }}

              sx={{
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}

              to="/allEvents"
            >
             VIST FOR ALL TYPE OF JOB
            </Link>
    </div>
    <div className='content-box2'>
    <div style={{ marginTop:'40px', marginBottom:'24px', fontWeight: 600, fontSize:'x-large'}}>Looking for a platform Job Seekers Details </div>
    <Link

              className="second-button"
              style={{ 
                color:'white',
                borderRadius: 20,
                width: "200px",
                height: "50px",
                justifyContent: 'center',
                alignitems: 'center'
              }}

              sx={{
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
              }}

              to="/signup"
            >
             Sign Up Now
            </Link>
    </div>
    </div>
    </div>
  )
}
