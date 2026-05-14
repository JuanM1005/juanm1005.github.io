import { Navbar, Hero, Card } from '@/components';
import { projectTechNest } from '@/assets';

const App = () => {
  return (
    <>
      <Navbar />

      <main className="bg-slate-950">
        <Hero />
        <Card variant="glass" padding="lg" isClickable>
          <img src={projectTechNest} alt="" />
          <h2 className="text-2xl font-bold text-slate-200">
            Card del portfolio
          </h2>
          <p className="mt-2 text-slate-400">
            Este componente servirá para secciones como Sobre mí, Habilidades y
            Proyectos.
          </p>
        </Card>
      </main>
    </>
  );
};

export default App;
