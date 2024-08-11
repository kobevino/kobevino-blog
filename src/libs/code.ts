import { transformerCopyButton } from '@rehype-pretty/transformers';
import rehypeExternalLinks from 'rehype-external-links';
import { rehypePrettyCode } from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export async function highlightCode(code: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: '_blank' })
    .use(rehypePrettyCode, {
      theme: 'dracula',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeStringify)
    .process(code);

  return String(file);
}
