import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-7xl font-display font-extrabold text-accent leading-none">404</h1>
      <h2 className="mt-4 text-3xl font-display font-bold text-navy-950">Page Not Found</h2>
      <p className="mt-4 max-w-md text-slate-600">
        The page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-xl bg-accent px-8 py-4 font-bold text-white transition hover:bg-accent-hover"
      >
        Back to Home
      </Link>
    </main>
  );
}
