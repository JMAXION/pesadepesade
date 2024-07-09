import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/style.css";
import Home from "./pages/Home.jsx";
import Root from "./pages/Root.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Help from "./pages/Help.jsx";
import Login from "./pages/Login.jsx";
import Notice from "./pages/notice/Notice.jsx";
import StockList from "./pages/StockList.jsx";
import Journal from "./pages/Journal.jsx";
import Press from "./pages/Press.jsx";
import NoticeContent from "./pages/notice/NoticeContent.jsx";
import QnaList from "./pages/qna/QnaList.jsx";
import QnaContent from "./pages/qna/QnaContent.jsx";
import QnaWrite from "./pages/qna/QnaWrite.jsx";
import QnaPassWord from "./pages/qna/QnaPassWord.jsx";
import Cart from "./pages/Cart.jsx";
import NoticeWrite from "./pages/notice/NoticeWrite.jsx";

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
        { path: "/notice", element: <Notice /> },
        { path: "/notice/:nid", element: <NoticeContent /> },
        { path: "/notice/write", element: <NoticeWrite /> },
        { path: "/stocklist", element: <StockList /> },
        { path: "/journal", element: <Journal /> },
        { path: "/press", element: <Press /> },
        { path: "/qna", element: <QnaList /> },
        { path: "/qna/:qid/:rno", element: <QnaContent /> },
        { path: "/qna/password/:qid/:rno", element: <QnaPassWord /> },
        { path: "/qna/qnaWrite", element: <QnaWrite /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
