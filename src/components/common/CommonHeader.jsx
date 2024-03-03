import { useGetData } from "../Hooks/useAsync";
import NavigationBar from "../NavigationBar";

// SharedHeader에서는 Profile을 받아오고, FolderHeader에서는 LinkAdd를 받아옴
function CommonHeader({ endpoint, children }) {
  const { data, error, loading } = useGetData(endpoint);

  return (
    <div>
      <NavigationBar data={data} error={error} loading={loading} />
      {children}
    </div>
  );
}

export default CommonHeader;
