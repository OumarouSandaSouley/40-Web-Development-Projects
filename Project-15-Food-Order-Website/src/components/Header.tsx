import { useState } from "react";
import { Link } from "react-router-dom";
import { UserButton, SignInButton, useUser } from "@clerk/clerk-react";
import { Menu, X, ShoppingCart, Pizza } from "lucide-react";

const Header = () => {
  const { isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <Pizza size={32} />
            <span>Pyza Pizza</span>
          </Link>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/menu" className="hover:text-red-200 transition-colors">
              Menu
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-1 hover:text-red-200 transition-colors"
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
            {isSignedIn ? (
              <>
                <Link
                  to="/orders"
                  className="hover:text-red-200 transition-colors"
                >
                  My Orders
                </Link>
                <UserButton afterSignOutUrl="/" />
              </>
            ) : (
              <SignInButton mode="modal">
                <button className="bg-white text-red-600 px-4 py-2 rounded-full hover:bg-red-100 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            )}
          </nav>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-red-700">
            <Link
              to="/menu"
              className="text-white hover:text-red-200 transition-colors"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link
              to="/cart"
              className="flex items-center space-x-1 text-white hover:text-red-200 transition-colors"
              onClick={toggleMenu}
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
            </Link>
            {isSignedIn && (
              <Link
                to="/orders"
                className="text-white hover:text-red-200 transition-colors"
                onClick={toggleMenu}
              >
                My Orders
              </Link>
            )}
            {isSignedIn ? (
              <div className="flex items-center space-x-2">
                <span className="text-white">Account</span>
                <UserButton afterSignOutUrl="/" />
              </div>
            ) : (
              <SignInButton mode="modal">
                <button className="bg-white text-red-600 px-4 py-2 rounded-full hover:bg-red-100 transition-colors">
                  Sign In
                </button>
              </SignInButton>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
