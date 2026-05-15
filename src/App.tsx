import { Navbar, Hero, About, Skills, Projects } from '@/components';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default App;
