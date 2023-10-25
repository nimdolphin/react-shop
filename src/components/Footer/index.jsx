const Footer = () => {
  return (
    <footer className="page-footer #ec407a pink lighten-1">
      <div className="footer-copyright #f48fb1 pink lighten-3">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  );
};

export { Footer };
