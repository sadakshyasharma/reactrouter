import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzuOsUI003LJMpoXkVLvDgmw4SgmJBo3msOA&usqp=CAU' />
       
       
      
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
     
    </nav>
  );
}

export default Navbar;
