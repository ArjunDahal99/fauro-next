import UserGallery from "@/components/profile/UserGallery";
import UserInfo from "@/components/profile/UserInfo";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <UserInfo />
        <UserGallery />
      </div>
    </>
  );
};

export default Profile;
