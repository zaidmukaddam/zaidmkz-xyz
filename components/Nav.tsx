import Link from 'next/link';
import { useRouter } from 'next/router';

import { DocSearch } from './DocSearch';
import { RSSIcon } from './RssIcon';
import { useTags } from './tags/TagsContext';
import ThemeSwitch from './ThemeSwitch';

const routes = [
  { route: '/posts', title: 'posts' }
  // { route: '/notes', title: 'notes' }
];

const Nav: React.FC = () => {
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.asPath.includes(pathname);
  };
  const { resetTags } = useTags();

  return (
    <header className="relative w-full h-16">
      <div className="fixed h-20 z-40 w-full flex justify-between backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
        <nav className="w-full sm:max-w-[75ch] m-auto sm:grid md:flex px-5 justify-between items-center ">
          <Link href="/" passHref>
            <a title="Home" aria-label="Home">
              <MumbaiTime />
            </a>
          </Link>
          <div className="flex items-center gap-5">
            {/* {['/posts', '/art'].map((path) => (
              <Link key={path} href={path}>
                <a className={`capitalize ${isActive(path) ? '' : 'opacity-50'}`}>
                  {path.replace('/', '')}
                </a>
              </Link>
            ))} */}
            {routes.map(({ route, title }) => (
              <Link key={route} href={route}>
                <a
                  className={`capitalize ${isActive(route) ? '' : 'opacity-50'}`}
                  onClick={resetTags}>
                  {title}
                </a>
              </Link>
            ))}
            <ThemeSwitch />
            <RSSIcon />
            <DocSearch />
          </div>
        </nav>
      </div>
    </header>
  );
};

function MumbaiTime() {
  const TimeFomatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: 'numeric',
    weekday: 'short',
    hour12: false
  }).format();
  return <span>{TimeFomatter}, Mumbai</span>;
}

export default Nav;
