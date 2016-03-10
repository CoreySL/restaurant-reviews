var myRestaurants = [
  {
    id: 1,
    name: "STK Las Vegas",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    totalRatings: 1,
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 4,
        number: 1
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 5,
        number: 2
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 2,
        number: 4
      }
    ]
  },
  {
    id: 2,
    name: "Denny's",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      }
    ]
  },
  {
    id: 3,
    name: "Mcdonalds",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      }
    ]
  },
  {
    id: 4,
    name: "Burger King",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      }
    ]
  },
  {
    id: 5,
    name: "Wendy's",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      }
    ]
  }
]


var backgroundArea = document.getElementById('background-area');
var searchResultsArea = document.getElementById('results');

//clear children function
function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function toggle(value, element) {
  var classArray = element.className.split(' ');
  var position = classArray.indexOf(value);

  if (position === -1) {
    classArray.push(value);
  }
  else {
    classArray.splice(position, 1);
  }

  element.className = classArray.join(' ');
}


function restaurant(data) {
  var theRestaurant = document.createElement('div');
  var imgBox = document.createElement('div');
  var restaurantImg = document.createElement('img');
  var reviewsButton = document.createElement('button');
  reviewsButton.textContent = "Reviews";
  var bodyBox = document.createElement('div');
  var titleEl = document.createElement('h4');
  var restaurantTitle = document.createTextNode(data.name);
  var catEl = document.createElement('p');
  var restaurantCategory = document.createTextNode("category: " + data.category);
  var locationEl = document.createElement('p');
  var restaurantLocation = document.createTextNode('location: ' + data.location);
  var priceEl = document.createElement('p');
  var restaurantPrice = document.createTextNode('price: ' + data.price);

  theRestaurant.className = "media panel panel-default";
  imgBox.className = "media-left media-top";
  restaurantImg.className = "media-object";
  restaurantImg.src = data.image;
  restaurantImg.setAttribute('width', '175vw');
  reviewsButton.setAttribute('type','button');
  reviewsButton.setAttribute('class','btn btn-primary');
  reviewsButton.setAttribute('data-id',data.id);
  bodyBox.className = "media-body";
  titleEl.className = "media-heading";

  imgBox.appendChild(restaurantImg);
  theRestaurant.appendChild(imgBox);
  titleEl.appendChild(restaurantTitle);
  bodyBox.appendChild(titleEl);
  catEl.appendChild(restaurantCategory);
  bodyBox.appendChild(catEl);
  locationEl.appendChild(restaurantLocation);
  bodyBox.appendChild(locationEl);
  priceEl.appendChild(restaurantPrice);
  bodyBox.appendChild(priceEl);
  bodyBox.appendChild(reviewsButton);
  theRestaurant.appendChild(bodyBox);

  return theRestaurant;
}

