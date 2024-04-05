import { useGetData } from "./Hooks/useAsync";
import style from "../styles/FolderList.module.css";
import { useState } from "react";

// FolderList -> 폴더 목록에 필요한 데이터는 “/api/users/1/folders”를 활용
//            -> “전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용
//            -> 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용
//            -> 폴더 버튼을 클릭하면 폴더에 해당하는 링크들로 카드를 구성
//            -> 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI
function FolderList({ endpoint, onFolderSelect }) {
  const { data, error, loading } = useGetData(endpoint);
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  const handleFolderClick = (folderId) => {
    setSelectedFolderId(folderId);
    onFolderSelect(folderId);
  };

  const handleAllFolderClick = () => {
    setSelectedFolderId(null);
    onFolderSelect(null);
  };

  if (loading)
    return <div>폴더 정보를 불러오는 중이예요. 잠시만 기다려주세요.</div>;
  if (error)
    return <div>폴더 정보를 조회하지 못했어요! 나중에 다시 시도해주세요.</div>;

  return (
    <div className={style.tabs}>
      <button
        className={`${selectedFolderId === null ? style.active : ""}`}
        onClick={handleAllFolderClick}
      >
        전체
      </button>
      {data &&
        Array.isArray(data.data) &&
        data.data.map((folder) => (
          <button
            key={folder.id}
            className={`${selectedFolderId === folder.id ? style.active : ""}`}
            onClick={() => handleFolderClick(folder.id)}
          >
            {folder.name}
          </button>
        ))}
    </div>
  );
}

export default FolderList;
