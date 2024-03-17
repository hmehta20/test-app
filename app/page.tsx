import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Below are links to 3 Tests</h1>
        <ul>
          <li>
            <Link href="/">
             Home
            </Link>
          </li>
          <li>
            <Link href="/center-a-div">
             Test 1
            </Link>
          </li>
          <li>
            <Link href="/table">
             Test 2
            </Link></li>
          <li>
            <Link href="/javascript">
             Test 3
            </Link></li>
        </ul>
    </div>
  );
}
