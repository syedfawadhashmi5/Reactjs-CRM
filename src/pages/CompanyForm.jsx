import React, { useState } from "react";
import Header from "@/components/Header";
import NewCompanyForm  from "@/components/Company/NewCompanyForm";

export default function newContact() {
  return (
    <div>
      <Header />
      <NewCompanyForm />
    </div>
  );
}
