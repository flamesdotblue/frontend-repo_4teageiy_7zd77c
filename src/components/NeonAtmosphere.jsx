import React from 'react';

export default function NeonAtmosphere() {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-60 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(34,211,238,0.18),transparent),radial-gradient(800px_500px_at_90%_110%,rgba(168,85,247,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen">
        <div className="absolute left-10 top-10 w-28 h-28 rounded-full blur-3xl bg-cyan-500/30" />
        <div className="absolute right-16 bottom-24 w-40 h-40 rounded-full blur-3xl bg-fuchsia-500/25" />
      </div>
    </>
  );
}
