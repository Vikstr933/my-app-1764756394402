import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { LiveDemo } from './components/LiveDemo';
import { Stats } from './components/Stats';
import { CallToAction } from './components/CallToAction';

export default function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <LiveDemo />
      <Stats />
      <CallToAction />
    </div>
  )
}