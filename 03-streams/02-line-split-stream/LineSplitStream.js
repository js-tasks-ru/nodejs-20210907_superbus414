const stream = require('stream');
const os = require('os');

class LineSplitStream extends stream.Transform {
  constructor(options) {
    super(options);
    this.str = '';
    this.newStr = [];
    this.lineBreak = os.EOL;
    this.endcoding = options.end
  }

  _transform(chunk, encoding, callback) {
    this.str += chunk.toString();
    this.newStr = this.str.split(this.lineBreak);
    this.str = this.newStr.pop();
    this.newStr.forEach((li) => {
      if(li){
        this.push(li);
      }
    });
    callback(null);
    console.log(chunk);
    console.log(this.str);
  }

  _flush(callback) {
    if(this.str){
      this.push(this.str);
    }
    console.log(this.str);
    callback(null);
  }
}

module.exports = LineSplitStream;
