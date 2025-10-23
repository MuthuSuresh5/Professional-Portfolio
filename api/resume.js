export default function handler(req, res) {
  // Redirect to the PDF file in public folder
  res.redirect(301, 'https://muthusuresh-portfolio.vercel.app/MuthuSuresh_CV.pdf');
}