//function that creates the review page
function restaurantPage(data) {
  var restaurantBox = document.createElement('div');
  var writeButton = document.createElement('button');
  var pageHeader = document.createElement('h1');
  pageHeader.textContent = data.name;
  var pageInfo = document.createElement('div');
  var pricePara = document.createElement('p');
  var locationPara = document.createElement('p');
  var reviewImage = document.createElement('img');
  var leftImage = document.createElement('div');
  var reviewRow = document.createElement('div');
  var reviewCol = document.createElement('div');


  restaurantBox.setAttribute('class','container panel panel-default');

  writeButton.setAttribute('type','button');
  writeButton.setAttribute('class','btn btn-danger btn-lg write-button');
  writeButton.textContent = "Write a review!";
  writeButton.setAttribute('data-id',data.id);
  //CHECK IF THIS works


  pageInfo.setAttribute('class','col-xs-6 col-xs-offset-6');
  pricePara.textContent = data.price;
  locationPara.textContent = data.location;

  leftImage.setAttribute('class','col-xs-6 img-responsive');

  reviewImage.setAttribute('class','media-object');
  reviewImage.src = data.image;
  reviewImage.setAttribute('width','300px');

  reviewRow.setAttribute('class','row');
  reviewRow.setAttribute('id','review-row');

  reviewCol.setAttribute('class','col-xs-12');
  reviewCol.setAttribute('id','review-col');

  //looks through myRestaurant array and finds all of its reviews
  for (var r = 0; r < data.reviews.length; r++) {
    var userBox = document.createElement('div');
    var userPanelBody = document.createElement('div');
    var userText = document.createElement('p');
    var userName = document.createElement('h5');
    var userThumbnail = document.createElement('div');

    var userImage = document.createElement('img');

    var userBody = document.createElement('div');
    var starOne = document.createElement('i');
    var starTwo = document.createElement('i');
    var starThree = document.createElement('i');
    var starFour = document.createElement('i');
    var starFive = document.createElement('i');
    var starDiv = document.createElement('div');
    starOne.setAttribute('class','fa fa-star');
    starTwo.setAttribute('class','fa fa-star');
    starThree.setAttribute('class','fa fa-star');
    starFour.setAttribute('class','fa fa-star');
    starFive.setAttribute('class','fa fa-star');
    starOne.setAttribute('style','color: gold');
    starTwo.setAttribute('style','color: gold');
    starThree.setAttribute('style','color: gold');
    starFour.setAttribute('style','color: gold');
    starFive.setAttribute('style','color: gold');

    userBody.setAttribute('class','media-body');
    userPanelBody.setAttribute('class','panel-body');
    userBox.setAttribute('class','media panel');
    userThumbnail.setAttribute('class','media-left');
    userImage.setAttribute('class','media-object');

    userText.textContent = data.reviews[r].text;
    userName.textContent = data.reviews[r].name;
    userImage.src = data.reviews[r].thumbnail;
    userImage.setAttribute('width','100px');

        if (data.reviews[r].ratings == 1) {
          starDiv.appendChild(starOne);
        }

        if (data.reviews[r].ratings == 2) {
          starDiv.appendChild(starOne);
          starDiv.appendChild(starTwo);

        }
        if (data.reviews[r].ratings == 3) {
          starDiv.appendChild(starOne);
          starDiv.appendChild(starTwo);
          starDiv.appendChild(starThree);

        }
        if (data.reviews[r].ratings == 4) {
          starDiv.appendChild(starOne);
          starDiv.appendChild(starTwo);
          starDiv.appendChild(starThree);
          starDiv.appendChild(starFour);

        }
        if (data.reviews[r].ratings== 5) {
          starDiv.appendChild(starOne);
          starDiv.appendChild(starTwo);
          starDiv.appendChild(starThree);
          starDiv.appendChild(starFour);
          starDiv.appendChild(starFive);
        }

    userThumbnail.appendChild(userImage);
    userBody.appendChild(starDiv);
    userBody.appendChild(userName);
    userBody.appendChild(userText);
    userPanelBody.appendChild(userThumbnail);
    userPanelBody.appendChild(userBody);
    userBox.appendChild(userPanelBody);
    reviewCol.appendChild(userBox);
  }
  //end restaurant review loop


  //review form
  var formBox = document.createElement('div');
  var formBody = document.createElement('div');
  var formEl = document.createElement('form');
  var formGroup = document.createElement('div');
  var submitButton = document.createElement('button');
  var inputName = document.createElement('input');
  var textArea = document.createElement('textarea');

  var ratingDiv = document.createElement('div');
  var labelOne = document.createElement('label');
  var inputOne = document.createElement('input');
  var labelTwo = document.createElement('label');
  var inputTwo = document.createElement('input');
  var labelThree = document.createElement('label');
  var inputThree = document.createElement('input');
  var labelFour = document.createElement('label');
  var inputFour = document.createElement('input');
  var labelFive = document.createElement('label');
  var inputFive = document.createElement('input');

  var iOne = document.createElement('i');
  iOne.setAttribute('id',"one-star");
  var iTwo = document.createElement('i');
  iTwo.setAttribute('id',"two-star");

  var iThree = document.createElement('i');
  iThree.setAttribute('id',"three-star");

  var iFour = document.createElement('i');
  iFour.setAttribute('id',"four-star");

  var iFive = document.createElement('i');
  iFive.setAttribute('id',"five-star");

  submitButton.setAttribute('id','submit-button');
  submitButton.setAttribute('data-id',data.id);

  iOne.setAttribute('class','fa fa-star fa-2x');
  iTwo.setAttribute('class','fa fa-star fa-2x');
  iThree.setAttribute('class','fa fa-star fa-2x');
  iFour.setAttribute('class','fa fa-star fa-2x');
  iFive.setAttribute('class','fa fa-star fa-2x');

  inputOne.setAttribute('type','radio');
  labelOne.setAttribute('value','1');
  labelOne.setAttribute('id','1');

  //labelOne.setAttribute('id','one-star');
  inputOne.setAttribute('autocomplete','off');

  inputTwo.setAttribute('type','radio');
  labelTwo.setAttribute('value','2');
  labelTwo.setAttribute('id','2');

  //labelTwo.setAttribute('id','two-star');
  inputTwo.setAttribute('autocomplete','off');

  inputThree.setAttribute('type','radio');
  labelThree.setAttribute('value','3');
  labelThree.setAttribute('id','3');

  //labelThree.setAttribute('id','three-star');
  inputThree.setAttribute('autocomplete','off');

  inputFour.setAttribute('type','radio');
  labelFour.setAttribute('value','4');
  labelFour.setAttribute('id','4');
  //labelFour.setAttribute('id','four-star');
  inputFour.setAttribute('autocomplete','off');

  inputFive.setAttribute('type','radio');
  labelFive.setAttribute('value','5');
  labelFive.setAttribute('id','5');
  //labelFive.setAttribute('id','five-star');
  inputFive.setAttribute('autocomplete','off');

  labelOne.setAttribute('class','btn');
  labelTwo.setAttribute('class','btn');
  labelThree.setAttribute('class','btn');
  labelFour.setAttribute('class','btn');
  labelFive.setAttribute('class','btn');

  ratingDiv.setAttribute('class','btn-group');
  ratingDiv.setAttribute('data-toggle','buttons');

  formBox.setAttribute('class','hidden write-review col-xs-5 panel panel-default');
  formBody.setAttribute('class','panel-body');
  formGroup.setAttribute('class','form-group');


  inputName.setAttribute('type','name');
  inputName.setAttribute('class','form-group');
  inputName.setAttribute('placeholder','Name');
  inputName.setAttribute('id','name-input');

  textArea.setAttribute('class','form-control');
  textArea.setAttribute('rows','5');
  textArea.setAttribute('type','text');
  textArea.setAttribute('placeholder','Write your review here!');
  textArea.setAttribute('id','review-input');
  textArea.setAttribute('name','review-input');

  submitButton.setAttribute('type','button');
  submitButton.setAttribute('class','btn btn-danger');
  submitButton.setAttribute('id', data.id);
  submitButton.textContent = "Submit";

  labelOne.appendChild(iOne);
  labelTwo.appendChild(iTwo);
  labelThree.appendChild(iThree);
  labelFour.appendChild(iFour);
  labelFive.appendChild(iFive);

  labelOne.appendChild(inputOne);
  labelTwo.appendChild(inputTwo);
  labelThree.appendChild(inputThree);
  labelFour.appendChild(inputFour);
  labelFive.appendChild(inputFive);

  ratingDiv.appendChild(labelOne);
  ratingDiv.appendChild(labelTwo);
  ratingDiv.appendChild(labelThree);
  ratingDiv.appendChild(labelFour);
  ratingDiv.appendChild(labelFive);

  formGroup.appendChild(inputName);
  formGroup.appendChild(ratingDiv);
  formGroup.appendChild(textArea);
  formGroup.appendChild(submitButton);
  formEl.appendChild(formGroup);
  formBody.appendChild(formEl);
  formBox.appendChild(formBody);
  //end form box

  restaurantBox.appendChild(pageHeader);
  leftImage.appendChild(reviewImage);
  pageInfo.appendChild(pricePara);
  pageInfo.appendChild(locationPara);
  restaurantBox.appendChild(pageInfo);
  restaurantBox.appendChild(leftImage);
  restaurantBox.appendChild(writeButton);
  restaurantBox.appendChild(formBox);
  reviewRow.appendChild(reviewCol);
  restaurantBox.appendChild(reviewRow);
  return restaurantBox;
}


