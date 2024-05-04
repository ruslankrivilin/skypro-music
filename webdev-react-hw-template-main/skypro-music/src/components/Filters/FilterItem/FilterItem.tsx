
import classNames from "classnames";
import styles from "./FilterItem.module.css";
import { FilterItemType } from "@/Types";



export default function FilterItem({ handleFilterClick, title, list, isOpened }: FilterItemType) {
    return (
        <>
            <div 
            onClick={() => handleFilterClick(title)} 
            className={classNames(styles.filterButton, styles.BtnText, {
                [styles.active]: isOpened,
            })}>
                {title}
            </div>
            
                {isOpened &&
                    (<div  className={styles.filterButtonSpisok}>
                    <ul>
                        {list.map((item) => (
                            <li  className={styles.BtnSpisok} key={item}>{item}</li>
                        ))}
                    </ul>
                    </div>)}
            
        </>
    )
}



{/* <>
{isOpened ? (
    <div>
        <div 
            onClick={() => handleFilterClick(title)} 
            className={classNames(styles.filterButton, styles.BtnText)}
            >
                {title}
        </div>
        <div  className={styles.filterButtonSpisok}>
                    <ul className={styles.listBox}>
                        {list.map((item) => (
                            <li  className={styles.BtnSpisok} key={item}>{item}</li>
                        ))}
                    </ul>
        </div>
    </div>
) : (
    <div 
            onClick={() => handleFilterClick(title)} 
            className={classNames(styles.filterButton, styles.BtnText)}
            >
                {title}
        </div>
)}
</>     
)  ;     
}         */}