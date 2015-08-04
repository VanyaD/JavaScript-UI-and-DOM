/* globals $ */
$.fn.gallery = function (columnsCount) {

    var columnsCount = columnsCount || 4;
    var $this = this;
    var $selected = $this.children('.selected');
    var $imageContainers = $this.find('.image-container');
    var $galleryList = $this.children('.gallery-list');
    var $onFocus = $selected.find('#current-image');
    var $prevImage = $selected.find('#previous-image');
    var $nextImage = $selected.find('#next-image');
    var $div = $('<div />');

    $this.addClass('gallery');
    $selected.hide();
    $('.gallery').append($div);

    $imageContainers.each(function (index, element) {
        var remainder = index % columnsCount;
        if (remainder === 0) {
            $(element).addClass('clearfix');
        }
    });

    $galleryList.on('click', 'img', function () {
        var $this = $(this);
        var currentImgSrc = $this.attr('src');

        var currentIndex = parseInt($this.attr('data-info'));
        var nextIndex = getNextIndex(currentIndex);
        var prevIndex = getPreviousIndex(currentIndex);

        $onFocus.attr('src', currentImgSrc);
        $onFocus.attr('data-info', currentIndex);

        $nextImage.attr('src', getNextSrc(nextIndex));
        $nextImage.attr('data-info', nextIndex);

        $prevImage.attr('src', getPreviousSrc(prevIndex));
        $prevImage.attr('data-info', prevIndex);

        $selected.show();
        $galleryList.addClass('blurred');
        $div.addClass('disabled-background');
    });

    $nextImage.on('click', function () {
        var $this = $(this);
        var currentImgSrc = $this.attr('src');

        var currentIndex = parseInt($this.attr('data-info'));
        var nextIndex = getNextIndex(currentIndex);
        var prevIndex = getPreviousIndex(currentIndex);

        $onFocus.attr('src', currentImgSrc);
        $onFocus.attr('data-info', currentIndex);

        $nextImage.attr('src', getNextSrc(nextIndex));
        $nextImage.attr('data-info', nextIndex);

        $prevImage.attr('src', getPreviousSrc(prevIndex));
        $prevImage.attr('data-info', prevIndex);

        $selected.show();
        $galleryList.addClass('blurred');
        $div.addClass('disabled-background');
    });

    $prevImage.on('click', function () {
        var $this = $(this);
        var currentImgSrc = $this.attr('src');

        var currentIndex = parseInt($this.attr('data-info'));
        var nextIndex = getNextIndex(currentIndex);
        var prevIndex = getPreviousIndex(currentIndex);

        $onFocus.attr('src', currentImgSrc);
        $onFocus.attr('data-info', currentIndex);

        $nextImage.attr('src', getNextSrc(nextIndex));
        $nextImage.attr('data-info', nextIndex);

        $prevImage.attr('src', getPreviousSrc(prevIndex));
        $prevImage.attr('data-info', prevIndex);

        $selected.show();
        $galleryList.addClass('blurred');
        $div.addClass('disabled-background');
    });

    function getNextSrc(nextIndex) {
        var nextImgSrc = $("img").filter("[data-info='" + nextIndex + "']").attr('src');

        return nextImgSrc;
    }

    function getPreviousSrc(previousIndex) {
        var prevImgSrc = $("img").filter("[data-info='" + previousIndex + "']").attr('src');

        return prevImgSrc;
    }

    function getNextIndex(currentIndex) {
        var nextIndex = currentIndex + 1;

        if (nextIndex > $imageContainers.length) {
            nextIndex = 1;
        }
        return nextIndex;
    }

    function getPreviousIndex(currentIndex) {
        var previousIndex = currentIndex - 1;

        if (previousIndex < 1) {
            previousIndex = $imageContainers.length;
        }
        return previousIndex;
    }

    $onFocus.on('click', function () {
        $selected.hide();
        $galleryList.removeClass('blurred');
        $div.removeClass('disabled-background');
    });

    return this;
};