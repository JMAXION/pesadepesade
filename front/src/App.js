import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/style.css";
import Home from "./pages/Home.jsx";
import Root from "./pages/Root.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Help from "./pages/Help.jsx";
import Login from "./pages/Login.jsx";
import MemberIdFind from "./components/member/MemberIdFind.jsx";
import MemberPasswordFind from "./components/member/MemberPasswordFind.jsx";
import Notice from "./pages/notice/Notice.jsx";
import StockList from "./pages/StockList.jsx";
import Journal from "./pages/Journal.jsx";
import JournalDetail from "./pages/JournalDetail.jsx";
import Press from "./pages/Press.jsx";
import NoticeContent from "./pages/notice/NoticeContent.jsx";
import QnaList from "./pages/qna/QnaList.jsx";
import QnaContent from "./pages/qna/QnaContent.jsx";
import QnaWrite from "./pages/qna/QnaWrite.jsx";
import QnaUpdate from "./pages/qna/QnaUpdate.jsx";
import QnaPassWord from "./pages/qna/QnaPassWord.jsx";
import Cart from "./pages/Cart.jsx";
import Signup from "./pages/Signup.jsx";
import Upload from "./pages/admin/Upload.jsx";
import Delete from "./pages/admin/Delete.jsx";
import AdminBoard from "./pages/admin/AdminBoard.jsx";
import NoticeUpdate from "./pages/admin/NoticeUpdate.jsx";
import Admin from "./pages/admin/Admin.jsx";
import NoticeWrite from "./pages/notice/NoticeWrite.jsx";
import MyPage from "./pages/mypage/MyPage.jsx";
import MyPageChangeInfo from "./pages/mypage/MyPageChangeInfo.jsx";
import MyPageOrder from "./pages/mypage/MyPageOrder.jsx";
import MyPageBoard from "./pages/mypage/MyPageBoard.jsx";
import ShopProductDetail from "./pages/ProductDetail.jsx";
import MyPageCoupon from "./pages/mypage/MyPageCoupon.jsx";
import ServiceTerm from "./pages/ServiceTerm.jsx";
import PrivatePolicy from "./pages/PrivatePolicy.jsx";
import Order from "./pages/Order.jsx";
import OrderOk from './pages/OrderOk.jsx'
import ReviewWrite from "./pages/reviews/ReviewWrite.jsx";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/shop", element: <Shop /> },
        { path: "/shop/all", element: <Shop /> },
        { path: "/shop/detail/:pid", element: <ShopProductDetail /> },
        // { path: "/shop/detail/:pid/:rid", element: <ReviewContent /> },
        { path: "/shop/detail/reviewWrite", element: <ReviewWrite /> },
        { path: "/cart", element: <Cart /> },
        { path: "/contact", element: <Contact /> },
        { path: "/help", element: <Help /> },
        { path: "/login", element: <Login /> },
        { path: "/login/memberidfind", element: <MemberIdFind /> },
        {
          path: "/login/memberpasswordfind",
          element: <MemberPasswordFind />,
        },
        { path: "/signup", element: <Signup /> },
        { path: "/notice", element: <Notice /> },
        { path: "/notice/:nid", element: <NoticeContent /> },
        { path: "/notice/update/:nid", element: <NoticeUpdate /> },
        { path: "/notice/write", element: <NoticeWrite /> },
        { path: "/stocklist", element: <StockList /> },
        { path: "/journal", element: <Journal /> },
        { path: "/journal/:id", element: <JournalDetail /> },
        { path: "/press", element: <Press /> },
        { path: "/qna", element: <QnaList /> },
        { path: "/qna/:qid/:rno", element: <QnaContent /> },
        { path: "/qna/password/:qid/:rno", element: <QnaPassWord /> },
        { path: "/qna/qnaWrite", element: <QnaWrite /> },
        { path: "/qna/qnaContent", element: <QnaContent /> },
        { path: "/qna/update/:qid/:rno", element: <QnaUpdate /> },
        { path: "/admin", element: <Admin /> },
        { path: "/admin/upload", element: <Upload /> },
        { path: "/admin/delete", element: <Delete /> },
        { path: "/admin/board", element: <AdminBoard /> },
        { path: "/mypage", element: <MyPage /> },
        { path: "/mypage/userinfo", element: <MyPageChangeInfo /> },
        { path: "/mypage/order", element: <MyPageOrder /> },
        { path: "/mypage/coupon", element: <MyPageCoupon /> },
        { path: "/serviceterm", element: <ServiceTerm /> },
        { path: "/privatepolicy", element: <PrivatePolicy /> },
        { path: "/mypage/myboard", element: <MyPageBoard /> },
        { path: "/order", element: <Order /> },
        { path: "/orderok", element: <OrderOk/>}
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
