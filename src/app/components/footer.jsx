import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1">
            <h2 className="text-lg font-semibold text-white">
              Company Mission
            </h2>
            <p className="mt-4 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
              neque pretium, pulvinar tellus non, tempor velit. Nunc suscipit
              ligula ut ligula congue faucibus.
            </p>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold text-white">Column 2</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Link 3
                </a>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold text-white">Column 3</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Link 3
                </a>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </div>
          <div className="col-span-1">
            <h2 className="text-lg font-semibold text-white">Column 4</h2>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Link 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Link 2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white">
                  Link 3
                </a>
              </li>
              {/* Add more list items as needed */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
