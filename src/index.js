const svgtofont = require('svgtofont');
const path = require('path');

const convert = function() {
    svgtofont({
        src: path.resolve(process.cwd(), 'icon'), // svg path
        dist: path.resolve(process.cwd(), 'fonts'), // output path
        fontName: 'svgtofont', // font name
        css: true, // Create CSS files.
      }).then(() => {
        console.log('done!');
      });
};

module.exports = convert;
