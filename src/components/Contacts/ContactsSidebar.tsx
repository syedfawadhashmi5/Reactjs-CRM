import React from "react";

function ContactsSidebar() {
  return (
    <div>
      <div className="search__box">
        <div className="relative">
          <input type="Search" className="w-full h-10" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 absolute right-0 align-middle"
          >
            <path
              fill-rule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <div className="filter__time">
        <div className="flex flex-row ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <div>
            <ul>
              <li>
                <button>Last seen</button>
              </li>
              <li>
                <button>Today</button>
              </li>
              <li>
                <button>This week</button>
              </li>
              <li>
                <button>Before this week</button>
              </li>
              <li>
                <button>Before this month</button>
              </li>
              <li>
                <button>Before Last month</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="filter__time">
        <div className="flex flex-row ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
            />
          </svg>

          <div>
            <ul>
              <li>Status</li>
              <li>
                <button>
                  Cold <span className="status-tags cold-color"></span>
                </button>
              </li>
              <li>
                <button>
                  Warm <span className="status-tags warm-color"></span>
                </button>
              </li>
              <li>
                <button>Hot <span className="status-tags hot-color"></span></button>
              </li>
              <li>
                <button>In contract <span className="status-tags in-contract-color"></span></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="filter__time">
        <div className="flex flex-row ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
              clip-rule="evenodd"
            />
          </svg>

          <div className="tags__list">
            <ul>
              <li className="list-heading">Tags</li>
              <li >
                <label className="filter-tags hot-color-light">
                  <span>footbal-fan</span>
                  <input type={"checkbox"} />
                </label>
              </li>
              <li >
                <label className="filter-tags warm-color-light">
                  <span>holiday-card</span>
                  <input type={"checkbox"} />
                </label>
              </li>
              <li >
                <label className="filter-tags hot-color-light">
                  <span>influencer</span>
                  <input type={"checkbox"} />
                </label>
              </li>
              <li >
                <label className="filter-tags hot-color-light">
                  <span>manager</span>
                  <input type={"checkbox"} />
                </label>
              </li>
              <li >
                <label className="filter-tags cold-color-light">
                  <span>musician</span>
                  <input type={"checkbox"} />
                </label>
              </li>
              <li >
                <label className="filter-tags cold-color-light">
                  <span>vip</span>
                  <input type={"checkbox"} />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="filter__time">
        <div className="flex flex-row ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
          </svg>

          <div>
            <ul>
              <li>Account Manager</li>
              <li className="filter-tags">
                <label>
                  <span>Me</span>
                  <input type={"checkbox"} />
                </label>
              </li>              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsSidebar;