//event listener on search bar
var search = document.getElementById('search');
search.addEventListener('click', function() {
  clearList(backgroundArea);
  clearList(searchResultsArea);
  var resultsArray = [];
  var input = document.getElementById('search-input');
  input = input.value;
  for (var i = 0; i < myRestaurants.length; i++) {
    for (var t = 0; t < myRestaurants[i].tags.length; t++) {
      if (myRestaurants[i].tags[t] === input.toLowerCase()) {
        resultsArray.push(myRestaurants[i]);
      }
    }
  }
  if (resultsArray.length > 0) {
    for (var d = 0; d < resultsArray.length; d++) {
      searchResultsArea.appendChild(restaurant(resultsArray[d]));
    }
  }
  else {
    var noResultHeader = document.createElement('h4');
    var noResultText = document.createTextNode('No matches found.');
    noResultHeader.appendChild(noResultText);
    searchResultsArea.appendChild(noResultHeader);
  }
});

document.body.addEventListener('click', function(event) {
  var buttonId = event.target.getAttribute('data-id');
  var type = event.target.textContent;
  var starType = event.target.id;
  if (type === "Reviews") {
    console.log('hey');
    for (var z = 0; z < myRestaurants.length; z++) {
      //console.log(restaurantId);
      // console.log(myRestaurants[z].id);
      if (myRestaurants[z].id == buttonId) {
        clearList(backgroundArea);
        clearList(searchResultsArea);
        //calling the function and appending it to the review page
        searchResultsArea.appendChild(restaurantPage(myRestaurants[z]));
      }
    }
  }

  if (type === "Write a review!") {
    console.log('write');
    var parent = event.target.parentNode;
    var writeReview = parent.getElementsByClassName('write-review')[0];
    toggle('hidden',writeReview);
  }

  if (starType == "one-star") {
    console.log('1');
    var starInput = 1;
  }
  if (starType == "two-star") {
    console.log('2');
    var starInput = 2;
  }
  if (starType == "three-star") {
    console.log('1');
    var starInput = 3;
  }
  if (starType == "four-star") {
    console.log('1');
    var starInput = 4;
  }
  if (starType == "five-star") {
    console.log('1');
    var starInput = 5;
  }

  if (type === "Submit") {
    for (var n = 0; n < myRestaurants.length; n++) {
      if (myRestaurants[n].id == buttonId) {

        var nameInput = document.getElementById('name-input');
        var reviewInput = document.getElementById('review-input');
        var imageInput = myRestaurants[n].image;
        reviewInput = reviewInput.value;
        nameInput = nameInput.value;

        var userData = {};
        userData.name = nameInput;
        userData.text = reviewInput;
        userData.thumbnail = imageInput;
        userData.ratings = starInput;
        var reviewsArray = myRestaurants[n].reviews;
        var reviewsArrayLength = reviewsArray.length + 1;
        userData.number = reviewsArrayLength;

        reviewsArray.push(userData);
        console.log(reviewsArray);


        var updatedRow = document.getElementById('review-col');

        for (var g = 0; g < myRestaurants[n].reviews.length; g++) {

          if (myRestaurants[n].reviews[g].number == reviewsArrayLength) {
              console.log('100');
            var updatedCol = document.createElement('div');
            var newStarDiv = document.createElement('div');
            var newBox = document.createElement('div');
            var newBody = document.createElement('div');
            var newName = document.createElement('h5');
            var newText = document.createElement('p');

            var newThumbnail = document.createElement('div');
            var newImage = document.createElement('img');
            var newPanelBody = document.createElement('div');

            var starOne = document.createElement('i');
            var starTwo = document.createElement('i');
            var starThree = document.createElement('i');
            var starFour = document.createElement('i');
            var starFive = document.createElement('i');

            if (myRestaurants[n].reviews[g].ratings = 1) {
              newStarDiv.appendChild(starOne);
            }
            if (myRestaurants[n].reviews[g].ratings = 2) {
              newStarDiv.appendChild(starOne);
              newStarDiv.appendChild(starTwo);

            }
            if (myRestaurants[n].reviews[g].ratings = 3) {
              newStarDiv.appendChild(starOne);
              newStarDiv.appendChild(starTwo);
              newStarDiv.appendChild(starThree);
            }
            if (myRestaurants[n].reviews[g].ratings = 4) {
              newStarDiv.appendChild(starOne);
              newStarDiv.appendChild(starTwo);
              newStarDiv.appendChild(starThree);
              newStarDiv.appendChild(starFour);
            }
            if (myRestaurants[n].reviews[g].ratings = 5) {
              newStarDiv.appendChild(starOne);
              newStarDiv.appendChild(starTwo);
              newStarDiv.appendChild(starThree);
              newStarDiv.appendChild(starFour);
              newStarDiv.appendChild(starFive);
            }

            newPanelBody.setAttribute('class','panel-body');
            updatedCol.setAttribute('class','col-xs-12');
            //updatedCol.setAttribute('id','review-col');
            newBox.setAttribute('class','media panel');
            newThumbnail.setAttribute('class','media-left');
            newImage.setAttribute('class','media-object');
            newBody.setAttribute('class','media-body');
            newText.textContent = myRestaurants[n].reviews[g].text;
            newName.textContent = myRestaurants[n].reviews[g].name;
            newImage.src = myRestaurants[n].reviews[g].thumbnail;
            newImage.setAttribute('width','100px');

            newThumbnail.appendChild(newImage);
            newBody.appendChild(newStarDiv);
            newBody.appendChild(newName);
            newBody.appendChild(newText);
            newPanelBody.appendChild(newThumbnail);
            newPanelBody.appendChild(newBody);
            newBox.appendChild(newPanelBody);
            console.log(updatedRow);
            updatedRow.insertBefore(newBox, updatedRow.firstChild);
          } // end if statement
        } // end for loop variable g
      } //end if restaurant[n].id == button Id
    } //end for loop variable n
  } //end if type = submit
}); //end event listener


