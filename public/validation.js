document.addEventListener('DOMContentLoaded', function() {
    // Select form elements
    const reviewText = document.getElementById('review-text');
    const rating = document.getElementById('rating');
    const submitBtn = document.getElementById('submit-btn');
  
    // Add form submission event listener
    submitBtn.addEventListener('click', function(event) {
      // Prevent form submission
      event.preventDefault();
  
      // Perform validation
      if (reviewText.value.length < 10) {
        alert('Please enter a review with at least 10 characters.');
      } else if (rating.value < 1 || rating.value > 5) {
        alert('Please select a rating between 1 and 5.');
      } else {
        // Validation passed, submit the form
        event.target.closest('form').submit();
      }
    });

  
  });

  const reviews = [
    {
      review: "Great product! Highly recommended.",
      rating: 5
    },
    {
      review: "Average product. Could be better.",
      rating: 3
    },
    {
        review: "Worst product",
        rating: 1
      },
      {
        review: "Not Good",
        rating: 2
      },
      {
        review: "Good Product",
        rating: 4
      },
  ];

  document.addEventListener('DOMContentLoaded', function() {
    const reviewList = document.getElementById('review-list');
  
    // Iterate over the reviews array
    reviews.forEach(function(review) {
      // Create a new review element
      const reviewElement = document.createElement('div');
      reviewElement.classList.add('review');
  
      // Create elements for review text and rating
      const reviewTextElement = document.createElement('p');
      reviewTextElement.textContent = review.review;
  
      const ratingElement = document.createElement('p');
      ratingElement.textContent = `Rating: ${review.rating}`;
  
      // Append the elements to the review container
      reviewElement.appendChild(reviewTextElement);
      reviewElement.appendChild(ratingElement);
  
      // Append the review element to the review list container
      reviewList.appendChild(reviewElement);
    });
  });


  const starLabels = document.querySelectorAll('.star-rating label');
let selectedRating = 0;

starLabels.forEach((label) => {
  label.addEventListener('click', () => {
    const ratingValue = parseInt(label.getAttribute('for').split('-')[1]);
    selectedRating = ratingValue;
    console.log(`Selected rating: ${selectedRating}`);
  });
});



app.post('/products/:productId/ratings', (req, res) => {
  const { productId } = req.params;
  const { rating } = req.body;

  // Store the rating in the database, associating it with the product

  res.status(201).json({ message: 'Rating submitted successfully.' });
});



// Assuming you have a function to fetch product information and update the UI
