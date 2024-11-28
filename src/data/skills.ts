import next_js from "../assets/next_js_logo.svg";
import react_js from "../assets/react_js_logo.svg";
import ts_logo from "../assets/ts_logo.svg";
import node_js_logo from "../assets/node_js_logo.svg";
import sass_logo from "../assets/sass_logo.svg";
import styled_components_logo from "../assets/styled_components_logo.svg";
import postgre_sql_logo from "../assets/postgre_sql_logo.svg";
import tailwind_logo from "../assets/tailwind_logo.svg";
import ubidots_logo from "../assets/ubidots_logo.svg";
import html_css_js_logo from "../assets/html_css_js_logo.svg";

const skills = [
  {
    title: "Next JS",
    description: "next_js_description",
    image: next_js,
  },
  {
    title: "React JS",
    description: "react_js_description",
    image: react_js,
  },
  {
    title: "Typescript",
    description: "typescript_description",
    image: ts_logo,
  },
  {
    title: "Node JS",
    description: "node_js_description",
    image: node_js_logo,
  },
  {
    title: "Tailwind CSS",
    description: "tailwind_css_description",
    image: tailwind_logo,
  },
  {
    title: "Styled Components",
    description: "styled_components_description",
    image: styled_components_logo,
  },
  {
    title: "Sass",
    description: "sass_description",
    image: sass_logo,
  },
  {
    title: "PostgreSQL",
    description: "postgresql_description",
    image: postgre_sql_logo,
  },
  {
    title: "Ubidots",
    description: "ubidots_description",
    image: ubidots_logo,
  },
  {
    title: "HTML, CSS e JavasScript",
    description: "html_css_js_description",
    image: html_css_js_logo
  }
] as const;

export default skills;
