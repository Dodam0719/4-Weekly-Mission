import Card from "./Card";
import { useGetData } from "./Hooks/useAsync";
import style from "../styles/CardList.module.css";

// CardList -> 카드 목록 부분
// SharedContent에서는 “/api/sample/folder”를 활용
// FolderContent -> 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI를 보여주세요.
//                -> FolderContent에서는 “전체” 폴더에 필요한 링크들 데이터는 “/api/users/1/links”를 활용하고, 이외의 폴더에 필요한 링크들 데이터는 “/api/users/1/links?folderId={해당 폴더 ID}”를 활용해 주세요.
//                -> 폴더 버튼을 클릭하면 폴더에 해당하는 링크들로 카드를 구성해 주세요. 폴더에 링크 데이터가 없을 때는 저장된 링크가 없다는 UI를 보여주세요.
function SharedCardList({ endpoint }) {
  const { data, error, loading } = useGetData(endpoint);

  if (loading)
    return (
      <div className={style.data_info}>
        카드 리스트 정보를 불러오는 중이예요. 잠시만 기다려주세요.
      </div>
    );
  if (error)
    return (
      <div className={style.data_info}>
        카드 리스트 정보를 조회하지 못했어요! 나중에 다시 시도해주세요.
      </div>
    );
  if (data && data.data.length === 0)
    return <div className={style.data_info}>저장된 링크가 없습니다.</div>;

  return (
    <div className={style.card_list}>
      {data &&
        Array.isArray(data.data) &&
        data.data.map((link) => <Card key={link.id} {...link} />)}
    </div>
  );
}

export default SharedCardList;
