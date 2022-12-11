import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { BookCard } from '../../components/BookCard';
import { Footer } from '../../components/Footer';
import { Marginer } from '../../components/Marginer';
import { Navbar } from '../../components/Navbar';
import { About } from './About';
import { BookingSteps } from './BookingSteps';
import { TopCars } from './TopCars';
import { TopSection } from './TopSection';

const PageContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        items-center
        overflow-x-hidden
    `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction='vertical' margin='4em' />
      <BookCard />
      <Marginer direction='vertical' margin='10em' />
      <BookingSteps />
      <Marginer direction='vertical' margin='8em' />
      <About />
      <Marginer direction='vertical' margin='8em' />
      <TopCars />
      <Footer />
    </PageContainer>
  );
}
