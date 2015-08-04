/* globals $ */

/* 

 Create a function that takes a selector and COUNT, then generates inside a UL with COUNT LIs:
 * The UL must have a class `items-list`
 * Each of the LIs must:
 * have a class `list-item`
 * content "List item #INDEX"
 * The indices are zero-based
 * If the provided selector does not selects anything, do nothing
 * Throws if
 * COUNT is a `Number`, but is less than 1
 * COUNT is **missing**, or **not convertible** to `Number`
 * _Example:_
 * Valid COUNT values:
 * 1, 2, 3, '1', '4', '1123'
 * Invalid COUNT values:
 * '123px' 'John', {}, []
 */

function solve() {

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    return function (selector, count) {

        if (count === undefined) {
            throw new Error('Count cannot be undefined');
        }

        if (!isNumber(count)) {
            throw new Error('Count should be a number or convertible to number');
        }

        if (count < 1) {
            throw new Error('Count should be bigger or equal to 1');
        }

        if (typeof selector !== 'string') {
            throw new Error('Selector should be a string');
        }

        var ul,
            li,
            i;

        ul = $('<ul />')
            .addClass('items-list');

        for (i = 0; i < count; i += 1) {
            li = $('<li>List item #' + i + '</li>')
                .addClass('list-item')
                .appendTo(ul);
        }

        $(selector).append(ul);
    };
}

module.exports = solve;