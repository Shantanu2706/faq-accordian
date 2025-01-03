import iconStar from "./images/icon-star.svg";
import "./App.css";
import QAComponent from "./components/QAComponent";

function App() {
  return (
    <div className="App">
      <div className="card">
        <div className="card-header">
          <img src={iconStar} alt="logo" className="icon-star" />
          FAQs
        </div>
        <QAComponent
          question="What is Frontend Mentor, and how will it help me?"
          answer="Frontend Mentor offers realistic coding challenges to help developers improve their
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for
        all levels and ideal for portfolio building."
        />
        <hr />
        <QAComponent
          question="Is Frontend Mentor free?"
          answer="Yes, Frontend Mentor offers both free and
        premium coding challenges, with the free option providing access to a
        range of projects suitable for all skill levels."/>
        <hr />
        <QAComponent
          question="Can I use Frontend
        Mentor projects in my portfolio?"
          answer="Yes, you can use projects completed on
        Frontend Mentor in your portfolio. It's an excellent way to showcase
        your skills to potential employers!"
        />
        <hr />
        <QAComponent
          question="How can I get help if I'm stuck on a
         challenge?"
          answer="The best place to get help is inside Frontend
        Mentor's Discord community. There's a help channel where you can ask
        questions and seek support from other community members."
        />
      </div>
      <div class="attribution">
        Challenge by Frontend Mentor.
        Coded by Shantanu Pimprikar.
      </div>
    </div>
  );
}

export default App;
