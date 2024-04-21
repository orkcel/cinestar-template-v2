import styles from "./Header.module.scss";
import {CaretDown, List} from "@phosphor-icons/react";
import {useCallback, useState, useEffect} from "react";

export const Header = () => {
    const [portfolioDropDownState, setPortfolioDropDownState] = useState(false);
    const [pageDropDownState, setPageDropDownState] = useState(false);
    const [menuState, setMenuState] = useState(false);

    const handleOpenMenu = useCallback(() => {
        setMenuState(prevState => !prevState);
    },[setMenuState])

    const handlePageDropDownOpen = useCallback(
        (event) => {
            event.stopPropagation();
            setPageDropDownState(prevState => !prevState);
            setPortfolioDropDownState(false);

        },
        [setPageDropDownState],
    );
    const handlePortfolioDropDownOpen = useCallback(
        (event) => {
            event.stopPropagation();
            setPortfolioDropDownState(prevState => !prevState);
            setPageDropDownState(false);
        },
        [setPortfolioDropDownState],
    );
    const handleWidgetClose = useCallback((setIsOpen) => {
        setIsOpen(false);
    }, [])
    useEffect(() => {
        const action = () => {
            handleWidgetClose(setPageDropDownState);
            handleWidgetClose(setPortfolioDropDownState);

        }
        document.addEventListener("click", action);
        return () => {
            document.removeEventListener("click", action);
        };
    }, []);

    return (
        <>
            <header className={styles.headerWrapper}>
                <div className={`${styles.headerContent} ${menuState ? styles.menuOpen : ""}`}>
                    <div className={styles.imgBlock}>
                        <img src="https://html.rometheme.pro/cinestar/image/logo.png" alt="cinestar-logo"/>
                    </div>
                    <nav className={styles.nav}>

                        <a href="#" className={styles.navEntity}>
                            <p>Homepage</p>
                        </a>
                        <a href="#" className={styles.navEntity}>
                            <p>About</p>
                        </a>
                        <div className={styles.navEntity} onClick={handlePortfolioDropDownOpen}>
                            <div className={styles.entityTitle}>
                                <p>Portfolio</p>
                                <CaretDown weight="fill"/>
                            </div>
                            <div className={`${styles.dropDown} ${portfolioDropDownState ? styles.visible : ""}`}>
                                <a href="#">Portfolio</a>
                                <a href="#">Project Detail</a>

                            </div>
                        </div>
                        <div className={styles.navEntity} onClick={handlePageDropDownOpen}>
                            <div className={styles.entityTitle}>
                                <p>Page</p>
                                <CaretDown weight="fill"/>
                            </div>
                            <div className={`${styles.dropDown} ${pageDropDownState ? styles.visible : ""}`}>
                                <a href="#">Portfolio</a>
                                <a href="#">Project Detail</a>
                                <a href="#">Portfolio</a>
                                <a href="#">Project Detail</a>
                            </div>
                        </div>
                        <a href="#" className={styles.navEntity}>
                            <p>Contact</p>
                        </a>

                    </nav>
                    <div className={styles.menu} onClick={handleOpenMenu}>
                        <List weight="bold"/>
                    </div>
                </div>
            </header>
        </>
    )
}