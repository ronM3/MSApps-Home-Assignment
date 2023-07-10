# pixabay-assignment

# Photos API
## Base URL
# https://msapps-home-test.onrender.com/photos

# Routes
* Get Paginated Photos
* URL: /
*Method: GET
* Query Parameters:
* category (optional): Category of photos to retrieve.
* sortBy (optional): Field to sort the photos by.
* sortDirection (optional): Sort order for the photos.
* page (optional): Page number to retrieve (default: 1).
* Example: GET https://msapps-home-test.onrender.com/photos?category=dogs
* * https://msapps-home-test.onrender.com/photos?category
# Sort Photos by ID
* URL: /:category/sortById/:sortOrder
* Method: GET
* Path Parameters:
* category: Category of photos to sort.
sortOrder: Sort order for the photos.
Example: GET https://msapps-home-test.onrender.com/photos/dogs/sortById/asc
# Sort Photos by Date
URL: /:category/sortByDate/:sortOrder
Method: GET
Path Parameters:
category: Category of photos to sort.
sortOrder: Sort order for the photos.
Example: GET https://msapps-home-test.onrender.com/photos/dogs/sortByDate/desc
