import "./Header.css"
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../../stateProvider';
import { auth } from "../../firebase";

function Header() {
  const [{basket, user}, dispatch] = useStateValue();

  const handleAuthentication = () =>{
    if(user) {
      auth.signOut();
    }
  }

  var data = "https://static.vecteezy.com/system/resources/previews/019/017/542/non_2x/amazon-logo-free-png.png"
  return (
    <div className='header'>
      <Link to="/">
        <img src={data} className='header__logo'/>
      </Link>

      <div className='header__search'>
        <input className='header__searchInput' type='text'/>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className='header__nav'>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>Hello Guest</span>
            <span className='hear__optionLineTwo'>{user? "Sign Out": "Sign In"}</span>
          </div>
        </Link>

        <div className='header__option'>
          <span className='header__optionLineOne'>Return</span>
          <span className='hear__optionLineTwo'>& Orders</span>
        </div>
        
        <div className='header__option'>
          <span className='header__optionLineOne'>Your</span>
          <span className='hear__optionLineTwo'>Prime</span>
        </div>

      </div>

      <Link to="/checkout">
        <div className='header__optionBasket'>
          <ShoppingBasketIcon />
          <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>
        </div>
      </Link>
    </div>
  )
}

export default Header