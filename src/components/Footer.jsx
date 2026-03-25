const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 text-center text-sm text-gray-600">
      &copy; {new Date().getFullYear()}{" "}
      <span className="font-semibold">NextJS</span> - All Rights Reserved!
    </footer>
  );
};

export default Footer;
