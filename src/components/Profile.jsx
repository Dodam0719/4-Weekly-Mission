import { useGetData } from "./Hooks/useAsync";
import styles from "../styles/Profile.module.css";

// SharedHeader의 Profile 부분
function Profile() {
  const { data, error, loading } = useGetData("/sample/folder");

  if (!data) return <div>프로필 정보가 없어요!</div>;
  if (loading)
    return <div>프로필 정보를 불러오는 중이예요. 잠시만 기다려주세요.</div>;
  if (error)
    return (
      <div>프로필 정보를 조회하지 못했어요! 나중에 다시 시도해주세요.</div>
    );

  console.log(data);

  return (
    <div className={styles.profile}>
      <div className={styles.profile_container}>
        <div className={styles.avatar_and_username}>
          <img
            className={styles.avatar}
            src={data.folder?.owner.profileImageSource}
            alt="profile"
          />
          <span className={styles.username}>{data.folder?.owner.name}</span>
        </div>
        <span className={styles.foldername}>{data.folder?.name}</span>
      </div>
    </div>
  );
}

export default Profile;
