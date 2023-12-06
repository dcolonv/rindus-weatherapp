
import { CiLocationOn } from 'react-icons/ci'
import styles from './Header.module.css'

interface HeaderProps {
    location: { name: string; country: string; };
    onSearch: () => void;
}

export default function Header({ location, onSearch }: HeaderProps) {
    return (
        <div className={styles.header}>
            <p onClick={onSearch} data-cy="location">
                <CiLocationOn size={24} />
                <span>{location.name}, {location.country}</span>
            </p>
            <div>
                <a
                    href="https://linkedin.com/in/dcolonv"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    By David Colón
                </a>
            </div>
        </div>
    )
}