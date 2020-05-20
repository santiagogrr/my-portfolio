import React from 'react';
import './App.css';
import Main from './components/main'
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className='header-color' title={<Link style={{fontWeight:'500', color: 'white', fontSize: '24px'}} to="/">My Portfolio</Link>} scroll>
                <Navigation>
                    <Link style={{fontSize:'24px'}} to="/resume">Resume</Link>
                    {/* <Link style={{fontSize:'24px'}} to="/aboutme">About Me</Link> */}
                    <Link style={{fontSize:'24px'}}  to="/projects">Projects</Link>
                    <Link style={{fontSize:'24px'}}  to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<span style={{fontWeight:'500', fontSize: '24px'}}>My Portfolio</span>}>
                <Navigation>
                    <Link style={{fontSize:'24px'}} to="/resume">Resume</Link>
                    {/* <Link style={{fontSize:'24px'}} to="/aboutme">About Me</Link> */}
                    <Link style={{fontSize:'24px'}} to="/projects">Projects</Link>
                    <Link style={{fontSize:'24px'}} to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
            <Footer />
        </Layout>
    </div>
  );
}

export default App;
