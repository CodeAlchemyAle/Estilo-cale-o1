document.getElementById('review-form').addEventListener('submit', function(event) {

    event.preventDefault();

    const reviewText = document.getElementById('review-text').value;

    if (reviewText.trim() === "") return;

    const reviewElement = document.createElement('div');

    reviewElement.classList.add('review');

    reviewElement.innerHTML = `<p>${reviewText}</p>`;

    document.getElementById('reviews-list').appendChild(reviewElement);
    
    document.getElementById('review-text').value = '';
});

