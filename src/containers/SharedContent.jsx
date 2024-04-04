import CommonContent from "../components/common/CommonContent";
import SharedCardList from "../components/SharedCardList";
import style from "../styles/SharedAndFolderContent.module.css";

// SharedContent FolderContent 겹치는 부분은 공통 컴포넌트인 CommonContent로 관리
// SharedContent에서는 CommonContent 그대로 사용
function SharedContent() {
  return (
    <div className={style.shared_content}>
      <CommonContent>
        <SharedCardList endpoint="/sample/folder" />
      </CommonContent>
    </div>
  );
}

export default SharedContent;
