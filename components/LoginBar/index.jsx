import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import Link from 'next/link';
import styles from './LoginBar.module.css';

const LoginBar = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div className={styles.bar}>...</div>;

  if (error) return <div className={styles.bar}>{error.message}</div>;

  if (user) {
    return (
      <div className={styles.bar}>
        <Image
          src={user.picture}
          width="50"
          height="50"
          alt="profile picture"
        />
        <Link href="https://www.somoshuella.com.ar/api/auth/logout">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path d="m33.3 32.75-2.15-2.15 5.1-5.1h-17.5v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8ZM6 42V6h17.55v3H9v30h14.55v3Z" />
          </svg>
        </Link>
      </div>
    );
  }
  return (
    <div className={styles.bar}>
      <Link href="https://www.somoshuella.com.ar/api/auth/login">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M20.55 32.75 18.4 30.6l5.1-5.1H6v-3h17.4l-5.1-5.1 2.15-2.15 8.8 8.8Zm3.9 9.25v-3H39V9H24.45V6H42v36Z" />
        </svg>
      </Link>
    </div>
  );
};

export default LoginBar;
