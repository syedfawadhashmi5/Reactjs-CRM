import React, { useState } from "react";
import Header from "@/components/Header";
import NewContact from "@/components/Contacts/NewContact";

export default function newContact() {
  return (
    <div>
      <Header />
      <NewContact />
    </div>
  );
}
