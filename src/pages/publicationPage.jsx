import React from 'react';
import HeaderWrapper from "../components/layout/HeaderWrapper";
import Footer from "../components/layout/footer";
import Publications from "../components/layout/publication";

export default function PublicationPage() {
  return (
    <>
      <HeaderWrapper />
      <div className="pt-24">
        <Publications />
      </div>
      <Footer />
    </>
  );
}
