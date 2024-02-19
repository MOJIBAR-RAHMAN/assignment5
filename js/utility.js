function getInnerTextById(id) {
  const elemnet = document.getElementById(id);
  const innerText = elemnet.innerText;
  return innerText;
}
function getInnerTextValueById(id) {
  const elemnet = document.getElementById(id);
  const innerValue = elemnet.value;
  return innerValue;
}
function getInnerTextNumberById(id) {
  const elemnet = document.getElementById(id);
  const number = parseFloat(elemnet.innerText);
  return number;
}

function setInnertextById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

