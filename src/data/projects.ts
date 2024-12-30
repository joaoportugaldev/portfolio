import portfolio_home from "../assets/portfolio_home.jpg";
import efood_home from "../assets/efood_home.jpg";
import todo_app_home from "../assets/todo_app_home.jpg";

const projects = [
  {
    title: "project_portfolio__title",
    description: "project_portfolio__description",
    finished: false,
    finishDate: null,
    repoLink: "https://github.com/joaoportugaldev/portfolio.git",
    productionLink: "https://dev.joaoportugal.com.br/",
    image: portfolio_home,
  },
  {
    title: "project_efood__title",
    description: "project_efood__description",
    finished: true,
    finishDate: "2023-06-01T08:02:00-03:00",
    repoLink: "https://github.com/joaoportugaldev/efood.git",
    productionLink: "https://efood.joaoportugal.com.br/",
    image: efood_home,
  },
  {
    title: "project_todo_app__title",
    description: "project_todo_app__description",
    finished: true,
    finishDate: "2024-08-22T03:39:00-03:00",
    repoLink: "https://github.com/joaoportugaldev/todo-app.git",
    productionLink: null,
    image: todo_app_home,
  },
];

export default projects;
