import React, { FC } from "react";
import cx from "classnames";

import { ReactComponent as Icon } from "../../assets/images/close.svg";
import { CloseComponentProps } from "./close.interface";
import "./style.css";

export const Close: FC<CloseComponentProps> = ({ className, onClick }) => (
  <div className={cx("close", className)} onClick={onClick}>
    <Icon className="close__icon" />
    {/* (Review) Именование стилей component__container-element as best practice */}
  </div>
);
