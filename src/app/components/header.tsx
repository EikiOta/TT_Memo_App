import Link from 'next/link';

const Header = () => {
  return (
    <header className="border-b flex items-center h-14 px-4">
      <h1>
        <Link href="/">
          卓球戦績メモ
        </Link>
      </h1>
    </header>
  );
};

export default Header;