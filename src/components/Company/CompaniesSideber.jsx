import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BusinessIcon from "@mui/icons-material/Business";

const CompaniesSideber = () => {
  return (
    <div>
      <div className="flex flex-col space-y-4 siderbar-menu">
        <form>
          <div className="flex items-center border border-gray-300 rounded-md sideber-list">
            <div className="siderber-item">
              <input
                id="q"
                name="q"
                placeholder="Search"
                type="text"
                className="px-3 py-2 flex-1 rounded-md focus:outline-none siderber-input"
              />
              <div className="p-2 bg-gray-200 rounded-md sideber-icon">
                <svg
                  className="w-6 h-6 text-gray-600 css-1fcitfd"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                    fill="#718096"
                  />
                </svg>
              </div>
            </div>
          </div>
        </form>
        <div>
          <div className="flex items-center text-sm text-gray-500 list-icon">
            <BusinessIcon className="black__color me-2" />
            <span>Size</span>
          </div>
          <ul className="space-y-1 ul-list">
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>1 employee</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>2-9 employees</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>10-49 employees</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>50-249 employees</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>250 or more employees</span>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center text-sm text-gray-500">
            <LocalShippingIcon className="black__color me-2" />
            Sector
          </div>
          <ul className="space-y-1">
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Communication Services</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Consumer Discretionary</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Consumer Staples</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Energy</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Financials</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Health Care</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Industrials</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Information Technology</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Materials</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Real Estate</span>
              </button>
            </li>
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Utilities</span>
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div className="flex items-center text-sm text-gray-500">
            <svg
              className="w-6 h-6 text-gray-600 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"
                fill="#718096"
              />
            </svg>
            Account manager
          </div>
          <ul className="space-y-1">
            <li>
              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none">
                <span>Me</span>
                <svg
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"
                    fill="#718096"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSideber;
