import styles from "./SectionTitle.module.scss"

const SectionTitle = ({heading,title,centered}) => {
    return (
        <div className={`${styles.sectionTitle} ${centered ? styles.uniqueSectionTitle : ""}`}>
            <h5>{heading}</h5>
            <h3>{title}</h3>
        </div>
    );
};

export default SectionTitle;