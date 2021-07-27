import React from 'react';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
import { JumbotronContainer } from '../containers/jumbotron';

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
