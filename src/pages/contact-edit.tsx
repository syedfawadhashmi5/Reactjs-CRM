import React, { useState } from "react";
import Header from "@/components/Header";
import ContactEdit from "@/components/Contacts/ContactEdit";

export default function editContact() {
  return (
    <div>
      <Header />
      <ContactEdit />
    </div>
  );
}
