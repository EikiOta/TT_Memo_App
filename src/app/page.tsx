import Link from "next/link";
import Header from "./components/header";
export default function Home() {
  return (
    <>
    <Header/>
      <ul>
        <li>
          
          <Link href="/add" className="text-blue-500 hover:text-blue-700">
            戦績登録
          </Link>
        </li>
        <li>
          
          <Link href="/view" className="text-blue-500 hover:text-blue-700">
            戦績表示
          </Link>
        </li>
      </ul>
    </>
  );
}
