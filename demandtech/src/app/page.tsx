import { Metadata } from 'next'
import {
  Ribbon1,
  Ribbon2,
  LogoSlider,
  Card1,
  SlideTabsExample,
  Button,
  DotGrid
} from '../../components';
import './Homepage.css';

export const metadata: Metadata = {
  title: 'DemandTech | Accelerate Your Business Growth',
  description: 'Transform your demand generation with cutting-edge technology and proven strategies. Drive qualified leads, increase conversions, and scale your business.',
}

export default function HomePage() {
  return (
    <>
      <div style={{ position: 'absolute', width: '100%', zIndex: -1 }}>
        <Ribbon1 />
        <Ribbon2 />
      </div>
      <SlideTabsExample />
      <section className="hero">
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -2 }}>
          <DotGrid />
        </div>

        <div className="headline" style={{ marginLeft: '150px', marginTop: '0px', marginBottom: '50px', fontFamily: 'Clash Display' }}>
          <h1 className="title">
            Intelligence that
            <br />
            Drives <span className="accent">Growth</span>
          </h1>
        </div>
        <section className='cardAndDesc' style={{ display: 'flex', marginTop: '30px', marginLeft: '50px' }}>
          <div className="card-col">
            <Card1 />
          </div>

          <div className="desc-col" style={{ marginRight: '70px' }}>
            <p className="lead">
              <span style={{ fontSize: '64px', marginRight: 0, fontFamily: 'Neue Montreal', alignItems: 'right', justifyContent: 'centre', lineHeight: '1' }}>

              </span>We combine cutting-edge tech with expert insight to pinpoint your highest-value prospects—accelerating your path to revenue fast. We combine cutting-edge tech with expert insight to pinpoint your highest-value prospects—accelerating your path to revenue fast.
            </p>
            <div className="actions" >
              <Button />
            </div>
          </div>
        </section>
      </section>
      <LogoSlider />
    </>
  );
}


