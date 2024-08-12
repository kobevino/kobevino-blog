'use client';

import { useCallback, useEffect, useRef } from 'react';

export function Comments() {
  const ref = useRef<HTMLDivElement | null>(null);

  const createUtterances = useCallback(() => {
    const script = document.createElement('script');
    script.id = 'utterances';
    script.src = 'https://utteranc.es/client.js';
    script.async = true;
    script.setAttribute('repo', 'kobevino/blog-comments');
    script.setAttribute('issue-term', 'pathname');
    script.setAttribute('theme', 'dark-blue');
    script.setAttribute('crossorigin', 'anonymous');
    ref.current?.appendChild(script);
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    const utterances = ref.current.querySelector('#utterances');
    if (utterances) return;
    createUtterances();
  }, [createUtterances]);

  return <div ref={ref} />;
}
