function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function effectRainbow(targetElement) {

  if (targetElement.nodeType !== document.ELEMENT_NODE) {
    console.error(targetElement.tagName, '는 HTML*Element가 아닙니다.');
    return;
  }

  exploreNode(targetElement);

  function exploreNode(parentNode) {

    parentNode.childNodes.forEach(function(childNode) {

      // ex) <span>A</span>, <span> </span>
      if (childNode.tagName === 'SPAN' && childNode.textContent.length === 1) {
        childNode.style.setProperty('color', getRandomColor());
      }

      // ex) <p>A</p>, <span>ABC</span>
      else if (childNode.nodeType === document.ELEMENT_NODE) {
        exploreNode(childNode);
      }

      // ex) 'ab d' -> '<span>a</span><span>b</span> <span>d</span>'
      else if (childNode.nodeType === document.TEXT_NODE) {

        let textContent = childNode.textContent.split('');
        for (let idx in textContent) {

          if (textContent[idx] !== ' ') {
            let spanEl = document.createElement('SPAN');
            spanEl.style.setProperty('color', getRandomColor());
            let textNode = document.createTextNode(textContent[idx]);
            spanEl.appendChild(textNode);

            parentNode.insertBefore(spanEl, childNode);
          } else {
            let textNode = document.createTextNode(textContent[idx]);
            parentNode.insertBefore(textNode, childNode);
          }
        }
        parentNode.removeChild(childNode);
      }
    });
  }
}

document.querySelector('.btn').addEventListener('click', function() {
  let cardBlockElement = document.querySelector('.card-block');
  if (cardBlockElement.children.length) {
    effectRainbow(cardBlockElement.children[0]);
  }
});
