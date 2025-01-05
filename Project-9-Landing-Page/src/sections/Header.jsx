import logo from "../assets/logo.jpg";
import Button from "../components/Button";

const Header = () => {
  return (
    <header className="w-full py-2 flex items-center justify-between bg-transparent z-20 relative">
      <div className="flex items-center">
        <a href="#">
          <img src={logo} className="w-28 max-md:w-20" alt="" />
        </a>
      </div>
      <div className="flex items-center">
        <a href="https://forms.gle/xEpMonJyTEw4Dpqe6" target="_blank">
          <Button
            title="Rejoindre la CNBG &rarr;"
            className="border-primary bg-transparent hover:text-primary  !border-none text-dark underline font-extrabold font-kameron"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