document.body.addEventListener('mouseover', function(event) {
  var starId = event.target.getAttribute('value');

  var iOne = document.getElementById('one-star');
  var iTwo = document.getElementById('two-star');
  var iThree = document.getElementById('three-star');
  var iFour = document.getElementById('four-star');
  var iFive = document.getElementById('five-star');

  if (starId == "5") {
    iOne.setAttribute('style', 'color: gold;');
    iTwo.setAttribute('style', 'color: gold;');
    iThree.setAttribute('style', 'color: gold;');
    iFour.setAttribute('style', 'color: gold;');
    iFive.addEventListener('mouseout', function(event) {
      iOne.setAttribute('style','color: none;');
      iTwo.setAttribute('style','color: none;');
      iThree.setAttribute('style','color: none;');
      iFour.setAttribute('style','color: none;');
    });
  }
  if (starId == "4") {
    iOne.setAttribute('style', 'color: gold;');
    iTwo.setAttribute('style', 'color: gold;');
    iThree.setAttribute('style', 'color: gold;');
    iFour.addEventListener('mouseout', function(event) {
      iOne.setAttribute('style','color: none;');
      iTwo.setAttribute('style','color: none;');
      iThree.setAttribute('style','color: none;');
    });
  }
  if (starId == "3") {
    iOne.setAttribute('style', 'color: gold;');
    iTwo.setAttribute('style', 'color: gold;');
    iThree.addEventListener('mouseout', function(event) {
      iOne.setAttribute('style','color: none;');
      iTwo.setAttribute('style','color: none;');
    });
  }
  if (starId == "2") {
    iOne.setAttribute('style', 'color: gold;');
    iTwo.addEventListener('mouseout', function(event) {
      iOne.setAttribute('style','color: none;');
    });
  }

});
