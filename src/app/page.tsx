import styles from "./page.module.css";
import { PostFormData } from "./PostFormData";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <PostFormData />
      </div>
    </main>
  );
}
