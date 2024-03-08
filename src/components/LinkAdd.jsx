import style from "../styles/LinkAdd.module.css";

// FolderHeader LinkAdd 부분
function LinkAdd() {
  return (
    <div className={style.link_add_container}>
      <div className={style.link_add}>
        <input type="text" placeholder="링크를 추가해 보세요." readOnly />
        <button className={style.link_add_btn}>
          <span>추가하기</span>
        </button>
      </div>
    </div>
  );
}

export default LinkAdd;
