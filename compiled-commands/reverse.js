// Generated by LiveScript 1.3.1
(function(){
  module.exports = function(repo, p){
    return repo.commands.push({
      name: "reverse",
      desc: "Reverses the order of output",
      input: 'lines',
      output: 'lines',
      enabled: true,
      doc: {
        examples: ['']
      },
      compile: function(){
        return function(mask, lines){
          return p.reverse(
          lines);
        };
      }
    });
  };
}).call(this);