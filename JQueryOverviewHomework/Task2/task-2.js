/* globals $ */

/*
 Create a function that takes a selector and:
 * Finds all elements with class `button` or `content` within the provided element
 * Change the content of all `.button` elements with "hide"
 * When a `.button` is clicked:
 * Find the topmost `.content` element, that is before another `.button` and:
 * If the `.content` is visible:
 * Hide the `.content`
 * Change the content of the `.button` to "show"
 * If the `.content` is hidden:
 * Show the `.content`
 * Change the content of the `.button` to "hide"
 * If there isn't a `.content` element **after the clicked `.button`** and **before other `.button`**, do nothing
 * Throws if:
 * The provided ID is not a **jQuery object** or a `string`

 */
function solve() {
    return function (selector) {

        if (typeof selector !== 'string' && !(selector instanceof jQuery)) {
            throw new Error('Invalid selector');
        }

        if ($(selector).length === 0) {
            throw new Error('The provided selector does not select anything')
        }

        var $button = $(selector)
            .find('.button')
            .text('hide');

        $(selector).on('click', '.button', function () {

            var $clickedElement = $(event.target),
                $contentToShowOrHide = $(selector).find($clickedElement)
                    .nextAll('.content')
                    .first();

            if ($contentToShowOrHide.nextAll().hasClass('button')) {
                var isVisible = $contentToShowOrHide.is(':visible');

                if (!isVisible) {
                    $contentToShowOrHide.css('display', '');
                    $clickedElement.text('hide');
                } else {
                    $contentToShowOrHide.css('display', 'none');
                    $clickedElement.text('show');
                }
            }
        })
    };
};

module.exports = solve;