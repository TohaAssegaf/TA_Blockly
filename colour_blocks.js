Blockly.defineBlocksWithJsonArray([{
  "type": "lightswitch",
  "message0": "Turn %1 %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "lightcolor",
      "options": [
        [
          "red","red"
        ],
        [
          "yellow","yellow"
        ],
        [
          "green","green"
        ],
        [
          "all","all"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "switch",
      "options": [
        [
          "on","on"
        ],
        [
          "off","off"
        ]
      ]
    }
  ],
  "inputsInline": false,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);

Blockly.JavaScript['lightswitch'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  var dropdown_switch = block.getFieldValue('switch');
  // TODO: Assemble JavaScript into code variable.
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
  //var code = '...;\n';
  return code;
};