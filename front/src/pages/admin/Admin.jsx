import SubTitle from "../../components/SubTitle";
import { Link } from "react-router-dom";
import "../../css/admin/admin.css";

export default function Admin() {
  return (
    <div className="admin-content">
      <SubTitle title="관리자" />
      <div className="admin-links">
        <Link to="/admin/upload" className="admin-link">
          업로드
        </Link>
        <Link to="/admin/delete" className="admin-link">
          삭제
        </Link>
      </div>
    </div>
  );
}
