import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';
import foto from './gambar/fe.jpg';
import Education from './education.js';
import Experience from './experience.js';
import Skills from './skills.js';

class Resume extends Component {
    render() {
      return(
        <div>
          <Grid>
            <Cell col={4}>
              <div style={{textAlign: 'left'}}>
             <img src={foto} style={{ width:'360px',textAlign: 'center'}}  alt="logo"/>
              </div>
                <h3 style={{fontFamily: 'Anton'}}> Aji Sukmo </h3>        
              <hr style={{borderTop: '3px solid #007991', width: '85%'}}/>
              <p style={{textAlign: 'justify', width: '85%'}}> Saat ini saya fokus untuk terus belajar meningkatkan skill pemogramman saya untuk mengejar ketertinggalan. </p>
              <hr style={{borderTop: '3px solid #007991', width: '85%'}}/>
                <h5 style={{fontFamily: 'oxygen'}}> Sleman, Yogyakarta </h5>
              <hr style={{borderTop: '3px solid #007991', width: '85%'}}/>
            </Cell>
            <Cell className="resume-right" col={8}>
              <h3>Education</h3>
  
                <Education
                startYear={2000}
                endYear={2006}
                UnivName="SD Potrojayan 2"
                UnivJur="-"
                />
                <Education
                startYear={2006}
                endYear={2009}
                UnivName="SMP N 1 Prambanan"
                UnivJur="-"
                />
                <Education
                startYear={2009}
                endYear={2012}
                UnivName="SMK Muda Patria"
                UnivJur="Elektronika Industri"
                />
                <Education
                startYear={2013}
                endYear={2019}
                UnivName="Universitas Teknologi Yogyakarta"
                UnivJur="S1 Sistem Informasi"
                />
                 <hr style={{borderTop: '3px solid #007991'}} />
                 <h3>Experience</h3>
                   <Experience
                startYear={2018}
                DName="Sleman Football - Data Statistik"
                />
                <Experience
                startYear={2019}
                DName="337 Creative - Digital Marketing/Web Developer"
                />
                <Experience
                startYear={2020}
                DName="Freelance Web Developer"
                />
                 <hr style={{borderTop: '3px solid #007991'}} />
              <h3>Skills</h3>
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills 
                    skill="PHP & Mysql"
                    progress={75}
                    />
                    <Skills
                      skill="Javascript & Node Js"
                      progress={50}
                      />
                        <Skills
                        skill="React JS"
                        progress={40}
                        />


            </Cell>
          </Grid>
        </div>
      )
    }
  }
  
  export default Resume;