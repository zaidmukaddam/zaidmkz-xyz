import fs from 'fs';
import { getMDXComponent } from 'mdx-bundler/client';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import path from 'path';
import { useMemo } from 'react';

import { components } from '@/components/MDXComponents';
import { MyPic } from '@/components/MyPic';
import { Spacer } from '@/components/Spacer';
import { getAllPostsMeta, loadMDX } from '@/utils/loadMDX';

import { PostPreviewList } from './posts';

export const getStaticProps = async () => {
  const file = path.resolve(process.cwd(), 'content', 'home.mdx');
  const source = fs.readFileSync(file, 'utf-8');

  const { code } = await loadMDX(source);
  const posts = await getAllPostsMeta();

  return { props: { code, posts } };
};

const mdxComponents = { ...components, Spacer, Image, MyPic };

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export default function Home({ code, posts }: Props) {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <article className="max-w-[75ch] mx-auto pt-12 pb-28 px-5">
      <Component components={mdxComponents} />
    </article>
  );
}

function Stuff({ posts }) {
  return <code>{JSON.stringify(posts)}</code>;
}
