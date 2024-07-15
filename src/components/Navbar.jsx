import airbnbLogo from '../assets/airbnb-logo.png'

function Navbar() {
    return (
        <> 
            <header>
                <img className='header--logo' src={airbnbLogo} alt="airbnb logo" />
            </header>
        </>
    )

}

export default Navbar   