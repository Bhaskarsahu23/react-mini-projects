import { lazy, Suspense } from 'react';

const Loading = lazy(() => import('./components/Loading'));
const Navbar = lazy(() => import('./components/Navbar'));
const Hero = lazy(() => import('./components/Hero'));
const Highlights = lazy(() => import('./components/Highlights'));
const Model = lazy(() => import('./components/Model'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <main className="bg-black overflow-y-auto">
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
