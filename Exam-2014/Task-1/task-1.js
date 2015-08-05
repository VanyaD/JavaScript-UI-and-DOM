/* globals module */
function solve() {

    return function (selector, items) {

        var container = document.querySelector(selector);
        var left = document.createElement('div');
        var right = document.createElement('div');
        var imageContainer = document.createElement('div');

        left.style.width = '80%';
        left.style.height = '700px';
        left.style.display = 'inline-block';
        left.style.float = 'left';
        left.className += ' image-preview';
        left.style.textAlign = 'center';

        right.style.width = '20%';
        right.style.height = '700px';
        right.style.overflowY = 'scroll';
        right.style.textAlign = 'center';
        right.style.display = 'inline-block';

        //right
        var filterBox = document.createElement('input');
        var filterLabel = document.createElement('h3');

        filterLabel.innerText = 'Filter';
        filterLabel.style.display = 'block';

        right.appendChild(filterLabel);
        right.appendChild(filterBox);

        var documentFragment = document.createDocumentFragment();
        var img = document.createElement('img');
        var imgTitle= document.createElement('h3');

        img.style.width = '100%';

        for (var i = 0; i < items.length; i += 1) {
            var currentImg = img.cloneNode(true);
            var currentImgTitle = imgTitle.cloneNode(true);

            currentImg.src = items[i].url;
            currentImgTitle.innerHTML = items[i].title;

            var imgContainer = document.createElement('div');

            imgContainer.className += ' image-container';
            imgContainer.appendChild(currentImgTitle);
            imgContainer.appendChild(currentImg);

            documentFragment.appendChild(imgContainer);
        }
        imageContainer.appendChild(documentFragment);

        //left
        var defaultTitle = document.createElement('h1');
        var defaultImage = document.createElement('img');

        defaultTitle.style.display = 'block';
        defaultImage.src = items[0].url;
        defaultImage.style.width = '70%';
        defaultTitle.innerHTML = items[0].title;

        left.appendChild(defaultTitle);
        left.appendChild(defaultImage);

        imageContainer.addEventListener('mouseover', function (ev) {
            if(ev.target.tagName === 'IMG'){
                ev.target.parentNode.style.backgroundColor = 'gray';
            }

        }, false);

        imageContainer.addEventListener('mouseout', function (ev) {
            if(ev.target.tagName === 'IMG'){
                ev.target.parentNode.style.backgroundColor = '';
            }
        }, false);

        imageContainer.addEventListener('click', function (ev) {
            var currentSrc = ev.target.getAttribute('src');

            if (currentSrc !== null) {
                defaultImage.setAttribute('src', currentSrc);
                defaultImage.style.width = '70%';
                left.appendChild(defaultTitle);
                left.appendChild(defaultImage);
            }
        }, false);

        right.appendChild(imageContainer);
        container.appendChild(left);
        container.appendChild(right);
    };
}

module.exports = solve;