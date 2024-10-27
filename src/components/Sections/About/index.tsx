import Image from "../../../layout/Image";
import Section from "../../../layout/Section";
import SectionTitle from "../../SectionTitle";
import SimpleText from "../../SimpleText";
import about_me from "../../../assets/about_me.jpg";
import Flex from "../../../layout/Flex";

export default function About() {
  return (
    <Section padding="2rem 0 2rem 0" id="about">
      <SectionTitle text="About Me" />
      <Flex gap="2rem" align="center" textAlign="start">
        <Image src={about_me} alt="A photo of mine holding a violin" height="24rem"/>
        <SimpleText fontSize="largeText">
          I have been dedicated to software development since 2022, and since
          2023, I have been working professionally as a full-stack developer,
          focusing on Internet of Things (IoT) solutions. My main stack includes
          React, TypeScript, Next.js, and Node.js.
          <br />
          <br />
          My journey began with studies in frontend development, which quickly
          led me to a position as a Junior Developer. In pursuit of continuous
          learning, I expanded my knowledge to full-stack application
          development. I am also experienced with IoT, Ubidots, MQTT, Figma,
          Tailwind, Sass, and more. I have a particular interest in transforming
          ideas and business rules into real solutions, applying clean
          architecture, Domain-Driven Design (DDD), and the Ports and Adapters
          pattern.
          <br />
          <br />
          In addition to being a developer, I am a musician, teacher, and have
          experience in digital marketing. You might also want to check out my
          YouTube channel.
        </SimpleText>
      </Flex>
    </Section>
  );
}
