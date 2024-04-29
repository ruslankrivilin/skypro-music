
import classNames from "classnames";
import styles from "./FilterItem.module.css";
import { FilterItemType } from "@/Types";



export default function FilterItem({ handleFilterClick, title, list, isOpened }: FilterItemType) {
    return (
        <>
            <div onClick={() => handleFilterClick(title)} className={classNames(styles.filterButton, styles.BtnText)}>
                {title}
            </div>
            {isOpened &&
                (<ul>
                    {list.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>)}
        </>
    )
}