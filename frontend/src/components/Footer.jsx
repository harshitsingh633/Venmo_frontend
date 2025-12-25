export function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-gray-300 mt-20 py-6 text-center text-sm text-gray-600">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-6">
          <a
            href="https://github.com/harshitsingh633/Venmo_frontend"
            className="hover:text-blue-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            About
          </a>

          <a href="#" className="hover:text-blue-500 transition-colors">
            Help
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-blue-500 transition-colors">
            Terms
          </a>
        </div>
        <p className="text-gray-500 mt-2">
          © {new Date().getFullYear()} Venmo, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
