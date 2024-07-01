import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Root from "./pages/Root.jsx";
import About from "./pages/About.jsx";
import Shop from "./pages/Shop.jsx";
import Contact from "./pages/Contact.jsx";
import Notice from "./pages/Notice.jsx";
import NoticeContent from "./pages/NoticeContent.jsx";
import Help from "./pages/Help.jsx";
import Qna from "./pages/qna/qna.jsx";
import QnaContent from "./pages/qna/QnaContent.jsx";
import "./css/style.css";

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
        { path: "/notice/1", element: <NoticeContent /> },
        { path: "/qna", element: <Qna /> },
        { path: "/qna/qnaContent", element: <QnaContent /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
