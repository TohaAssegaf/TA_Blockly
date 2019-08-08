Blockly.Blocks['lightswitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Turn")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["yellow","yellow"], ["green","green"], ["all","all"]]), "lightcolor")
        .appendField(new Blockly.FieldDropdown([["on","on"], ["off","off"]]), "switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

function turnOn(colour){
  colour=dropdown_lightcolor;
  //var code=
  return "document.getElementById('"+dropdown_lightcolor+"').style.backgroundColor='"+dropdown_lightcolor+"'";
}
function turnOff(colour){

}
Blockly.JavaScript['lightswitch'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  var dropdown_switch = block.getFieldValue('switch');
  if(dropdown_lightcolor ==="all"){
    if(dropdown_switch ==="on"){
      var code="document.getElementById('red').style.backgroundColor='red';document.getElementById('yellow').style.backgroundColor='yellow';document.getElementById('green').style.backgroundColor='green'"
    }
    if(dropdown_switch ==="off"){
      var code="document.getElementById('red').style.backgroundColor='white';document.getElementById('yellow').style.backgroundColor='white';document.getElementById('green').style.backgroundColor='white'"
    }
  }else{
    if(dropdown_switch==="on"){
      
      var code="document.getElementById('"+dropdown_lightcolor+"').style.backgroundColor='"+dropdown_lightcolor+"'";
    }
    if(dropdown_switch==="off"){
      var code="document.getElementById('"+dropdown_lightcolor+"').style.backgroundColor='white'";
    }
    
  }
  // TODO: Assemble JavaScript into code variable.
  //var code = '...;\n';
  return code;
};