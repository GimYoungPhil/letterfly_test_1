function createSpan(str) {
  let spanEl = document.createElement('SPAN');
  if (str !== ' ') {
    spanEl.style.setProperty('color', getRandomColor());
  }
  let textNode = document.createTextNode(str);
  spanEl.appendChild(textNode);
  return spanEl;
}

function setColor(element) {
  element.style.setProperty('color', getRandomColor());
  return element;
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function effectRainbow() {
  let block = document.querySelector('.card-block');
  let oldDiv = document.querySelector('.card-block>div');
  let newDiv = document.createElement('DIV');
  block.removeChild(oldDiv);
  block.appendChild(newDiv);

  exploreNode(oldDiv, newDiv);

  function exploreNode(parentNode, newNode) {

    parentNode.childNodes.forEach(function(childNode) {

      if (childNode.tagName === 'SPAN'
          && childNode.textContent.length === 1) {

        newNode.appendChild(createSpan(childNode.textContent));

      } else if (childNode.tagName) {

        let clone = childNode.cloneNode();
        newNode.appendChild(clone);
        exploreNode(childNode, clone);

      } else {

        let content = childNode.textContent.split('');
        for (let idx in content) {
          let span = createSpan(content[idx]);
          newNode.appendChild(span);
        }

      }
    });
  }
}


document.querySelector('.btn').addEventListener('click', function() {
  effectRainbow();
});
