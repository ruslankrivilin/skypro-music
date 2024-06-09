// import { ChangeEvent } from "react";
// import styles from "./ProgressBar.module.css";
// type Props = {
//     value: number | string;
//     max: number | string | undefined;
//     step: number;
//     onChange: (e: ChangeEvent<HTMLInputElement>) => void;
// };

// export default function ProgressBar({ value, max = 0, step, onChange }: Props) {
//     const handleChange = (e: any) => {
//         const newValue = e.target.value
//         onChange(newValue)
//     }
//     return (
//         <input
//             className={styles.styledProgressInput}
//             type="range"
//             min="0"
//             value={value}
//             max={max}
//             onChange={handleChange}
//             step={step}
//         />
//     );
// }

import { ProgressType } from "@/Types";
import styles from "./ProgressBar.module.css";

export default function ProgressBar({
  max,
  value,
  step,
  onChange,
}: ProgressType) {
  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min={0}
      max={max}
      value={value}
      step={step}
      onChange={onChange}
    />
  );
}
