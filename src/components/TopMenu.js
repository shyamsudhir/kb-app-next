import Image from 'next/image';



function TopMenu() {
  return (
<nav className="navbar navbar-expand-lg navbar-light  topmenu" style={{backgroundColor:'white'}}>
  <div className='container'>
      <a
          href="#"
          style={{
            backgroundColor: "white",
            position: "absolute",
            left: "10px",
            height: "50px",
            width: "150px",
            padding: "20px",
          }}
        >
          <Image
            src="/logo2.png"   // ✅ served from /public
            alt="SupportSPOC Logo"
            width={150}         // ✅ correct prop
            height={40}        // ✅ typo fixed
          />
        </a>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 d-flex">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="https://supportspoc.com">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://supportspoc.com/#products">Products</a>
        </li>
        <li className="nav-item"><a className="nav-link" href="https://supportspoc.com#features">Features </a></li>
        <li className="nav-item"><a className="nav-link" href="https://supportspoc.com/#about">Who We Are</a></li>
         <li className="nav-item"><a className="nav-link" href="https://supportspoc.com/#pricing">Pricing</a></li>
        <li className="nav-item"><a className="nav-link" href="https://supportspoc.com/#contact">Contact</a></li>
        <li className="nav-item"><a className="nav-link" href="https://app.supportspoc.com/login">Login</a></li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default TopMenu;
