import { useForm, SubmitHandler } from "react-hook-form"
import { NewsLetterAdd } from "../../services/api"
interface Input {
    email: string
}

export default function Footer() {

    const { register, handleSubmit, formState: { isSubmitSuccessful } } = useForm<Input>()
    const onSubmit: SubmitHandler<Input> = data => NewsLetterAdd(data)

    return <> <footer className="footer1_component">
        <div className="padding-global-3">
            <div className="container-large">
                <div className="padding-vertical padding-xxlarge">
                    <div className="padding-bottom padding-xxlarge">
                        <div className="w-layout-grid footer1_top-wrapper">
                            <div className="footer1_left-wrapper">
                                <div className="margin-bottom margin-small">
                                    <a href="#" className="footer1_logo-link w-nav-brand">
                                        <img
                                            src="/images/logo.svg"
                                            loading="lazy"
                                            alt=""
                                            className="navbar13_logo"
                                        />
                                    </a>
                                </div>
                                <div className="margin-bottom margin-small">
                                    <div>
                                        Join our newsletter to stay up to date on features and
                                        releases.
                                    </div>
                                </div>
                                <div className="footer1_form-block w-form">


                                    <form
                                        id="email-form"
                                        name="email-form"
                                        data-name="Email Form"
                                        className="footer1_form"
                                        data-wf-page-id="65cc776f094151ffa9f05627"
                                        data-wf-element-id="c4bf2222-0138-798e-fdec-51524fab645e"
                                        onSubmit={handleSubmit(onSubmit)}
                                    >
                                        <input
                                            className="form_input-2 w-input"
                                            maxLength={256}
                                            placeholder="Enter your email"
                                            type="email"
                                            {...register("email")}
                                            id="email-2"
                                        />





                                        <div className="div-block-5">
                                            <input
                                                type="submit"
                                                className="button-6 is-secondary is-small w-button"
                                                value={"Submit"}
                                            />
                                        </div>
                                    </form>

                                    {
                                        isSubmitSuccessful && <p>Thanks for joining our newsletter</p>
                                    }




                                    <div className="text-size-tiny">
                                        By subscribing you agree to with our{" "}
                                        <a href="privacy.html">
                                            <span>Privacy Policy</span>
                                        </a>{" "}
                                        and provide consent to receive updates from our company.
                                    </div>
                                    {/* <div className="success-message w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div>
                                    <div className="error-message w-form-fail">
                                        <div>
                                            Oops! Something went wrong while submitting the form.
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="w-layout-grid footer1_menu-wrapper">
                                <div className="footer1_link-list">
                                    <div className="margin-bottom margin-xsmall">
                                        <div className="text-weight-semibold">Map</div>
                                    </div>
                                    <a
                                        href="/#home"
                                        className="footer1_link w--current"
                                    >
                                        Home
                                    </a>
                                    <a href="/#features" className="footer1_link">
                                        Features
                                    </a>
                                    <a href="/#pricing" className="footer1_link">
                                        Pricing
                                    </a>
                                    <a href="/#faq" className="footer1_link">
                                        FAQ
                                    </a>
                                    <a href="/#how-it-works" className="footer1_link">
                                        How it works
                                    </a>
                                </div>
                                <div className="footer1_link-list">
                                    <div className="margin-bottom margin-xsmall">
                                        <div className="text-weight-semibold">Demos</div>
                                    </div>
                                    <a href="https://carlos-client.vercel.app/report/678422671e36a5bf9b9e2d2d" className="footer1_link">
                                        Food website
                                    </a>
                                    <a href="https://carlos-client.vercel.app/report/6784235451a269e209c2e0f2" className="footer1_link">
                                        Videogame website
                                    </a>
                                    <a href="https://carlos-client.vercel.app/report/678426c13f4dd75f3ae9033a" className="footer1_link">
                                        Forum home
                                    </a>
                                    <a href="https://carlos-client.vercel.app/report/67842a81d2092ec53eefe971" className="footer1_link">
                                        Startup landing
                                    </a>
                                </div>
                                <div className="footer1_link-list">
                                    <div className="margin-bottom margin-xsmall">
                                        <div className="text-weight-semibold">Follow us</div>
                                    </div>
                                    <a href="#" className="footer1_social-link w-inline-block">
                                        <div className="icon-embed-xsmall w-embed">
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M22 12.0611C22 6.50451 17.5229 2 12 2C6.47715 2 2 6.50451 2 12.0611C2 17.0828 5.65684 21.2452 10.4375 22V14.9694H7.89844V12.0611H10.4375V9.84452C10.4375 7.32296 11.9305 5.93012 14.2146 5.93012C15.3088 5.93012 16.4531 6.12663 16.4531 6.12663V8.60261H15.1922C13.95 8.60261 13.5625 9.37822 13.5625 10.1739V12.0611H16.3359L15.8926 14.9694H13.5625V22C18.3432 21.2452 22 17.083 22 12.0611Z"
                                                    fill="CurrentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div>Facebook</div>
                                    </a>
                                    <a href="#" className="footer1_social-link w-inline-block">
                                        <div className="icon-embed-xsmall w-embed">
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M16 3H8C5.23858 3 3 5.23858 3 8V16C3 18.7614 5.23858 21 8 21H16C18.7614 21 21 18.7614 21 16V8C21 5.23858 18.7614 3 16 3ZM19.25 16C19.2445 17.7926 17.7926 19.2445 16 19.25H8C6.20735 19.2445 4.75549 17.7926 4.75 16V8C4.75549 6.20735 6.20735 4.75549 8 4.75H16C17.7926 4.75549 19.2445 6.20735 19.25 8V16ZM16.75 8.25C17.3023 8.25 17.75 7.80228 17.75 7.25C17.75 6.69772 17.3023 6.25 16.75 6.25C16.1977 6.25 15.75 6.69772 15.75 7.25C15.75 7.80228 16.1977 8.25 16.75 8.25ZM12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5027 10.8057 16.0294 9.65957 15.1849 8.81508C14.3404 7.97059 13.1943 7.49734 12 7.5ZM9.25 12C9.25 13.5188 10.4812 14.75 12 14.75C13.5188 14.75 14.75 13.5188 14.75 12C14.75 10.4812 13.5188 9.25 12 9.25C10.4812 9.25 9.25 10.4812 9.25 12Z"
                                                    fill="CurrentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div>Instagram</div>
                                    </a>
                                    <a href="#" className="footer1_social-link w-inline-block">
                                        <div className="icon-embed-xsmall w-embed">
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17.1761 4H19.9362L13.9061 10.7774L21 20H15.4456L11.0951 14.4066L6.11723 20H3.35544L9.80517 12.7508L3 4H8.69545L12.6279 9.11262L17.1761 4ZM16.2073 18.3754H17.7368L7.86441 5.53928H6.2232L16.2073 18.3754Z"
                                                    fill="CurrentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div>X</div>
                                    </a>
                                    <a href="#" className="footer1_social-link w-inline-block">
                                        <div className="icon-embed-xsmall w-embed">
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.5 3C3.67157 3 3 3.67157 3 4.5V19.5C3 20.3284 3.67157 21 4.5 21H19.5C20.3284 21 21 20.3284 21 19.5V4.5C21 3.67157 20.3284 3 19.5 3H4.5ZM8.52076 7.00272C8.52639 7.95897 7.81061 8.54819 6.96123 8.54397C6.16107 8.53975 5.46357 7.90272 5.46779 7.00413C5.47201 6.15897 6.13998 5.47975 7.00764 5.49944C7.88795 5.51913 8.52639 6.1646 8.52076 7.00272ZM12.2797 9.76176H9.75971H9.7583V18.3216H12.4217V18.1219C12.4217 17.742 12.4214 17.362 12.4211 16.9819V16.9818V16.9816V16.9815V16.9812C12.4203 15.9674 12.4194 14.9532 12.4246 13.9397C12.426 13.6936 12.4372 13.4377 12.5005 13.2028C12.7381 12.3253 13.5271 11.7586 14.4074 11.8979C14.9727 11.9864 15.3467 12.3141 15.5042 12.8471C15.6013 13.1803 15.6449 13.5389 15.6491 13.8863C15.6605 14.9339 15.6589 15.9815 15.6573 17.0292V17.0294C15.6567 17.3992 15.6561 17.769 15.6561 18.1388V18.3202H18.328V18.1149C18.328 17.6629 18.3278 17.211 18.3275 16.7591V16.759V16.7588C18.327 15.6293 18.3264 14.5001 18.3294 13.3702C18.3308 12.8597 18.276 12.3563 18.1508 11.8627C17.9638 11.1286 17.5771 10.5211 16.9485 10.0824C16.5027 9.77019 16.0133 9.5691 15.4663 9.5466C15.404 9.54401 15.3412 9.54062 15.2781 9.53721L15.2781 9.53721L15.2781 9.53721C14.9984 9.52209 14.7141 9.50673 14.4467 9.56066C13.6817 9.71394 13.0096 10.0641 12.5019 10.6814C12.4429 10.7522 12.3852 10.8241 12.2991 10.9314L12.2991 10.9315L12.2797 10.9557V9.76176ZM5.68164 18.3244H8.33242V9.76733H5.68164V18.3244Z"
                                                    fill="CurrentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div>LinkedIn</div>
                                    </a>
                                    <a href="#" className="footer1_social-link w-inline-block">
                                        <div className="icon-embed-xsmall w-embed">
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M20.5686 4.77345C21.5163 5.02692 22.2555 5.76903 22.5118 6.71673C23.1821 9.42042 23.1385 14.5321 22.5259 17.278C22.2724 18.2257 21.5303 18.965 20.5826 19.2213C17.9071 19.8831 5.92356 19.8015 3.40294 19.2213C2.45524 18.9678 1.71595 18.2257 1.45966 17.278C0.827391 14.7011 0.871044 9.25144 1.44558 6.73081C1.69905 5.78311 2.44116 5.04382 3.38886 4.78753C6.96561 4.0412 19.2956 4.282 20.5686 4.77345ZM9.86682 8.70227L15.6122 11.9974L9.86682 15.2925V8.70227Z"
                                                    fill="CurrentColor"
                                                />
                                            </svg>
                                        </div>
                                        <div>Youtube</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="line-divider" />
                    <div className="padding-top padding-medium">
                        <div className="footer1_bottom-wrapper">
                            <div className="footer1_credit-text">
                                © 2024 Analyzify. All rights reserved.
                            </div>
                            <div className="w-layout-grid footer1_legal-list">
                                <a href="policy" className="footer_link">
                                    Privacy Policy
                                </a>
                                <a href="/terms" className="footer_link">
                                    Terms &amp; Conditions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        <div className="backtotop_component">
            <a href="#home" className="backtotop_button w-inline-block">
                <img
                    src="/images/icon_chevron_up.svg"
                    loading="lazy"
                    alt=""
                    className="icon-1x1-small-2"
                />
            </a>
        </div>

    </>

}