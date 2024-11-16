import React from "react";
import LandingImage from "../../components/LandingPage/LandingImage";
import LandingDescription from "../../components/LandingPage/LandingDescription";
import LandingGalleryLinks from "../../components/LandingPage/LandingGalleryLinks";

const galleryItems = [
  {
    title: "About Us",
    image: "/nusescholars/images/orientation2024.jpg",
    link: "/about-us",
  },
  {
    title: "Humans of DE-Scholars",
    image: "/nusescholars/images/orientation2024.jpg",
    link: "/humans",
  },
];

export default function Page() {
  return (
    <>
      <LandingImage
        imageUrl="/nusescholars/images/orientation2024.jpg"
        title="Welcome to the D-E scholars webpage!"
      />
      <LandingDescription
        text="Welcome to nusdescholars.com! This is an informal website run by the DE-Scholars Student Committee. Through this website, we hope to showcase what goes on in the life of a DE-Scholar. We also hope to provide a wide variety of information on the programme, from the academic aspects of the programme to the administrative aspects of applying to the programme!"
      />
      <LandingGalleryLinks galleryItems={galleryItems} />
    </>
  );
}
