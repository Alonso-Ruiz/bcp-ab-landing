import { useState, useEffect } from 'react';

export function useVariant() {
  const [variant, setVariant] = useState(null);

  useEffect(() => {
    let saved = sessionStorage.getItem('bcp_variant');
    if (!saved) {
      saved = Math.random() > 0.5 ? 'A' : 'B';
      sessionStorage.setItem('bcp_variant', saved);
    }
    setVariant(saved);
  }, []);

  return variant;
}
