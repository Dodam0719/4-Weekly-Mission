import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "../node_modules/react-router-dom/dist/index";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
// import ModalContainer from "./modal/ModalContainer";

// 링크 공유 페이지(SharedPage) url path는 ‘/shared’
// 폴더 페이지(FolderPage) url path는 ‘/folder’
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shared" element={<SharedPage />} />
        <Route path="/folder" element={<FolderPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
