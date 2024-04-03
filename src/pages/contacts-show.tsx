import React, { useState } from "react";
import Header from "@/components/Header";
import ContactShow from "@/components/Contacts/ContactShow";

export default function contacts() {
  return (
    <div>
      <Header />
      <ContactShow />
    </div>
  );
}
