import CommonHeader from "../components/common/CommonHeader";
import LinkAdd from "../components/LinkAdd";

// // SharedHeader와 FolderHeader의 겹치는 부분은 공통 컴포넌트인 CommonHeader로 관리
// // 단, 공통 컴포넌트내에서 달라지는 부분인 LinkAdd 컴포넌트 전달
// function FolderHeader() {
//   return (
//     <CommonHeader headerType="folder">
//       <LinkAdd />
//     </CommonHeader>
//   );
// }

// export default FolderHeader;

function FolderHeader() {
  return (
    <div>
      <h2>FolderHeader 컴포넌트입니다.</h2>
      {/* <CommonHeader> */}
      <LinkAdd />
      {/* </CommonHeader> */}
    </div>
  );
}

export default FolderHeader;
