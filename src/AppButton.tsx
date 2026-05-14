import { Button } from '@/components/ui';

const App = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center bg-gray-800 p-6">
      <section className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">Button variants</h1>
          <p className="mt-2 text-sm text-slate-300">
            Visualización de variantes del componente Button
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="base">Base</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="base" size="sm">
            Base Small
          </Button>

          <Button variant="primary" size="md">
            Primary Medium
          </Button>

          <Button variant="secondary" size="lg">
            Secondary Large
          </Button>
        </div>

        <div className="w-full max-w-xs">
          <Button variant="base" fullWidth>
            Base full width
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button variant="base" disabled>
            Base disabled
          </Button>

          <Button variant="primary" disabled>
            Primary disabled
          </Button>

          <Button variant="secondary" disabled>
            Secondary disabled
          </Button>
        </div>
      </section>
    </div>
  );
};

export default App;
