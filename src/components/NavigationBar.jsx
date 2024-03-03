import logo from "../image/LinkbraryLogo.svg";
import style from "../styles/NavigationBar.module.css";

function NavigationBar({ data, error, loading }) {
  if (loading)
    return <div>사용자 정보를 불러오는 중이예요. 잠시만 기다려주세요.</div>;
  if (error)
    return (
      <div>사용자 정보를 조회하지 못했어요! 나중에 다시 시도해주세요.</div>
    );

  return (
    <div
      className={`${style.navigation_bar} ${data ? style.navigation_bar : style.navigation_bar_logout}`}
    >
      <div className={style.logo_account_container}>
        <img className={style.logo} src={logo} alt="LinkbraryLogo" />
        {data ? (
          <div className={style.account}>
            <img
              className={style.profile_img}
              src={data.profileImageSource || data?.data[0]?.image_source}
              alt="Profile"
            />
            <span className={style.profile_email}>
              {data.email || data?.data[0]?.email}
            </span>
          </div>
        ) : (
          <span className={style.sign_in_button}>로그인</span>
        )}
      </div>
    </div>
  );
}

export default NavigationBar;
