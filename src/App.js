import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return ( 
<div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Aji Sukmo" scroll> 
       

            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/project">Project</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
                <a href="https://github.com/ajisukmo44" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github fa-1x " aria-hidden="true" /></a>
               
               
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
            <Link to="/">Home</Link>
                <Link to="/project">Project</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App; 