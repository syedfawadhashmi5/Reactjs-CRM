import React from "react";

function ContactsListItem() {
  return (
    <div>
      <div className="contacts__list__item flex w-full">
        <div className="w-1/12 flex items-stretch justify-between ">
          <div className="custom-check-size flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
        </div>
        <div className="w-11/12 flex ">
          <div className="w-1/12 flex justify-end">
            <span className="initials-box">AH</span>
          </div>
          <div className="w-9/12">
            <div>
              <h3>Adrian Hilpert</h3>
              <div className="flex">
                <p className="contact__detail">
                  Scalable at Koelpin, Kunze and Mills{" "}
                </p>
                <div className="inline__tags ml-2">
                  <span className="tag-item warm-color-light">
                    holiday-card
                  </span>{" "}
                  <span className="tag-item hot-color-light">manager</span>
                </div>{" "}
              </div>
            </div>
          </div>
          <div className="w-2/12 flex justify-end items-center">
            <span className="text-xs activity__label">
              last activity 6 days ago
            </span>
            <span className="status-tags cold-color ms-3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsListItem;
