'use client';

import Particles, { initParticlesEngine } from '@tsparticles/react';
import { OPTIONS } from 'constants/particle';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';

export function Background() {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div>
      {init && (
        <Particles
          id="tsparticles"
          options={OPTIONS}
        />
      )}
    </div>
  );
}
