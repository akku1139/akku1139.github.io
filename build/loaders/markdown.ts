import { loader } from "./types";

import { marked } from 'marked';

const md: loader = (content) => {
  return marked(content);
}

export default md;
