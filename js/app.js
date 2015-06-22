

Calci = { 
  clearPreview: function() {
    $('#preview').html("");
    $('#result').html("0");
  },
  deleteCharOnKeypress: function() {
    var preview = $('#preview').html();
    $('#preview').html(preview.slice(0, preview.length - 1));
  },
   calculateResult: function () {
    var result = eval($('#preview').html());
    $('#result').html(result);
    $('#preview').html(result);
  },
  handleInput: function(val) {
    if (val == 'X'){
      val = '*';
    }
    switch(val) {
      case "AC":
        Calci.clearPreview();
        break;
      case "DEL":
        Calci.deleteCharOnKeypress();
        break;
      case "=":
        Calci.calculateResult();
        break;
      default:
      $('#preview').html(
        $('#preview').html() + val
        );
      }
    },
    forKeyClick: function() {
      $('.key').click(function(event){
        Calci.handleInput($(this).text());
      });
    },
    handleInputFunctionWrapper: function(val) {
      return function(){
        Calci.handleInput(val);
      }
    },
    forKeyPress: function() {
      var keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/"];
      for (var i = 0; i < keys.length; i++) {
        $(document).bind('keyup', keys[i], Calci.handleInputFunctionWrapper(keys[i]));
      }
        $(document).bind('keyup', "esc", Calci.handleInputFunctionWrapper("AC"));
        $(document).bind('keyup', "backspace", Calci.handleInputFunctionWrapper("DEL"));
        $(document).bind('keyup', "return", Calci.handleInputFunctionWrapper("="));
    }
  }

$(document).ready(function() {
  Calci.forKeyClick();
  Calci.forKeyPress();
});