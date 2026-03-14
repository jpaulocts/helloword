import styles from './HelloWorld.module.css';

export default function Home() {
  // Current Date
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>
          Hello World! 👋
        </h1>
        
        <p className={styles.subtitle}>
          CSE310 - W01 Activity
        </p>

        <div className={styles.info}>
          <p>
            <span>📅 Date:</span> {formattedDate}
          </p>
          <p>
            <span>⏰ Time:</span> {currentDate.toLocaleTimeString('en-US')}
          </p>
          <p>
            <span>🚀 Framework:</span> Next.js 15
          </p>
          <p>
            <span>📝 Language:</span> TypeScript
          </p>
        </div>

        <div className={styles.footer}>
          <p>Made with 💙 for Hello World module</p>
        </div>
      </div>
    </main>
  );
}