// eslint-disable-next-line
import { isCursorAtEnd } from "@testing-library/user-event/dist/utils";
import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import useEscapeKey from "../../hooks/useEscapeKey";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({children, variant }) {
  const [isVisible, setIsVisible] = React.useState(true);
  useEscapeKey(setIsVisible);

  let Tag = ICONS_BY_VARIANT[variant];
  if (isVisible) {
    return (
      <div className={`${styles.toast} ${styles[variant]}`}>
        <div className={styles.iconContainer}>
          <Tag size={24} />
        </div>
        <p className={styles.content}>
          <VisuallyHidden>{variant} - </VisuallyHidden>
          {children}
        </p>
        <button
          className={styles.closeButton}
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss message"
          aria-live="off"
        >
          <X size={24} />
          <VisuallyHidden>Dismiss message</VisuallyHidden>
        </button>
      </div>
    );
  } else return undefined;
}

export default Toast;
