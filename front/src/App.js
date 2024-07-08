import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/style.css";
import Home from "./pages/Home.jsx";
import Root from "./pages/Root.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Help from "./pages/Help.jsx";
import Login from "./pages/Login.jsx";
import Notice from "./pages/Notice.jsx";
import StockList from "./pages/StockList.jsx";
import Journal from "./pages/Journal.jsx";
import JournalDetail from "./pages/JournalDetail.jsx";
import Press from "./pages/Press.jsx";
import NoticeContent from "./pages/NoticeContent.jsx";
import QnaList from "./pages/qna/QnaList.jsx";
import QnaContent from "./pages/qna/QnaContent.jsx";
import QnaWrite from "./pages/qna/QnaWrite.jsx";
import QnaPassWord from "./pages/qna/QnaPassWord.jsx";
import Cart from "./pages/Cart.jsx";
import IdFind from "./pages/IdFind.jsx";
import PasswordFind from "./pages/PasswordFind.jsx";
import Signup from "./pages/Signup.jsx";
import Upload from "./pages/admin/Upload.jsx";
import Delete from "./pages/admin/Delete.jsx";
import Admin from "./pages/admin/Admin.jsx";

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
        { path: "/shop/parfum", element: <Shop /> },
        { path: "/cart", element: <Cart /> },
        { path: "/contact", element: <Contact /> },
        { path: "/help", element: <Help /> },
        { path: "/login", element: <Login /> },
        { path: "/login/idfind", element: <IdFind /> },
        { path: "/login/passwordfind", element: <PasswordFind /> },
        { path: "/signup", element: <Signup /> },
        { path: "/shop/all", element: <Shop /> },
        { path: "/shop/parfum", element: <Shop /> },
        { path: "/notice", element: <Notice /> },
        { path: "/stocklist", element: <StockList /> },
        { path: "/journal", element: <Journal /> },
        { path: "/journal/:id", element: <JournalDetail /> },
        { path: "/press", element: <Press /> },
        { path: "/notice/1", element: <NoticeContent /> },
        { path: "/qna", element: <QnaList /> },
        { path: "/qna/:qid/:rno", element: <QnaContent /> },
        { path: "/qna/password", element: <QnaPassWord /> },
        { path: "/qna/qnaWrite", element: <QnaWrite /> },
        { path: "/qna/qnaContent", element: <QnaContent /> },
        { path: "/notice/1", element: <NoticeContent /> },
        { path: "/admin", element: <Admin /> },
        { path: "/admin/upload", element: <Upload /> },
        { path: "/admin/delete", element: <Delete /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
