import style from "../styles/ContentActions.module.css";

// ContentActions -> '공유 이름변경 삭제'가 들어가는 부분(기능은 추후 구현)
function ContentActions() {
  return (
    <div className={style.content_actions_area}>
      <button className={style.shared_button}>공유</button>
      <button className={style.edit_button}>이름 변경</button>
      <button className={style.delete_button}>삭제</button>
    </div>
  );
}

export default ContentActions;
