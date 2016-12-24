function addObjectIdWrapper(text) {

  var re = new RegExp(/[a-f\d]{24}/, 'ig');
  return text.replace(re, "ObjectId(\"$&\")");

}

function getText() {
  return document.getElementById("object-id-content").value;
}

function jamItHome(output) {
  document.getElementById("object-id-output").innerHTML = output;
}

function autoSelect(){
  document.getElementById("object-id-output").addEventListener("focus", function() {
    this.select();
  });
}

document.getElementById("object-id-form").addEventListener("submit", function(e) {
  e.preventDefault();
  var input = getText();
  var output = addObjectIdWrapper(input);

  jamItHome(output);
  autoSelect();
})
