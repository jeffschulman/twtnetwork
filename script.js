// Node.js server code

const { Storage } = require('@google-cloud/storage');
const storage = new Storage();
const bucketName = 'videostwt';

// Generate a signed URL for uploading to GCS
async function generateSignedUrl() {
  const options = {
    version: 'v4',
    action: 'write',
    expires: Date.now() + 15 * 60 * 1000, // 15 minutes
    contentType: 'video/mp4' // Set the content type of the uploaded file
  };

  // Get a signed URL for uploading to GCS
  const [url] = await storage.bucket(bucketName).file('IMG_4060.MOV').getSignedUrl(options);
  return url;}
  console.log('Signed URL for uploading:', url);

generateSignedUrl().catch(console.error);