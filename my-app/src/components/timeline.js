import React, { Component } from 'react';
import '../styles/timeline.scss';

let isElementInViewport = (el) => {
  let react = el.getBoundingClientRect();
  let timelineblock = document.querySelector(".timeline").getBoundingClientRect();
  return (
    react.top >= 0 &&
    react.left >= 0 &&
    react.bottom <= (timelineblock.bottom || document.documentElement.clientHeight) &&
    react.right <= (timelineblock.right || document.documentElement.clientWidth)
  );
}

let data = [
  {
    time: 2015,
    title: '資策會 行動應用程式開發',
    job: 'Student'
  },
  {
    time: 2016,
    title: ' 鴻◯◯◯ Inc.',
    job: 'Full Stack Developer'
  },
  {
    time: 2017,
    title: '聖◯ Inc.',
    job: 'Full Stack Developer'
  }
]

class Timeline extends Component {
  componentDidMount() {
    let block = document.querySelector(".timeline > ul");
    let items = document.querySelectorAll(".timeline li");
    let callbackFunc = () => {
      for (let i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }

    block.onscroll = callbackFunc;
    window.onscroll = callbackFunc;
    window.onload = callbackFunc;
  }

  render() {
    return (
      <section className="timeline">
        <ul>
          {
            data.map((v, index) => {
              return (
                <li key={index}>
                  <div>
                    <time>{v.time}</time>
                    {v.title}
                    <br />
                    {v.job}
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    );
  }
}

export default Timeline;
