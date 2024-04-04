import style from "../styles/AddFolderButton.module.css";

// AddFolderButton -> '폴더 추가 +'가 들어가는 부분(기능은 추후 구현)
function AddFolderButton() {
  return <button className={style.add_folder_button}>폴더추가 +</button>;
}

export default AddFolderButton;
