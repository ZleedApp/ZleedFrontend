import styles from '@/styles/components/Dropdown.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import {ChevronDown, ChevronUp} from 'lucide-react';
import {useRef, useState} from 'react';

export default function Dropdown({ className, items, picture, id, children, ...props }) {
  const dropdownRef = useRef(null);
  const [ isOpen, setIsOpen ] = useState(false);

  const handleClick = (e) => {
    dropdownRef.current.classList.toggle(styles.open);

    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdownContainer}>
      <button className={className ? `${styles.btn} ${className}` : styles.btn} data-for={id} onClick={handleClick} {...props}>
        { picture && <Image className={styles.profilePic} src={picture} alt={`${children}'s profile picture.`} height={24} width={24} /> }
        <span className={styles.text}>{children}</span>
        { !isOpen ? <ChevronDown className={styles.icon} height={20} width={20} /> : <ChevronUp className={styles.icon} height={20} width={20} /> }
      </button>

      <div className={styles.dropdownItems} id={id} ref={dropdownRef}>
        <ul>
          {items.map((item, i) => (
            <li key={i}>
              {
                (
                  {
                    link: (
                      <Link href={item.href}>
                        {item.icon && <item.icon className={styles.icon} height={18} width={18} />}
                        <span className={styles.text}>{item.name}</span>
                      </Link>
                    ),
                    separator: (
                      <hr className={styles.separator} />
                    )
                  }[item.type]
                )
              }
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}