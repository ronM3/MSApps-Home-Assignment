const photosHelper = require("../helpers/photos/SAHelpers");
const serviceHelper = require("../helpers/photos/serviceHelper");

async function getPhotos(category) {
  const endPoint = category ? `${process.env.API_ENDPOINT}&q=${category}&per_page=200` : `${process.env.API_ENDPOINT}&q&per_page=200`
  const allPhotos = await photosHelper.cacheHandler(60, category, async () => {

    return await photosHelper.getAsync(endPoint);
  });
  return allPhotos;
}

async function sortPhotosById(photos, sortOrder) {
  const response = serviceHelper.sortPhotosById(photos, sortOrder);
  return response;
}

async function sortPhotosByDate(photos, sortOrder) {
  const response = serviceHelper.sortPhotosByDate(photos, sortOrder);
  return response;
}

module.exports = { getPhotos, sortPhotosById, sortPhotosByDate };
