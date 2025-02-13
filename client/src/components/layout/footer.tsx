import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/resources" className="text-base text-gray-500 hover:text-gray-900">
                  Patient Resources
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-base text-gray-500 hover:text-gray-900">
                  Publications
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Professional</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/anastasia-korosteliov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Anastasia Korosteliov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}