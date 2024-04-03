import React from "react";
import CompaniesCard from "../components/Company/companiesCards";
import CompaniesTopheadder from "../components/Company/CompaniesTopheadder";
import CompaniesSideber from "../components/Company/CompaniesSideber";
import Header from "@/components/Header";
import Link from "next/link";

const companies = () => {
  const companies = [
    {
      id: 1,
      companyImage: "/assets/images/32.png",
      companyName: "Braun LLC",
      industry: "Utilities",
      contactsCount: 21,
      dealCount: 3,
    },
    {
      id: 2,
      companyImage: "/assets/images/30.png",
      companyName: "Cartwright - Balistreri",
      industry: "Materials",
      contactsCount: 9,
      dealCount: 0,
    },
    {
      id: 3,
      companyImage: "/assets/images/20.png",
      companyName: "Feeney - Lowe",
      industry: "Information Technology",
      contactsCount: 12,
      dealCount: 2,
    },
    {
      id: 4,
      companyImage: "/assets/images/48.png",
      companyName: "Glover Group",
      industry: "Financials",
      contactsCount: 1,
      dealCount: 1,
    },
    {
      id: 5,
      companyImage: "/assets/images/46.png",
      companyName: "Glover, Jacobi and Armstrong",
      industry: "Energy",
      contactsCount: 5,
      dealCount: 1,
    },
    {
      id: 6,
      companyImage: "/assets/images/33.png",
      companyName: "Heaney Inc",
      industry: "Information Technology",
      contactsCount: 19,
      dealCount: 1,
    },
    {
      id: 7,
      companyImage: "/assets/images/43.png",
      companyName: "Hegmann - Brekke",
      industry: "Utilities",
      contactsCount: 19,
      dealCount: 1,
    },
    {
      id: 8,
      companyImage: "/assets/images/6.png",
      companyName: "Hudson, Jast and Cassin",
      industry: "Energy",
      contactsCount: 19,
      dealCount: 1,
    },
    {
      id: 9,
      companyImage: "/assets/images/12.png",
      companyName: "Koelpin - Braun",
      industry: "Materials",
      contactsCount: 19,
      dealCount: 1,
    },
    {
      id: 10,
      companyImage: "/assets/images/0.png",
      companyName: "Kuhic, Koss and Robel",
      industry: "Financials",
      contactsCount: 19,
      dealCount: 1,
    },
    {
      id: 11,
      companyImage: "/assets/images/35.png",
      companyName: "Larkin Group",
      industry: "Utilities",
      contactsCount: 19,
      dealCount: 1,
    },
    {
      id: 12,
      companyImage: "/assets/images/53.png",
      companyName: "Lebsack, Reinger and Rodriguez",
      industry: "Utilities",
      contactsCount: 19,
      dealCount: 1,
    },
  ];

  return (
    <div>
      <Header />
      {/* <div className="sidebar-wapper"> */}
      {/* <main id="main-content"> */}
      <div className="container mx-auto grid grid-cols-4 gap-4">
        <CompaniesSideber />
        <div className="col-span-3 RaList-main">
          <CompaniesTopheadder />
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {companies.map((company: any) => (
                <Link href="/company">
                  <CompaniesCard
                    key={company.id}
                    companyImage={company.companyImage}
                    companyName={company.companyName}
                    industry={company.industry}
                    contactsCount={company.contactsCount}
                    dealCount={company.dealCount}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* </main> */}
      {/* </div> */}
    </div>
  );
};

export default companies;
