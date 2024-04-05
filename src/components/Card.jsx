import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import style from "../styles/Card.module.css";
import no_img from "../image/card-no-image.svg";

// 카드 컴포넌트를 클릭하면 해당하는 링크로 새로운 창을 띄워서 이동하게 해주세요.
// 이미지 -> (card.imageSource 활용)
// CardHeader -> ~ago 표시되는 부분(card.createdAt 활용)
// CardContent -> 설명 표시되는 부분(card.description 활용)
// CardFooter -> 생성날짜 표시되는 부분(card.createdAt 활용)
function Card({
  id,
  createdAt,
  url,
  title,
  description,
  imageSource,
  created_at,
  image_source,
  showStarButton,
}) {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className={style.card} onClick={handleClick}>
      <div className={style.card_img_container}>
        <img
          className={style.card_img}
          src={imageSource || image_source || no_img}
          alt={title}
        />
        {showStarButton && <button className={style.star_button}></button>}
      </div>
      <div className={style.card_info}>
        {createdAt && (
          <CardHeader createdAt={createdAt} showKebabMenu={false} />
        )}
        {created_at && (
          <CardHeader createdAt={created_at} showKebabMenu={true} />
        )}
        <CardContent description={description} />
        {createdAt && <CardFooter createdAt={createdAt} />}
        {created_at && <CardFooter createdAt={created_at} />}
      </div>
    </div>
  );
}
export default Card;
