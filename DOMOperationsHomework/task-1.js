/* globals $ */

/* 

Create a function that takes an id or DOM element and an array of contents

* if an id is provided, select the element
* Add divs to the element
  * Each div's content must be one of the items from the contents array
* The function must remove all previous content from the DOM element provided
* Throws if:
  * The provided first parameter is neither string or existing DOM element
  * The provided id does not select anything (there is no element that has such an id)
  * Any of the function params is missing
  * Any of the function params is not as described
  * Any of the contents is neight `string` or `number`
    * In that case, the content of the element **must not be** changed   
*/

module.exports = function () {
  function checkIfContentIsNumberOrString(contents) {
    var j,
        len;

    for(j = 0, len = contents.length; j < len; j += 1) {
      if(typeof contents[j] !== 'string' && typeof contents[j] !== 'number') {
        throw new Error('Invalid contents type');
      }
    }
  }

  return function (element, contents) {
    var theElement,
        content = '';

    if (element === undefined || (document.getElementById(element) === null && element === null)) {
      throw new Error('Invalid element');
    }

    if(contents === undefined) {
      throw new Error('Missing contents');
    }

    checkIfContentIsNumberOrString(contents);

    if (typeof element === 'string') {
      theElement = document.getElementById(element);
      theElement.innerHTML = '';
    } else {
      theElement = element;
      theElement.innerHTML = '';
    }

    for (var i = 0; i < contents.length; i += 1) {
      content += '<div>' + contents[i] + '</div>';
    }

    theElement.innerHTML += content;
  };
};