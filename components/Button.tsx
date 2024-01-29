import styles from '@/styles/components/Button.module.scss';

// @ts-ignore
export default function Button({ icon: Icon, className, type, children, ...props }) {
  return (
    <>
      <button className={className ? `${styles.btn} ${className}` : styles.btn} type={type} {...props}>
        <span  className={styles.text}>{children}</span>
        {Icon && <Icon className={styles.icon} height={20} width={20} />}
      </button>
    </>
  );
}