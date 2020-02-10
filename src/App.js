import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Content} from 'react-mdl';
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
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
      
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App; 