export default function Header() {

    return <header className="section is-hero" style={{ height: "0%", margin: "auto", zIndex:100 }} >
        <div
            data-collapse="medium"
            data-animation="default"
            data-duration={400}
            data-w-id="3e8339e5-3229-6e51-4fb1-b4ddcf9b7014"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navbar13_component delete-this-class w-nav" 
            style={{
                zIndex : 100
            }}
        >
            <div className="navbar13_container">

   
                <a
                    href="/"
                    aria-current="page"
                    className="navbar13_logo-link w-nav-brand w--current"
                >
                    <img
                        src="/images/logo.svg"
                        loading="lazy"
                        alt=""
                        className="navbar13_logo"
                    />
                </a>
                <nav role="navigation" className="navbar13_menu w-nav-menu">
                    <div className="navbar13_menu-link-wrapper">
                        <a href="/" className="navbar13_link w-nav-link">
                            Home
                        </a>
                        <a href="/#features" className="navbar13_link w-nav-link">
                            Features
                        </a>
                        <div className="with-vedion-icon">
                            <a href="#" className="navbar13_link _1 w-nav-link">
                                <span className="navbar_icon">&nbsp;</span>How it works
                            </a>
                        </div>
                        <a href="/#pricing" className="navbar13_link w-nav-link">
                            Pricing
                        </a>
                        <a href="/#faq" className="navbar13_link w-nav-link">
                            FAQ
                        </a>
                    </div>
                </nav>
                <div className="navbar13_button-wrapper">
                    <div className="navbar13_menu-button w-nav-button">
                        <div className="menu-icon2">
                            <div className="menu-icon2_line-top" />
                            <div className="menu-icon2_line-middle">
                                <div className="menu-icon_line-middle-inner" />
                            </div>
                            <div className="menu-icon2_line-bottom bg-black" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

}