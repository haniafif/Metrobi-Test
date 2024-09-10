import React from "react";
import { Section, FlexRow, FlexColumn } from "./styled.ts"; // Import the styled components

const Question3 = () => {
  // Define the sections with necessary width, height, and background color
  const sections = {
    header: {
      width: "100%",
      height: "90px",
      backgroundColor: "#54D5EB",
      title: "Header",
    },
    hero: {
      width: "100%",
      height: "200px",
      backgroundColor: "#D7C9E3",
      title: "Hero",
    },
    mainContent: {
      width: "100%",
      height: "450px",
      backgroundColor: "#F5C632",
      title: "Main Content",
    },
    sidebar: {
      width: "100%",
      height: "450px",
      backgroundColor: "#9FC363",
      title: "Sidebar",
    },
    extraContent: {
      width: "100%",
      height: "200px",
      backgroundColor: "#898989",
      title: "Extra Content",
    },
    relatedImages: {
      width: "140%",
      height: "100px",
      backgroundColor: "#2BB673",
      title: "Related Images",
    },
    relatedPosts: {
      width: "60%",
      height: "100px",
      backgroundColor: "#F3CCDE",
      title: "Related Posts",
    },
    footer: {
      width: "100%",
      height: "90px",
      backgroundColor: "#FFA500",
      title: "Footer",
    },
  };

  return (
    <div>
      <Section
        width={sections.header.width}
        height={sections.header.height}
        backgroundColor={sections.header.backgroundColor}
      >
        {sections.header.title}
      </Section>

      <FlexRow>
        <FlexColumn width={"40%"}>
          <Section
            width={sections.hero.width}
            height={sections.hero.height}
            backgroundColor={sections.hero.backgroundColor}
          >
            {sections.hero.title}
          </Section>
          <Section
            width={sections.sidebar.width}
            height={sections.sidebar.height}
            backgroundColor={sections.sidebar.backgroundColor}
          >
            {sections.sidebar.title}
          </Section>
        </FlexColumn>
        <FlexColumn width={"60%"}>
          <Section
            width={sections.mainContent.width}
            height={sections.mainContent.height}
            backgroundColor={sections.mainContent.backgroundColor}
          >
            {sections.mainContent.title}
          </Section>

          <Section
            width={sections.extraContent.width}
            height={sections.extraContent.height}
            backgroundColor={sections.extraContent.backgroundColor}
          >
            {sections.extraContent.title}
          </Section>
        </FlexColumn>
      </FlexRow>

      <FlexRow>
        <Section
          width={sections.relatedImages.width}
          height={sections.relatedImages.height}
          backgroundColor={sections.relatedImages.backgroundColor}
        >
          {sections.relatedImages.title}
        </Section>
        <Section
          width={sections.relatedPosts.width}
          height={sections.relatedPosts.height}
          backgroundColor={sections.relatedPosts.backgroundColor}
        >
          {sections.relatedPosts.title}
        </Section>
      </FlexRow>

      <Section
        width={sections.footer.width}
        height={sections.footer.height}
        backgroundColor={sections.footer.backgroundColor}
      >
        {sections.footer.title}
      </Section>
    </div>
  );
};

export default Question3;
