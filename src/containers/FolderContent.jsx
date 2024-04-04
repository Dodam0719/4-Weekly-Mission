import React, { useState } from "react";
import CommonContent from "../components/common/CommonContent";
import FolderList from "../components/FolderList";
import AddFolderButton from "../components/AddFolderButton";
import ContentActions from "../components/ContentActions";
import FolderCardList from "../components/FolderCardList";
import style from "../styles/SharedAndFolderContent.module.css";

// SharedContent FolderContent 겹치는 부분은 공통 컴포넌트인 CommonContent로 관리
// FolderContent에서는 CommonContent에 children 전달 (SharedContent에는 없는 부분)
// FolderList -> 폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용
// AddFolderButton -> '폴더 추가 +'가 들어가는 부분(기능은 추후 구현)
// FolderActions -> '공유 이름변경 삭제'가 들어가는 부분(기능은 추후 구현)
function FolderContent() {
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const handleFolderSelect = (folderId) => {
    setSelectedFolderId(folderId);
  };

  return (
    <div className={style.shared_content}>
      <CommonContent>
        <div className={style.folder_info}>
          <FolderList
            endpoint="/users/1/folders"
            onFolderSelect={handleFolderSelect}
          />
          <AddFolderButton />
        </div>
        <div className={style.content_info}>
          <span>유용한 글</span>
          <ContentActions />
        </div>
        <FolderCardList
          endpoint={`/users/1/links${selectedFolderId ? `?folderId=${selectedFolderId}` : ""}`}
        />
      </CommonContent>
    </div>
  );
}

export default FolderContent;
