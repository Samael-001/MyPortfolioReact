import React from 'react';
import { MdDesktopMac, MdCode, MdPhonelinkSetup } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="What i will do for you" heading="Services" />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Pentesting"
            desc="Can conduct a pentest on your infrastructure and report you the vulnerablities with Poc."
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Scripting"
            desc="Can Create a Python or Bash Script for task Like Linux Automation, Web scrapping etc. "
          />
          <ServicesSectionItem
            icon={<MdPhonelinkSetup />}
            title="Web Dev"
            desc="Can design your website according to your demand in ReactJs or with Html,Css and Js.  "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
