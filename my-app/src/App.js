import React, { Component } from 'react';
import ReactJson from 'react-json-view'
import Timeline from './components/timeline';
import avatar from './images/fred.png';
import './App.scss';

let skillTree = {
  'Programming Languag': [
    'C#',
    'Python'
  ],
  'Web': {
    'Front-end': [
      'ES6',
      'CSS3(SCSS)',
      'React.js',
      'Vue.js',
      'jQuery'
    ],
    'Back-end': [
      'Asp.Net MVC',
      'Node.js',
    ],
  },
  'DB': [
    'MSSQL',
    'MySQL',
    'MongoDB'
  ],
  'Tool': [
    'Git'
  ]
}

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="header">
          <img className="avatar animated flipInX" src={avatar} alt="avatar" />
          <br /><br />
          <h1>Fred</h1>
          <hr />
          <p>私立義守大學 資訊管理系 <a href="http://www.mis.isu.edu.tw/interface/overview/80204" target="_blank" rel="noopener noreferrer"><i className="fas fa-link"></i></a></p>
          <p>國立高雄科技大學 資訊工程系 <a href="http://www.csie.kuas.edu.tw/" target="_blank" rel="noopener noreferrer"><i className="fas fa-link"></i></a></p>
          <div className="headerIcons">
            <a href="https://github.com/huzhecheng" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x"></i></a>&nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/jhe-cheng-syu-914430175" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>&nbsp;&nbsp;
            <a href="mailto:v57801129@gmail.ocm"><i className="fas fa-envelope fa-2x"></i></a>&nbsp;&nbsp;
          </div>
        </header>
        <section className="section">
          <h1>Hi !</h1>
          <p className="animated bounceIn">
            你好，我是Fred&nbsp;&nbsp;&nbsp;全職工程師
            <br />
            來自台灣高雄市，白天是上班族，晚上是學生。
            <br />
            目前在學習關於資料分析＆機器學習AI方面相關知識，
            <br />
            很高興認識你！😃
          </p>
          <hr />
          <h1><i className="fas fa-robot fa-lg"></i>&nbsp;&nbsp;Experiences</h1>
          <Timeline />
          <ul className="animated bounceIn experience_block">
            <li>
              <h3>聖◯ Inc.</h3>
              <h5>2017-2019</h5>
              <p>
                專案部開發團隊，使用的技術為ASP.Net MVC以及Vue.js。
                <br />
                小團隊開發模式，主要負責後台系統建置、資料庫設計、Web API開發與APP工程師做資料串接。
              </p>
            </li>
            <li>
              <h3>鴻◯◯◯ Inc.</h3>
              <h5>2016-2017</h5>
              <p>
                研發部門RD，參與公司官方網站翻新、網站後台、Web API、ERP系統資料連動，使用技術為ASP.Net MVC以及jQuery。
                <br />
                小團隊開發模式，從旁學習從系統分析、架構設計、資料庫規劃建置、介面切版設計，實作網站系統。
              </p>
            </li>
            <li>
              <h3>資策會 行動應用程式開發</h3>
              <p>
                <a href="https://www.youtube.com/watch?v=QkgGCbCwsa0" target="_blank" rel="noopener noreferrer">Health Tracker</a>
                <br />
                加強在實務及實作方面，並提升基礎能力
                <br />
                專題以小團隊的運作模式，從發想ideal，之後大家分工合作完成專案。
              </p>
            </li>
          </ul>
          <hr />
          <h1><i className="fas fa-street-view fa-lg"></i>&nbsp;&nbsp;Skills</h1>
          <ReactJson src={skillTree} name={false} displayDataTypes={false} displayObjectSize={false} />
          {/* <hr />
          <h1><i className="fas fa-street-view fa-lg"></i>&nbsp;&nbsp;Activity</h1>
          <ul className="activity_block">
            <li><a href="https://ai100.cupoy.com/" target="_blank" rel="noopener noreferrer">機器學習 百日馬拉松</a></li>
          </ul> */}
          <hr />
          <h1><i className="fas fa-laptop-code fa-lg"></i>&nbsp;&nbsp;Portfolio</h1>
          <ul className="portfolio_block">
            <li><a href="https://www.youtube.com/watch?v=QkgGCbCwsa0" target="_blank" rel="noopener noreferrer">Health Tracker 健康管理</a></li>
            <li><a href="https://huzhecheng.github.io/Currency2.0/" target="_blank" rel="noopener noreferrer">Bank Of Taiwan 匯率查詢</a></li>
            <li>
              <a>Line bot 機器人</a><span>&nbsp;&nbsp;(爬蟲 + Firebase)</span>
              <br />
              <img className="qr-official" src="http://qr-official.line.me/L/dHC95-rdUC.png" alt="avatar" />
            </li>
          </ul>
        </section>
        <footer className="footer">
          <p>
            <small>
              Hosted on GitHub Pages
              <br />
              — Base Theme by <a href="https://github.com/orderedlist" target="_blank" rel="noopener noreferrer">orderedlist</a>
              <br />
              — Base by <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a>
            </small>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
