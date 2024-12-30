import portfolio_home from "../assets/portfolio_home.jpg";
import efood_home from "../assets/efood_home.jpg";
import todo_app_home from "../assets/todo_app_home.jpg";
import disney_movie_page_home from "../assets/disney_movie_page.jpg";
import contact_list_home from "../assets/contact_list_home.jpg";

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
  {
    title: "project_disney_movie_page__title",
    description: "project_disney_movie_page__description",
    finished: true,
    finishDate: "2023-06-06T10:59:00-03:00",
    repoLink: "https://github.com/joaoportugaldev/disney-movie-page.git",
    productionLink: "https://project-disney-movie-page.vercel.app/",
    image: disney_movie_page_home,
  },
  {
    title: "project_contact_list__title",
    description: "project_contact_list__description",
    finished: true,
    finishDate: "2023-10-05T12:55:00-03:00",
    repoLink: "https://github.com/joaoportugaldev/lista-de-contatos.git",
    productionLink: "https://project-contact-list.vercel.app/",
    image: contact_list_home,
  },
];

export default projects;
