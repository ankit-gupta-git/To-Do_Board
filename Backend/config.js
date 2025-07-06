// Backend Configuration
export const config = {
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://ankitkumargupta752:DKOg23XeHYzVP4zI@to-do.fv6uvoi.mongodb.net/?retryWrites=true&w=majority&appName=To-Domongodb://localhost:27017/todo-board',
  JWT_SECRET: process.env.JWT_SECRET || '52d1ee03448107f9a604c982330a419564c803fe8eafbf2ae742bf58437dd4743c03dc83c3bb7ead3540e23f56947e2377c432153fae32f46003d25c5ae08f1a',
  PORT: process.env.PORT || 5000,
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173'
}; 