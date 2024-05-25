import avatarImg from "../../assets/image-avatar.png";

const Avatar = () => {
  return (
    <a href="/" className="avatar">
      <img src={avatarImg} alt="" />
    </a>
  );
};

export default Avatar;
