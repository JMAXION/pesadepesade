import React, { useEffect, useState } from "react";
import "../../css/notice.css";
import { Link } from "react-router-dom";

import Notice from "../notice/Notice";

export default function AdminBoard() {
  return (
    <>
      <Notice />
      <button type="button">
        <Link to={"/notice/write"}>공지작성</Link>
      </button>
    </>
  );
}
