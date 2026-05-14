import { Navbar, Hero, About, Skills } from '@/components';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </>
  );
};

export default App;
