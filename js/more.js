// Get the button and the additional text
const readMoreButton = document.getElementById('readMoreButton');
const moreText = document.querySelector('.more-text');

// Add a click event listener to the button
readMoreButton.addEventListener('click', function () {
    // Toggle the visibility of the additional text
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        readMoreButton.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        readMoreButton.textContent = 'Read More';
    }
});

const readMoreButton1 = document.getElementById('readMoreButton1');
const moreText1 = document.querySelector('.more-text1');

// Add a click event listener to the button
readMoreButton1.addEventListener('click', function () {
    // Toggle the visibility of the additional text
    if (moreText1.style.display === 'none' || moreText1.style.display === '') {
        moreText1.style.display = 'inline';
        readMoreButton1.textContent = 'Read Less';
    } else {
        moreText1.style.display = 'none';
        readMoreButton1.textContent = 'Read More';
    }
});

const readMoreButton2 = document.getElementById('readMoreButton2');
const moreText2 = document.querySelector('.more-text2');

// Add a click event listener to the button
readMoreButton2.addEventListener('click', function () {
    // Toggle the visibility of the additional text
    if (moreText2.style.display === 'none' || moreText2.style.display === '') {
        moreText2.style.display = 'inline';
        readMoreButton2.textContent = 'Read Less';
    } else {
        moreText2.style.display = 'none';
        readMoreButton2.textContent = 'Read More';
    }
});
