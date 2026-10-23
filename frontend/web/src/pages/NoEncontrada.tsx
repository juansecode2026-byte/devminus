import { Link } from 'react-router-dom';

export function NoEncontrada() {
  return (
    <main className="wrap grid min-h-[70vh] place-content-center gap-6 py-16 text-center">
      <p className="label m-0">Error 404</p>
      <h1 className="m-0 font-display text-2xl font-semibold">Esta página no existe.</h1>
      <p className="m-0 text-muted">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
      <div>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
