import React from 'react';

const CompaniesCard = ({ companyImage, companyName, industry, contactsCount, dealCount }) => {
  return (
    <div>
      <div className='RaList-content'>
          <div className="MuiBox-root css-1qkoffw">
            <div className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 css-znawvd">
              <div className="MuiBox-root css-dvxtzn">
                <div className="MuiAvatar-root MuiAvatar-circular css-28ergq">
                  <img alt="Company Logo" src={companyImage} className="large css-1hy9t21" />
                </div>
                <div className="MuiBox-root css-198m5jg">
                  <h6 className="MuiTypography-root MuiTypography-subtitle2 css-c7dfze">{companyName}</h6>
                  <span className="MuiTypography-root MuiTypography-body2 css-u30lmt">{industry}</span>
                </div>
              </div>
              <div className="MuiBox-root css-kr4k96">
                <div className="MuiBox-root css-70qvj9">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-colorDisabled MuiSvgIcon-fontSizeMedium css-1u4nuan" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountCircleIcon">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path>
                  </svg>
                  <div>
                    <h6 className="MuiTypography-root MuiTypography-subtitle2 css-t1b350">{contactsCount}</h6>
                    <span className="MuiTypography-root MuiTypography-caption css-rqnof7">contacts</span>
                  </div>
                </div>
                <div className="MuiBox-root css-70qvj9">
                  <svg className="MuiSvgIcon-root MuiSvgIcon-colorDisabled MuiSvgIcon-fontSizeMedium css-1u4nuan" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MonetizationOnIcon">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"></path>
                  </svg>
                  <div>
                    <h6 className="MuiTypography-root MuiTypography-subtitle2 css-t1b350">{dealCount}</h6>
                    <span className="MuiTypography-root MuiTypography-caption css-rqnof7">deal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default CompaniesCard;
