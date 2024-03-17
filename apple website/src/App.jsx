import { Suspense, lazy } from 'react';
const Features = lazy(() => import('./components/Features'));
const Footer = lazy(() => import('./components/Footer'));
const Hero = lazy(() => import('./components/Hero'));
const Highlights = lazy(() => import('./components/Highlights'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Model = lazy(() => import('./components/Model'));
const Navbar = lazy(() => import('./components/Navbar'));
const Loading = lazy(() => import('./components/Loading'));

function App() {
  return (
    <main className="bg-black">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <Highlights />
        <Model />
        <Features />
        <HowItWorks />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
