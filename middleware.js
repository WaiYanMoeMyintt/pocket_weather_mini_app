export default (req, res) => {
  res.status(200).json({ message: 'Middleware is working!' });
};

export const config = {
  matcher: '/(.*)',
};
