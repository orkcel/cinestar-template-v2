import styles from "./Footer.module.scss";
import SectionTitle from "../../Common/SectionTitle/SectionTitle.jsx";

export const Footer = () => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.line}></div>
            <div className={styles.footerTopContent}>
                <div className={styles.textContainer}>
                    <SectionTitle title="HAVE IDEA IN YOUR MIND ? LET'S START YOUR PROJECT WITH ME" centered={true}/>
                    <h5>ORKHAN GASIMOV, +994-51-746-87-73 OR ORKCEL@YANDEX.COM</h5>
                    <div className={styles.socialsRow}>
                        <a href="https://www.facebook.com/orkhan.celestial.3" target="_blank">FACEBOOK</a>
                        <a href="https://www.tiktok.com/@orkcel" target="_blank">TIKTOK</a>
                        <a href="https://www.instagram.com/orkcel/" target="_blank">INSTAGRAM</a>
                        <a href="https://www.youtube.com/@orkhancelestial" target="_blank">YOUTUBE</a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={styles.overlay}></div>
                <div className={styles.footerBottomContent}>
                    <div className={styles.imgBlock}>
                        <img src="https://html.rometheme.pro/cinestar/image/logo.png" alt="cinestar-logo"/>
                    </div>
                    <span>COPYRIGHT 2024 © CINESTAR | POWERED BY KHANQSM | ALL RIGHTS NOT REVERSED</span>
                </div>
            </div>
        </footer>
    )
}