 
 
 


export default function Navbar(props) {

  
   

 
   
 
  return (

    <>
     
      <nav className={`navbar`} id='navbar-outer' style={{ borderBottom: props.theme === 'dark' ? "1px solid #1E7CC0" : "1px solid #F24B74" ,
    backgroundColor: props.theme === 'dark' ? "#0c073ef7" : "#fffffff7"
    }} >
        <div className="container-fluid" id='navbar-container-section'>
          <div className='nav-phone-number'>
            <a href="tel:999999999" style={{ color: props.theme === 'dark' ? "#fff" : "#F24B74" }}>999999999</a>
            
          </div>
          <div className='nav-logo'>
            <a href="/"><img src='my-images/sitelogofirst.png' alt="img" style={{ filter: props.theme === 'dark' ? "invert(1)" : "invert(0)" }} /></a>
  
          </div>
          <button className="navbar-toggler" id="navbar-toggler-button-top" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <div className='text-menu'>
              <p style={{ color: props.theme === 'light' ? '#f24b74' : '#1e7cc0' }}>menu</p>
            </div>
            <div className='menu-buttton'>
              <div className='button-top-toggle btn-toggle-first' style={{ background: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}></div>
              <div className='button-top-toggle btn-toggle-second' style={{ background: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}></div>
              <div className='button-top-toggle btn-toggle-third' style={{ background: props.theme === 'light' ? '#f24b74' : '#1E7CC0' }}></div>
            </div>
          </button>

          <div className="offcanvas offcanvas-end navbar-hide-show-toggle" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header" id="navbar-close-button">

              <button type="button" className="btn-close" id='close-nav-button' data-bs-dismiss="offcanvas" aria-label="Close">close</button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3" id='navbar-toggle-ul'>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">contact us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">about us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">our services</a>
                </li>


              </ul>

            </div>
          </div>
        </div>
      </nav>
      

       
     



    </>
  )
}
