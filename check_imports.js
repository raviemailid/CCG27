try {
  const plugin = require('@tanstack/react-start/vite');
  console.log('Success: Found @tanstack/react-start/vite');
} catch (e) {
  console.log('Failed to find @tanstack/react-start/vite:', e.message);
}

try {
  const plugin = require('@tanstack/react-start/server-entry');
  console.log('Success: Found @tanstack/react-start/server-entry');
} catch (e) {
  console.log('Failed to find @tanstack/react-start/server-entry:', e.message);
}
