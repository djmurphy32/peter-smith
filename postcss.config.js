import autoprefixer from 'autoprefixer';
import cssMqPacker from 'css-mqpacker';
import cssMqPackerSort from './postcss/cssMqPackerSort.js';

export default {
  plugins: [autoprefixer, cssMqPacker({ sort: cssMqPackerSort })],
};
