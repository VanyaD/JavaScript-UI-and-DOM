//#DOM Operations
//_For instructions on how to run the tests, check the following link:
//    https://github.com/TelerikAcademy/JavaScript-UI-and-DOM/blob/master/README.md#user-content-preparing-the-local-machine-for-unit-testing-with-mocha-and-chai
//
//        ##Task 1
//Create a function that takes an id or DOM element and an array of contents
//
//* If an id is provided, select the element
//* Add divs to the element
//* Each div's content must be one of the items from the contents array
//* The function must remove all previous content from the DOM element provided
//* Throws if:
//* The provided first parameter is neither string or existing DOM element
//* The provided id does not select anything (there is no element that has such an id)
//* Any of the function params is missing
//* Any of the function params is not as described
//* Any of the contents is neither `string` nor `number`
//* In that case, the content of the element **must not be** changed

module.exports = function () {

    return function (element, contents) {
        var theElement,
            i,
            j,
            len = contents.length,
            documentFragment = document.createDocumentFragment(),
            div = document.createElement('div'),
            currentDiv;

        if (typeof(element) !== 'string' && !(element instanceof HTMLElement)) {
            throw new Error('Invalid first argument!');
        }

        if (!Array.isArray(contents)) {
            throw new Error('The second argument passed should be an array!');
        }

        for (j = 0; j < len; j += 1) {
            if (typeof contents[j] !== 'string' && typeof contents[j] !== 'number') {
                throw new Error('Array elements should be either numbers or strings!');
            }
        }

        if (typeof element === "string") {
            theElement = document.getElementById(element);

            if (theElement === null) {
                throw new Error("An element with the given id does not exist!");
            }
        } else {
            theElement = element;
        }

        for (i = 0; i < len; i += 1) {
            currentDiv = div.cloneNode(true);
            currentDiv.innerHTML = contents[i];
            documentFragment.appendChild(currentDiv);
        }

        theElement.innerHTML = '';
        theElement.appendChild(documentFragment);
    }
};