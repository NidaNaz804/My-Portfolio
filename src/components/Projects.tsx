import React from 'react'
import Headings from './Heading'
import Card from './Card'

const data =[
    {
        id: 0,
        title: "Todo List",
        desc: "A user-friendly app to manage tasks with add, edit and delete functionalities.",
        img: "/todo-list.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 1,
        title: "Number-Guessing Game",
        desc: "A fun and engaging game where users guess a randomly generated number.",
        img: "/numberguessing.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 2,
        title: "Weather App",
        desc: "A dynamic app to fetch and display real-time weather updates for any location.",
        img: "/weather.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 3,
        title: "Currency Converter",
        desc: "A currency converter supporting multiple currencies and accurate exchange rate.",
        img: "/currency-converter.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 4,
        title: "Count-down Timer",
        desc: "A sleek and interactive timer to count down to specific events or deadlines.",
        img: "/countdown-timer.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 5,
        title: "Simple Calculator",
        desc: "A minimalistic calculator for performing basic arithmetic operations.",
        img: "/simple-calculator.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 6,
        title: "Quiz App",
        desc: "An interactive quiz application with customizeable questions.",
        img: "/quiz.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },

    {
        id: 7,
        title: "Stop-Watch",
        desc: "A functional stopwatch with start, stop and reset features for time tracking.",
        img: "/stop-watch.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 8,
        title: "BMI Calculator",
        desc: "A user-friendly application to calculate Body Mass Index (BMI).",
        img: "/bmi-calculator.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 9,
        title: "Digital Clock",
        desc: "A sleek, real-time digital clock displaying hours, minutes, and seconds.",
        img: "/digital-clock.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 10,
        title: "Pomodoro Timer",
        desc: "A productive app implementing to manage work and break intervals.",
        img: "/pomodoro-timer.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },
    {
        id: 11,
        title: "Word Counter",
        desc: "A simple and efficient tool to count words, characters, and spaces in real-time.",
        img: "/word-counter.jpg",
        tags: ["React", "Node", "CSS", "Typescript"],
    },

]

const Projects = () => {
    return (
      <div id="projects" className="container pt-32">
        <Headings title="My Projects" />
        {/* Adjust grid layout */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 place-items-center">
          {data.map((el) => (
            <Card
              key={el.id}
              title={el.title}
              desc={el.desc}
              img={el.img}
              tags={el.tags}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  