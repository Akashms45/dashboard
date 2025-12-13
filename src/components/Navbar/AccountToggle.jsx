import profile from "../../assest/profilepic.jpg";

export const AccountToggle = () => {
  const fullName = "Totok Michael";
  const email = "tmichael20@mail.com";
  return (
    <button
      className="
        flex items-center gap-3 px-2 py-1 
        rounded-lg transition-all 
        hover:bg-stone-200 
      "
    >
      <img
        className="w-14 h-14 rounded-full shadow object-cover"
        src={profile}
        alt="profile"
      />

      <div className=" text-left ">
        <span className="text-lg font-semibold text-stone-800 block">
          {fullName}
        </span>
        <span className="text-xs text-stone-500 block">{email}</span>
      </div>
    </button>
  );
};
