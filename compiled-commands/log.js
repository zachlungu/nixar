// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo){
    return repo.commands.push({
      name: "log",
      desc: "Logs output to file and continues printing",
      input: 'line',
      output: 'line',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        var fs;
        fs = require('fs');
        return function(mask, input){
          if ((input != null ? input : "") !== "") {
            fs.appendFileSync(mask, input + "\r\n", 'utf-8');
          }
          return input;
        };
      }
    });
  };
}).call(this);