import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./css/style.css";
import Home from "./pages/Home.jsx";
import Root from "./pages/Root.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Notice from "./pages/Notice.jsx";
import StockList from "./pages/StockList.jsx";
import NoticeContent from "./pages/NoticeContent.jsx";
import Help from "./pages/Help.jsx";
import QnaList from "./pages/qna/QnaList.jsx";
import QnaContent from "./pages/qna/QnaContent.jsx";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/shop", element: <Shop /> },
        { path: "/contact", element: <Contact /> },
        { path: "/help", element: <Help /> },
        { path: "/notice", element: <Notice /> },
        { path: "/stock", element: <StockList /> },
        { path: "/notice/1", element: <NoticeContent /> },
        { path: "/qna", element: <QnaList /> },
        { path: "/qna/qnaContent", element: <QnaContent /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
