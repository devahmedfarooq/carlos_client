import "./Loading.page.css"

interface PageProps {
    message: string
}

export default function LoadPage({ message }: PageProps) {
    return (
        <div id="home" className="section is-hero">
            <div
                data-collapse="medium"
                data-animation="default"
                data-duration={400}
                data-w-id="3e8339e5-3229-6e51-4fb1-b4ddcf9b7014"
                data-easing="ease"
                data-easing2="ease"
                role="banner"
                className="navbar13_component delete-this-class w-nav"
            >
                <div className="navbar13_container">
                    <a href="index.html" className="navbar13_logo-link w-nav-brand">
                        <img
                            src="/images/logo.svg"
                            loading="lazy"
                            alt=""
                            className="navbar13_logo"
                        />
                    </a>
                    <nav role="navigation" className="navbar13_menu w-nav-menu">
                        <div className="navbar13_menu-link-wrapper">
                            <a href="#home" className="navbar13_link w-nav-link">
                                Home
                            </a>
                            <a href="#" className="navbar13_link w-nav-link">
                                Features
                            </a>
                            <div className="with-vedion-icon">
                                <a href="#" className="navbar13_link _1 w-nav-link">
                                    <span className="navbar_icon">&nbsp;</span>How it works
                                </a>
                            </div>
                            <a href="#pricing" className="navbar13_link w-nav-link">
                                Pricing
                            </a>
                            <a href="#" className="navbar13_link w-nav-link">
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
            <div className="background_animation">
                <img
                    src="/images/background_0-01.svg"
                    loading="lazy"
                    data-w-id="64c8894d-809f-a9a7-9d27-af984718930c"
                    alt=""
                    className="image"
                />
                <img
                    src="/images/background_1-01.svg"
                    loading="lazy"
                    data-w-id="8a7ddf04-710e-74c0-da07-abf82ef4388e"
                    alt=""
                    className="image"
                />
                <img
                    src="/images/background_2-01.svg"
                    loading="lazy"
                    data-w-id="cefe0b23-b853-fceb-a589-91aa76cbde97"
                    alt=""
                    className="image"
                />
                <img
                    src="/images/background_3-01.svg"
                    loading="lazy"
                    data-w-id="41c62517-1d6a-78a1-8252-7efd8291a095"
                    alt=""
                    className="image"
                />
                <div className="global-styles w-embed">
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                '\n/* Make text look crisper and more legible in all browsers */\nbody {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-smoothing: antialiased;\n  text-rendering: optimizeLegibility;\n}\n/* Focus state style for keyboard navigation for the focusable elements */\n*[tabindex]:focus-visible,\n  input[type="file"]:focus-visible {\n   outline: 0.125rem solid #4d65ff;\n   outline-offset: 0.125rem;\n}\n/* Set color style to inherit */\n.inherit-color * {\n    color: inherit;\n}\n/* Get rid of top margin on first element in any rich text element */\n.w-richtext > :not(div):first-child, .w-richtext > div:first-child > :first-child {\n  margin-top: 0 !important;\n}\n/* Get rid of bottom margin on last element in any rich text element */\n.w-richtext>:last-child, .w-richtext ol li:last-child, .w-richtext ul li:last-child {\n\tmargin-bottom: 0 !important;\n}\n/* Make sure containers never lose their center alignment */\n.container-medium,.container-small, .container-large {\n\tmargin-right: auto !important;\n  margin-left: auto !important;\n}\n/* \nMake the following elements inherit typography styles from the parent and not have hardcoded values. \nImportant: You will not be able to style for example "All Links" in Designer with this CSS applied.\nUncomment this CSS to use it in the project. Leave this message for future hand-off.\n*/\n/*\na,\n.w-input,\n.w-select,\n.w-tab-link,\n.w-nav-link,\n.w-dropdown-btn,\n.w-dropdown-toggle,\n.w-dropdown-link {\n  color: inherit;\n  text-decoration: inherit;\n  font-size: inherit;\n}\n*/\n/* Apply "..." after 3 lines of text */\n.text-style-3lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 3;\n\t-webkit-box-orient: vertical;\n}\n/* Apply "..." after 2 lines of text */\n.text-style-2lines {\n\tdisplay: -webkit-box;\n\toverflow: hidden;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n}\n/* Adds inline flex display */\n.display-inlineflex {\n  display: inline-flex;\n}\n/* These classes are never overwritten */\n.hide {\n  display: none !important;\n}\n@media screen and (max-width: 991px) {\n    .hide, .hide-tablet {\n        display: none !important;\n    }\n}\n  @media screen and (max-width: 767px) {\n    .hide-mobile-landscape{\n      display: none !important;\n    }\n}\n  @media screen and (max-width: 479px) {\n    .hide-mobile{\n      display: none !important;\n    }\n}\n.margin-0 {\n  margin: 0rem !important;\n}\n.padding-0 {\n  padding: 0rem !important;\n}\n.spacing-clean {\npadding: 0rem !important;\nmargin: 0rem !important;\n}\n.margin-top {\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.padding-top {\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.margin-right {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n  margin-left: 0rem !important;\n}\n.padding-right {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n  padding-left: 0rem !important;\n}\n.margin-bottom {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.padding-bottom {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n.margin-left {\n  margin-top: 0rem !important;\n  margin-right: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.padding-left {\n  padding-top: 0rem !important;\n  padding-right: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.margin-horizontal {\n  margin-top: 0rem !important;\n  margin-bottom: 0rem !important;\n}\n.padding-horizontal {\n  padding-top: 0rem !important;\n  padding-bottom: 0rem !important;\n}\n.margin-vertical {\n  margin-right: 0rem !important;\n  margin-left: 0rem !important;\n}\n.padding-vertical {\n  padding-right: 0rem !important;\n  padding-left: 0rem !important;\n}\n'
                        }}
                    />
                </div>
            </div>
            <div className="padding-global relative iii">
                <div className="container-large relative">
                    <div className="padding-section-medium relative">
                        <div className="hero_wrappar">
                            <div className="w-layout-vflex max-width-large lkad">
                                <img
                                    src="/images/extra-01-animation-2.svg"
                                    loading="lazy"
                                    width={247}
                                    alt=""
                                />
                            </div>
                            <div className="w-layout-vflex margin-top margin-large">
                                <div className="w-layout-vflex max-width-xlarge text-align-center auto">
                                    <p className="hero_paragraph text-size-medium _1">
                                        {message}
                                        <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}