
"use client";
import { useCallback, useRef, useState } from 'react';
import styles from './SearchCityDialog.module.css'
import { BiArrowBack, BiSearch } from "react-icons/bi";
import { debounce } from 'lodash';
import { getOptionsAPI } from '@/lib/weatherAPI';



interface SearchCityDialogProps {
    open: boolean;
    onClose: () => void;
    onSelectCity: (city: any) => void;
}

export default function SearchCityDialog({ open, onClose, onSelectCity }: SearchCityDialogProps) {
    const [search, setSearch] = useState("");
    const [options, setOptions] = useState<any>([]);

    const debouncedSearch = useRef(
        debounce(async (criteria: string) => {
            const searchResult = await getOptionsAPI(criteria);
            setOptions(searchResult || []);
        }, 300)
    ).current;

    const handleSearchChange = useCallback(async (evt: any) => {
        setSearch(evt.target.value);
        debouncedSearch(evt.target.value);
    }, [debouncedSearch]);

    const handleCitySelect = useCallback((opt: any) => {
        onSelectCity(opt);
        setSearch("");
        setOptions([]);
        onClose();
    }, [onClose, onSelectCity])

    if (!open) {
        return null
    }

    return (
        <div id="citySearchModal" className={styles.modal} data-cy="search-city-modal">
            <div className={styles.modal_content}>
                <div className={styles.input_container}>
                    <BiArrowBack size={24} onClick={onClose} data-cy="search-back" />
                    <input value={search} onChange={handleSearchChange} placeholder='Search city' data-cy="search-input" />
                    <BiSearch size={24} onClick={onClose} />
                </div>
                {!!options.length && (
                    <div className={styles.options_container}>
                        <div className={styles.options_list} data-cy="search-result">
                            {options.map((opt: any) => (
                                <span
                                    key={opt.id}
                                    className={styles.option}
                                    onClick={() => handleCitySelect(opt)}
                                >
                                    {opt.name}, {opt.country}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}