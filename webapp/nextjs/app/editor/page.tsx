import styles from './page.module.css';
import Editor from './_components/Editor';
import { PRESS_RELEASE_ID } from './_lib/constants';

// サーバーコンポーネントとして初期データを取得し、クライアントの Editor に渡す
export default async function EditorPage() {
  try {
    const res = await fetch(`/api/press-releases/${PRESS_RELEASE_ID}`, { cache: 'no-store' });
    if (!res.ok) {
      return (
        <div className={styles.container}>
          <div className={styles.error}>データの読み込みに失敗しました（サーバーエラー）</div>
        </div>
      );
    }

    const data = await res.json();
    const initialContent = typeof data.content === 'string' ? JSON.parse(data.content) : data.content;

    return <Editor initialTitle={data.title} initialContent={initialContent} />;
  } catch (e) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>データの取得中にエラーが発生しました</div>
      </div>
    );
  }
}
