// Helper function to get the correct image path in both development and production
export function getImagePath(path) {
  const basePath = process.env.NODE_ENV === 'production' ? '/personal' : '';
  return `${basePath}${path}`;
}
