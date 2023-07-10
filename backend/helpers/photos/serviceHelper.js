// sort the photos by ID
function sortPhotosById(photos, sortOrder) {
  if (sortOrder === "asc") {
    return photos.sort((a, b) => a.id - b.id);
  } else if (sortOrder === "desc") {
    return photos.sort((a, b) => b.id - a.id);
  } else {
    throw new Error("Invalid sort order");
  }
}

// sort the photos by Date
function sortPhotosByDate(photos, sortOrder) {
  return photos.sort((a, b) => {
    const dateA = extractDateFromURL(a.userImageURL);
    const dateB = extractDateFromURL(b.userImageURL);
    if (sortOrder === "asc") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });
}
// extract the date from the url
function extractDateFromURL(url) {
  const dateString = url.match(/\d{4}\/\d{2}\/\d{2}/)?.[0];
  if (dateString) {
    const date = new Date(dateString.replace(/\//g, "-"));
    return date.getTime();
  }
  return 0; 
}

// calculate Pagination 
function calculatePagination(photos, pageSize, currentPage) {
    const totalItems = photos.length;
    const totalPages = Math.ceil(totalItems / pageSize);
    const hasNextPage = currentPage < totalPages;
    const hasPrevPage = currentPage > 1;
  
    return {
      page: currentPage,
      totalItems,
      totalPages,
      hasNextPage,
      hasPrevPage,
    };
  }

module.exports = { sortPhotosById, sortPhotosByDate, calculatePagination };
