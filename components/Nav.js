import styles from "@/styles/Nav.module.scss";
import LogoSvg from "@/public/img/icon.svg";
import Image from "next/image";

export default function Nav({ searchTerm }) {
  return (
    <>
      <nav className={styles.navBar}>
        <LogoSvg color={`#6366F1`} className={styles.navLogo} />
      
        <form className={styles.navSearch} action={`/search`}>
          <input defaultValue={searchTerm ? searchTerm : ''} type="text" placeholder="Search..." name="q" />
          <button type="submit">
            <span className="material-symbols-rounded">
              search
            </span>
          </button>
        </form>
        
        <ul className={styles.navLinks}>
          <li>
            <a className={styles.accountIcon} href={`#`}>
              <Image src={`https://git.theclashfruit.me/avatars/9cbd2f981819c8cc6463b7059e952745?size=128`} alt={`profile picture`} width={38} height={38} unoptimized />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}