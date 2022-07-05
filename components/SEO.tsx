import { DefaultSeo } from 'next-seo';

export const SEO: React.FC = () => {
  return (
    <DefaultSeo
      title="Zaid's site"
      description="The official site of Zaid Mukaddam, a software engineer and a TypeScript/JavaScript enthusiast."
      openGraph={{
        site_name: 'zaidmkz.xyz'
      }}
      twitter={{
        handle: '@zaidmukaddam',
        site: '@zaidmukaddam',
        cardType: 'summary_large_image'
      }}
    />
  );
};
