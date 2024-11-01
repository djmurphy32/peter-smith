import autoprefixer from "autoprefixer";
import tailwind from "tailwindcss";
import cssMqPacker from "css-mqpacker";
import cssMqPackerSort from "./postcss/cssMqPackerSort.js";

export default {
  plugins: [autoprefixer, tailwind, cssMqPacker({ sort: cssMqPackerSort })],
};
