import styles from "./Logo.module.css";

function Logo() {
  return (
    <div>
      <img src="/logo.png" alt="WorldWise logo" className={styles.logo} />
    </div>
  );
}

export default Logo;
