// JavaScript Document
var nbact=2; 
document.getElementById("addActionField").addEventListener("click", addAction);

function addAction(){	
	nbact++;
	var inputType=document.createAttribute("type");
	inputType.value="text";
	var inputName=document.createAttribute("name");
	inputName.value="actionC"+nbact;
	var inputPlaceholder=document.createAttribute("placeholder");
	inputPlaceholder.value="Action "+nbact;
	var txtclass=document.createAttribute("class");
	txtclass.value="courtTxt";
	var txt=document.createElement("input"); 
	txt.setAttributeNode(txtclass); 
	txt.setAttributeNode(inputName);
	txt.setAttributeNode(inputType);
	txt.setAttributeNode(inputPlaceholder);
	var element=document.getElementById("actionsRecC1");
	var btn=document.getElementById("addActionField");
	element.insertBefore(txt, btn);	
}