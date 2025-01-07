import './Home.page.css'
import React, { useState, useEffect } from 'react'
import { useAnalysis } from '../services/mutations.ts'
import { motion } from 'motion/react'


import LoadPage from './Loading/Loading.page.tsx'
import useLocale from '../redux/useLocale.ts'
import Accordin from '../components/ui/According.tsx'
import useMousePos from '../hooks/useMousePos.tsx'
import TestimonialCard from '../components/ui/TestimonialCard.tsx'


export default function HomePage() {
    // const { loaded, unloaded, setReport, setRecomendation } = useData()
    const [url, setURL] = useState("")
    const { locale } = useLocale()
    const [is_error, setIsError] = useState(false)
    const mutate = useAnalysis()
    const { mousePos } = useMousePos()

    const [currentValue, setCurrentValue] = useState(0); // Initialize with 0
    const targetValue = 82; // Target value
    const duration = 750; // Duration in ms
    const intervalTime = 10; // Interval time in ms
    const increment = targetValue / (duration / intervalTime); // Increment step


    const handleUrlChange = (e: any) => {
        setURL(e.target.value)
    }


    if (mutate.isPending) {
        return <LoadPage message={locale?.loading.crawling!} />
    }

    if (mutate.isError) {
        setIsError(true)
        setTimeout(() => {
            setIsError(false)
        }, 2000)
    }

    if (mutate.isSuccess) {
        console.log("Success!: ", mutate.data.report._id)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentValue((prevValue) => {
                if (prevValue + increment >= targetValue) {
                    clearInterval(interval);
                    return targetValue;
                }
                return prevValue + increment;
            });
        }, intervalTime);

        return () => clearInterval(interval); // Cleanup interval
    }, [targetValue, increment]);


    return (
        <>
            <div id="home" className="section is-hero">

                <div className="background_animation">
                    <motion.img
                        src="/images/background_0-01.svg"
                        loading="lazy"
                        data-w-id="64c8894d-809f-a9a7-9d27-af984718930c"
                        alt=""
                        className="image"
                        animate={{ x: Math.min(mousePos.x / 35, 20), transition: { type: "tween", duration: 0.75 } }}
                    />
                    <motion.img
                        src="/images/background_1-01.svg"
                        loading="lazy"
                        data-w-id="8a7ddf04-710e-74c0-da07-abf82ef4388e"
                        alt=""
                        className="image"
                        animate={{ x: Math.min(mousePos.x / 10, 18), transition: { type: "tween", duration: 0.75 } }}

                    />
                    <motion.img
                        src="/images/background_2-01.svg"
                        loading="lazy"
                        data-w-id="cefe0b23-b853-fceb-a589-91aa76cbde97"
                        alt=""
                        className="image"
                        animate={{ x: Math.min(mousePos.x / 45, 16), transition: { type: "tween", duration: 0.75 } }}

                    />
                    <motion.img
                        src="/images/background_3-01.svg"
                        loading="lazy"
                        data-w-id="41c62517-1d6a-78a1-8252-7efd8291a095"
                        alt=""
                        className="image"
                        animate={{ x: Math.min(mousePos.x / 35, 15), transition: { type: "tween", duration: 0.75 } }}

                    />
                </div>
                <div className="padding-global relative iii">
                    <div className="container-large relative">
                        <div className="padding-section-medium relative">
                            <div className="hero_wrappar">
                                <div className="w-layout-vflex max-width-large lkad">
                                    <div className="btn--hero-parent">
                                        <div>
                                            <span className="text-span"></span>Obtain more sells
                                        </div>
                                    </div>
                                    <h1 className="hero_heading text-align-center sdf" style={{ margin: 0 }}>
                                        Improve your SEO
                                    </h1>
                                </div>
                                <div className="w-layout-vflex margin-top margin-large">
                                    <div className="w-layout-vflex max-width-xlarge text-align-center auto">
                                        <p className="hero_paragraph text-size-medium _1">
                                            Get all the power of the Al to analyze your website with a
                                            comprehensive report in seconds.
                                        </p>
                                    </div>
                                </div>
                                <div className="hero-form-wrp">
                                    <div className="form-block w-form">
                                        <div
                                            id="email-form-2"
                                            data-name="Email Form 2"
                                            className="form"
                                            data-wf-page-id="65cc776f094151ffa9f05627"
                                            data-wf-element-id="f4eb2c74-f836-1889-93fe-e2ede93329bb"
                                        >
                                            <input
                                                className="text-field w-input"
                                                maxLength={256}
                                                name="name"
                                                data-name="Name"
                                                placeholder="Introduce your website URL"
                                                type="text"
                                                id="name"
                                                value={url}
                                                onChange={handleUrlChange}
                                            />
                                            <div className="hero-form-btn-wrap" onClick={() => mutate.mutate(url)}>
                                                <div
                                                    className="lottie-animation-2"
                                                    data-w-id="9cd6d89e-d448-04e5-af13-f7c033050232"
                                                    data-animation-type="lottie"
                                                    data-src="documents/Animation---1708478095981-2.json"
                                                    data-loop={1}
                                                    data-direction={1}
                                                    data-autoplay={1}
                                                    data-is-ix2-target={0}
                                                    data-renderer="svg"
                                                    data-default-duration="1.468134741669782"
                                                    data-duration={0}

                                                />
                                                <button
                                                    /*                                                 
                                                    type="submit"
                                                    data-wait="Please wait..."
                                                     */
                                                    className="submit-button w-button"
                                                    defaultValue="Analyze"

                                                >
                                                    Analyze
                                                </button>
                                            </div>
                                        </div>
                                        {/*   <div className="w-form-done">
                                        <div>Thank you! Your submission has been received!</div>
                                    </div> */}
                                        {
                                            is_error ? <div className="w-form-fail">
                                                <div>{mutate.data?.report.is_paid}</div>
                                            </div> : null

                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            <>
                <motion.section

                    id="features" className="section_layout230">
                    <div className="padding-global-3">
                        <div className="container-large">
                            <div className="padding-section-large-5">
                                <div className="extra-heading-btn">
                                    <div className="w-layout-vflex flex-block">
                                        <div className="btn--hero-parent">
                                            <div>
                                                <span className="text-span"></span>AI in your hand
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="layout-heading">Features</h2>
                                    <p className="text-size-medium-6">
                                        Unlock actionable SEO intelligence in moments, not days.
                                    </p>
                                    <div className="w-layout-grid layout230_component">

                                        <motion.div
                                            data-w-id="a55acc0b-5fa1-d9e5-db7e-b4410ed7db62"
                                            style={{ opacity: 0, scale: 0.75 }}
                                            whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween', delay: 0.25 } }}
                                            className="layout230_item"
                                        >
                                            <div className="layout230_image-wrapper">
                                                <img
                                                    src="/images/features-01.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="layout230_image"
                                                />
                                            </div>
                                            <h3 className="heading-style-h5-3">AI powered</h3>
                                            <div className="spacer-xsmall-2" />
                                            <p>
                                                Use the vast knowledge of advance Artificial Intelligence in
                                                your favour.
                                            </p>
                                            <div className="button-group-2 is-center">
                                                <a
                                                    href="#"
                                                    className="button-7 is-link is-icon po w-inline-block"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            data-w-id="a55acc0b-5fa1-d9e5-db7e-b4410ed7db71"
                                            style={{ opacity: 0, scale: 0.75 }}
                                            whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween', delay: 0.40 } }}
                                            className="layout230_item"
                                        >
                                            <div className="layout230_image-wrapper">
                                                <img
                                                    src="/images/features-02.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="layout230_image"
                                                />
                                            </div>
                                            <h3 className="heading-style-h5-3">Step by step</h3>
                                            <div className="spacer-xsmall-2" />
                                            <p>
                                                Step by step analysis with direct how to improve actions you
                                                can make.
                                            </p>
                                        </motion.div>


                                        <motion.div
                                            data-w-id="a55acc0b-5fa1-d9e5-db7e-b4410ed7db80"
                                            style={{ opacity: 0, scale: 0.75 }}
                                            whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween', delay: 0.55 } }}
                                            className="layout230_item"
                                        >
                                            <div className="layout230_image-wrapper">
                                                <img
                                                    src="/images/features-03.svg"
                                                    loading="lazy"
                                                    alt=""
                                                    className="layout230_image"
                                                />
                                            </div>
                                            <h3 className="heading-style-h5-3">Fast, in seconds</h3>
                                            <div className="spacer-xsmall-2" />
                                            <p>Forget about waiting a week for a manual old SEO audit.</p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>



            </>



            <>

                <motion.div className="section-2 " style={{ opacity: 0, }}
                    whileInView={{ opacity: 1, transition: { type: 'tween', delay: 0.25 } }}>
                    <img
                        src="/images/Hinterrhein.svg"
                        loading="lazy"
                        alt=""
                        className="abs-img _1 _2"
                    />
                    <div className="padding-global-5 bad-score">
                        <div className="container-large-2">
                            <div className="padding-section-medium">
                                <div className="featured_wrappar">
                                    <div className="margin-bottom margin-xxlarge">
                                        <div className="max-width-large">
                                            <div className="w-layout-vflex flex-block">
                                                <div className="btn--hero-parent">
                                                    <div>
                                                        <span className="text-span"></span>How it works
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="margin-bottom margin-small">
                                                <h2>
                                                    <strong>What we analyze</strong>
                                                </h2>
                                            </div>
                                            <p className="text-size-medium-6">
                                                Analyzify crawls all the information from your
                                                website:&nbsp;texts, images, code, sections, logo, colours,
                                                typefaces, writting style, claim, call to actions... &nbsp;and
                                                gives an score to all the elements comparing your website with
                                                best practices for result-driven objectives.
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        data-w-id="4b8ac83d-34d2-7a33-7583-a21d62287902"
                                        style={{ opacity: 1 }}
                                        className="sumary_wrappar margin-top margin-large"
                                    >
                                        <div className="left_sumary">
                                            <div
                                                className="circular-progress"
                                                style={{
                                                    "--percentage": currentValue * 3.6, // Update percentage dynamically
                                                } as React.CSSProperties}
                                            >
                                                <div className="value-container">
                                                    <div id="progress">{Math.floor(currentValue)}</div>
                                                    <div>&nbsp;/&nbsp;100</div>
                                                </div>
                                            </div>
                                            <div className="code w-embed w-script">
                                                <style
                                                    dangerouslySetInnerHTML={{
                                                        __html:
                                                            "\n    .circular-progress {\n        background: conic-gradient(\n            #3b8376 0deg,\n            #3b8376 calc(var(--percentage) * 1deg),\n            #ededed calc(var(--percentage) * 1deg),\n            #ededed 360deg\n        );\n    }\n    .circular-progress::before {\n        content: '';\n        position: absolute;\n        width: 140px;\n        height: 140px;\n        background-color: white;\n        border-radius: 50%;\n    }\n    "
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="right_sumary">
                                            <h5 className="sumary-card_heading-2">Your website summary</h5>
                                            <p className="sumary_paragraph-2 text-size-medium light-color">
                                                Your website demonstrates solid SEO foundations with strong
                                                keyword optimization and mobile performance. However, there are
                                                opportunities to enhance on-page optimization and content
                                                relevance for better search engine ranking and user engagement.
                                            </p>
                                            <div className="sumary-ran--wrap">
                                                <a href="#" className="btn-wrap red-score w-button">
                                                    <span className="score-icon">
                                                        <strong></strong>
                                                    </span>
                                                    <strong>Need improvement</strong>
                                                </a>
                                                <a href="#" className="btn-wrap green-score w-button">
                                                    <span className="score-icon">
                                                        <strong></strong>
                                                    </span>
                                                    <strong>Top copys</strong>
                                                </a>
                                                <a href="#" className="btn-wrap green-score w-button">
                                                    <span className="score-icon">
                                                        <strong></strong>
                                                    </span>
                                                    <strong>Good design</strong>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sumari_more-section">
                                    <div className="loading_wrapp-left">
                                        <div className="left_lottie green-score">
                                            <div className="wrap_loader">
                                                <div className="top-flair">
                                                    <div>
                                                        <span className="text-span">
                                                            <strong></strong>
                                                        </span>
                                                        Top
                                                    </div>
                                                </div>
                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="8df2ab80-3fae-0c79-d79b-026af1ab1e33"
                                                    data-animation-type="lottie"
                                                    data-src="https://uploads-ssl.webflow.com/65d6b07e881400eb28a1e8e5/65d6b07e881400eb28a1e927_Animation%20-%201707911314216.json"
                                                    data-loop={1}
                                                    data-direction={1}
                                                    data-autoplay={1}
                                                    data-is-ix2-target={0}
                                                    data-renderer="svg"
                                                    data-default-duration={6}
                                                    data-duration={0}
                                                />
                                                <div>
                                                    <a href="#" className="link green-score">
                                                        Design and Aesthetics
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="score-bar">
                                                <div className="score-bar-inside" />
                                            </div>
                                            <div>
                                                <a href="#" className="link green-score">
                                                    <strong>96 / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="left_lottie red-score">
                                            <div className="wrap_loader">
                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="8df2ab80-3fae-0c79-d79b-026af1ab1e3d"
                                                    data-animation-type="lottie"
                                                    data-src="https://uploads-ssl.webflow.com/65d6b07e881400eb28a1e8e5/65d6b07e881400eb28a1e927_Animation%20-%201707911314216.json"
                                                    data-loop={1}
                                                    data-direction={1}
                                                    data-autoplay={1}
                                                    data-is-ix2-target={0}
                                                    data-renderer="svg"
                                                    data-default-duration={6}
                                                    data-duration={0}
                                                />
                                                <div>
                                                    <a
                                                        href="https://www.roastmyweb.com/#designAndAesthetics"
                                                        className="link red-score"
                                                    >
                                                        Usability &amp; User Experience
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="score-bar red-score">
                                                <div className="score-bar-inside red-score" />
                                            </div>
                                            <div>
                                                <a href="#" className="link red-score">
                                                    <strong>46 / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="left_lottie">
                                            <div className="wrap_loader">
                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="8df2ab80-3fae-0c79-d79b-026af1ab1e47"
                                                    data-animation-type="lottie"
                                                    data-src="https://uploads-ssl.webflow.com/65d6b07e881400eb28a1e8e5/65d6b07e881400eb28a1e927_Animation%20-%201707911314216.json"
                                                    data-loop={1}
                                                    data-direction={1}
                                                    data-autoplay={1}
                                                    data-is-ix2-target={0}
                                                    data-renderer="svg"
                                                    data-default-duration={6}
                                                    data-duration={0}
                                                />
                                                <div>
                                                    <a href="#" className="link">
                                                        Mobile Performance
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="score-bar medium-score">
                                                <div className="score-bar-inside medium-score" />
                                            </div>
                                            <div>
                                                <a href="#" className="link">
                                                    <strong>68 / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rign-sumari">
                                        <div className="left_lottie">
                                            <div className="wrap_loader">
                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="8df2ab80-3fae-0c79-d79b-026af1ab1e5c"
                                                    data-animation-type="lottie"
                                                    data-src="https://uploads-ssl.webflow.com/65d6b07e881400eb28a1e8e5/65d6b07e881400eb28a1e927_Animation%20-%201707911314216.json"
                                                    data-loop={1}
                                                    data-direction={1}
                                                    data-autoplay={1}
                                                    data-is-ix2-target={0}
                                                    data-renderer="svg"
                                                    data-default-duration={6}
                                                    data-duration={0}
                                                />
                                                <div>
                                                    <a href="#" className="link">
                                                        On-page optimization
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="score-bar medium-score">
                                                <div className="score-bar-inside medium-score" />
                                            </div>
                                            <div>
                                                <a href="#" className="link">
                                                    <strong>57 / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="left_lottie">
                                            <div className="wrap_loader">
                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="c2ab60aa-baf3-7a5d-028f-5931a9809351"
                                                    data-animation-type="lottie"
                                                    data-src="https://uploads-ssl.webflow.com/65d6b07e881400eb28a1e8e5/65d6b07e881400eb28a1e927_Animation%20-%201707911314216.json"
                                                    data-loop={1}
                                                    data-direction={1}
                                                    data-autoplay={1}
                                                    data-is-ix2-target={0}
                                                    data-renderer="svg"
                                                    data-default-duration={6}
                                                    data-duration={0}
                                                />
                                                <div>
                                                    <a href="#" className="link">
                                                        Content Quality &amp;&nbsp;Relevance
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="score-bar medium-score">
                                                <div className="score-bar-inside medium-score" />
                                            </div>
                                            <div>
                                                <a href="#" className="link">
                                                    <strong>73 / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="left_lottie red-score">
                                            <div className="wrap_loader">
                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="dc81cdc8-6f84-6099-3aea-843dd100bc03"
                                                    data-animation-type="lottie"
                                                    data-src="https://uploads-ssl.webflow.com/65d6b07e881400eb28a1e8e5/65d6b07e881400eb28a1e927_Animation%20-%201707911314216.json"
                                                    data-loop={1}
                                                    data-direction={1}
                                                    data-autoplay={1}
                                                    data-is-ix2-target={0}
                                                    data-renderer="svg"
                                                    data-default-duration={6}
                                                    data-duration={0}
                                                />
                                                <div>
                                                    <a href="#" className="link red-score">
                                                        Competitive Analysis
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="score-bar red-score">
                                                <div className="score-bar-inside red-score" />
                                            </div>
                                            <div>
                                                <a href="#" className="link red-score">
                                                    <strong>31 / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


            </>



            <>

                <section id="video" className="section_video">
                    <div className="padding-global-3">
                        <div className="container-large">
                            <div className="padding-section-large-5-video">
                                <div className="margin-bottom margin-xxlarge">
                                    <div className="max-width-large">
                                        <div className="w-layout-vflex flex-block">
                                            <div className="btn--hero-parent">
                                                <div>
                                                    <span className="text-span"></span>Explainer video
                                                </div>
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <h2>
                                                <strong>Ready in 1 minute</strong>
                                            </h2>
                                        </div>
                                        <p className="text-size-medium-6">
                                            In this video, you will understand how Analyzify crawls all the
                                            information from your website and creates a full customized report
                                            using the most poweful AI models.
                                        </p>
                                        <motion.div
                                            data-w-id="db2b6512-a6b0-a5ec-c3e7-677900d34e92"
                                            id="how-it-works"
                                            className="div-block-7"
                                            style={{ opacity: 0 }}
                                            whileInView={{ opacity: 1, transition: { type: 'tween', delay: 0.25 } }}
                                        >
                                            <div
                                                style={{ paddingTop: "56.17021276595745%" }}
                                                className="w-embed-youtubevideo"
                                            >
                                                <iframe
                                                    src="https://www.youtube.com/embed/2Nx7twchvW0" title="How does Analyzify work"
                                                    style={{
                                                        position: "absolute",
                                                        left: 0,
                                                        top: 0,
                                                        width: "100%",
                                                        height: "100%",
                                                        pointerEvents: "auto"
                                                    }}
                                                    allow="autoplay; encrypted-media"
                                                />
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </>



            <>
                <motion.section style={{ opacity: 0, }}
                    whileInView={{ opacity: 1, transition: { type: 'tween', delay: 0.25 } }} className="section_testimonial24">
                    <div className="padding-global-3">
                        <div className="container-large">
                            <div className="padding-section-large-5">
                                <div className="margin-bottom margin-xxlarge">
                                    <div className="max-width-large">
                                        <div className="w-layout-vflex flex-block">
                                            <div className="btn--hero-parent">
                                                <div>
                                                    <span className="text-span"></span>Customer testimonials
                                                </div>
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <h2>
                                                <strong>Success Stories</strong>
                                            </h2>
                                        </div>
                                        <p className="text-size-medium-6">
                                            Our clients have transformed their online presence with Analyzify.
                                            See what they have to say about their journey to the top of search
                                            results.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-delay={4000}
                                    data-animation="slide"
                                    className="testimonial24_component w-slider"
                                    data-autoplay="false"
                                    data-easing="ease"
                                    data-hide-arrows="false"
                                    data-disable-swipe="false"
                                    data-autoplay-limit={0}
                                    data-nav-spacing={3}
                                    data-duration={500}
                                    data-infinite="true"
                                >
                                    <div className="testimonial24_mask w-slider-mask">

                                        <TestimonialCard />
                                        <TestimonialCard />
                                        <TestimonialCard />
                                        <TestimonialCard />


                                    </div>
                                    <div className="testimonial24_arrow is-left w-slider-arrow-left">
                                        <div className="testimonial24_arrow-icon w-embed">
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
                                                    fill="#5b544e"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="testimonial24_arrow w-slider-arrow-right">
                                        <div className="testimonial24_arrow-icon w-embed">
                                            <svg
                                                width="100%"
                                                height="100%"
                                                viewBox="0 0 16 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
                                                    fill="#5b544e"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="testimonial24_slide-nav w-slider-nav w-slider-nav-invert w-round" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </>





            <>
                <section id="pricing" className="pricing_seciton">
                    <div className="padding-global-4">
                        <div className="container-large">
                            <div className="padding-section-large-6">
                                <h2 className="heading-2">See Our Pricing</h2>
                                <div className="padding-bottom padding-medium" />
                                <div className="pricing1_component">
                                    <div className="pricing1_item">
                                        <div className="text-weight-bold">Full</div>
                                        <div className="pricing1_cost">$24.99</div>
                                        <div className="padding-bottom padding-medium" />
                                        <div className="pricing1_feature-list">
                                            <div className="pricing1_feature">
                                                <div className="pricing1_checkmark w-embed">
                                                    <svg
                                                        width="100%"
                                                        viewBox="0 0 17 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>1 full website</div>
                                            </div>
                                            <div className="pricing1_feature">
                                                <div className="pricing1_checkmark w-embed">
                                                    <svg
                                                        width="100%"
                                                        viewBox="0 0 17 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>No sections limit</div>
                                            </div>
                                            <div className="pricing1_feature">
                                                <div className="pricing1_checkmark w-embed">
                                                    <svg
                                                        width="100%"
                                                        viewBox="0 0 17 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>More than 1 page</div>
                                            </div>
                                            <div className="pricing1_feature">
                                                <div className="pricing1_checkmark w-embed">
                                                    <svg
                                                        width="100%"
                                                        viewBox="0 0 17 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>Extended analysis</div>
                                            </div>
                                        </div>
                                        <div className="padding-bottom padding-medium" />
                                        <a href="#home" className="button-4 max-width-full w-button">
                                            Coming soon
                                        </a>
                                    </div>
                                    <div
                                        id="w-node-_630b8140-5e58-4eaf-ac79-19288adecc61-a9f05627"
                                        className="pricing1_value-item"
                                    >
                                        <div className="pricing1_item">
                                            <div className="prices_flair">
                                                <div>
                                                    <span className="text-span"></span>Best Deal
                                                </div>
                                            </div>
                                            <div className="text-weight-bold">Standard</div>
                                            <div className="pricing1_cost">$4.99</div>
                                            <div className="padding-bottom padding-medium" />
                                            <div className="pricing1_feature-list">
                                                <div className="pricing1_feature">
                                                    <div className="pricing1_checkmark w-embed">
                                                        <svg
                                                            width="100%"
                                                            viewBox="0 0 17 13"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text-block-3">1 website</div>
                                                </div>
                                                <div className="pricing1_feature">
                                                    <div className="pricing1_checkmark w-embed">
                                                        <svg
                                                            width="100%"
                                                            viewBox="0 0 17 13"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div>Up to 10 sections</div>
                                                </div>
                                                <div className="pricing1_feature">
                                                    <div className="pricing1_checkmark w-embed">
                                                        <svg
                                                            width="100%"
                                                            viewBox="0 0 17 13"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text-block-4">1 page of the website</div>
                                                </div>
                                                <div className="pricing1_feature">
                                                    <div className="pricing1_crossmark w-embed">
                                                        <svg
                                                            width="100%"
                                                            viewBox="0 0 12 13"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M11.1339 2.88388C11.622 2.39573 11.622 1.60427 11.1339 1.11612C10.6457 0.627961 9.85427 0.627961 9.36612 1.11612L5.75 4.73223L2.13388 1.11612C1.64573 0.627961 0.854272 0.627961 0.366117 1.11612C-0.122039 1.60427 -0.122039 2.39573 0.366117 2.88388L3.98223 6.5L0.366117 10.1161C-0.122039 10.6043 -0.122039 11.3957 0.366117 11.8839C0.854272 12.372 1.64573 12.372 2.13388 11.8839L5.75 8.26777L9.36612 11.8839C9.85427 12.372 10.6457 12.372 11.1339 11.8839C11.622 11.3957 11.622 10.6043 11.1339 10.1161L7.51777 6.5L11.1339 2.88388Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text-style-muted text-style-strikethrough">
                                                        More than 1 page
                                                    </div>
                                                </div>
                                                <div className="pricing1_feature">
                                                    <div className="pricing1_crossmark w-embed">
                                                        <svg
                                                            width="100%"
                                                            viewBox="0 0 12 13"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                clipRule="evenodd"
                                                                d="M11.1339 2.88388C11.622 2.39573 11.622 1.60427 11.1339 1.11612C10.6457 0.627961 9.85427 0.627961 9.36612 1.11612L5.75 4.73223L2.13388 1.11612C1.64573 0.627961 0.854272 0.627961 0.366117 1.11612C-0.122039 1.60427 -0.122039 2.39573 0.366117 2.88388L3.98223 6.5L0.366117 10.1161C-0.122039 10.6043 -0.122039 11.3957 0.366117 11.8839C0.854272 12.372 1.64573 12.372 2.13388 11.8839L5.75 8.26777L9.36612 11.8839C9.85427 12.372 10.6457 12.372 11.1339 11.8839C11.622 11.3957 11.622 10.6043 11.1339 10.1161L7.51777 6.5L11.1339 2.88388Z"
                                                                fill="currentColor"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <div className="text-style-muted text-style-strikethrough">
                                                        Extended analysis
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="padding-bottom padding-medium" />
                                            <a href="#home" className="button-4 max-width-full w-button">
                                                Analyze now
                                            </a>
                                        </div>
                                    </div>
                                    <div className="pricing1_item">
                                        <div className="text-weight-bold">Marketing agencies</div>
                                        <div className="pricing1_cost">Customized</div>
                                        <div className="padding-bottom padding-medium" />
                                        <div className="pricing1_feature-list">
                                            <div className="pricing1_feature">
                                                <div className="pricing1_checkmark w-embed">
                                                    <svg
                                                        width="100%"
                                                        viewBox="0 0 17 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>Unlimited websites</div>
                                            </div>
                                            <div className="pricing1_feature">
                                                <div className="pricing1_checkmark w-embed">
                                                    <svg
                                                        width="100%"
                                                        viewBox="0 0 17 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>Control with dashboard</div>
                                            </div>
                                            <div className="pricing1_feature">
                                                <div className="pricing1_checkmark w-embed">
                                                    <svg
                                                        width="100%"
                                                        viewBox="0 0 17 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>Unlimited pages</div>
                                            </div>
                                            <div className="pricing1_feature">
                                                <div className="pricing1_checkmark w-embed">
                                                    <svg
                                                        width="100%"
                                                        viewBox="0 0 17 13"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            clipRule="evenodd"
                                                            d="M16.3839 1.11612C16.872 1.60427 16.872 2.39573 16.3839 2.88388L7.38388 11.8839C6.89573 12.372 6.10427 12.372 5.61612 11.8839L1.11612 7.38388C0.627961 6.89573 0.627961 6.10427 1.11612 5.61612C1.60427 5.12796 2.39573 5.12796 2.88388 5.61612L6.5 9.23223L14.6161 1.11612C15.1043 0.627961 15.8957 0.627961 16.3839 1.11612Z"
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                </div>
                                                <div>Extended analysis</div>
                                            </div>
                                        </div>
                                        <div className="padding-bottom padding-medium" />
                                        <a href="mailto:support@analyzify.ai" className="button-4 max-width-full w-button">
                                            Contact
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="pricing" className="section_pricing23 hide">
                    <div className="padding-global-2">
                        <div className="container-large">
                            <div className="padding-section-large-2">
                                <div className="margin-bottom margin-large">
                                    <div className="text-align-center-2">
                                        <div className="max-width-large align-center">
                                            <div className="margin-bottom margin-small">
                                                <h2 className="heading">Straight-Up Pricing.</h2>
                                            </div>
                                            <p className="text-size-medium-3">
                                                Love it or your money back within 14 days. No hoops, no
                                                hassle, no kidding.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    data-current="Tab 2"
                                    data-easing="ease"
                                    data-duration-in={300}
                                    data-duration-out={100}
                                    className="pricing23_component w-tabs"
                                >
                                    <div className="pricing23_tabs-menu w-tab-menu">
                                        <a
                                            data-w-tab="Tab 1"
                                            className="pricing23_tab-link w-inline-block w-tab-link"
                                        >
                                            <div>Monthly</div>
                                        </a>
                                        <a
                                            data-w-tab="Tab 2"
                                            className="pricing23_tab-link background-color-alternate adfdf w-inline-block w-tab-link w--current"
                                        >
                                            <div className="afaddfd">
                                                <div>Yearly</div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tabs-content w-tab-content">
                                        <div data-w-tab="Tab 1" className="pricing23_tab-pane w-tab-pane">
                                            <div className="w-layout-grid pricing23_plans">
                                                <div
                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a79fe2-a9f05627"
                                                    className="pricing23_plan"
                                                >
                                                    <div className="pricing23_content">
                                                        <div className="pricing23_content-top">
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="text-align-center-2">
                                                                    <div className="heading-style-h6-2">Basic plan</div>
                                                                    <div className="margin-vertical margin-xxsmall">
                                                                        <div className="heading-style-h1-2">
                                                                            $19
                                                                            <span className="heading-style-h4-2">/mo</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pricing23_feature-list">
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a79fef-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a79ff4-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a79ff9-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="button-3 max-width-full w-button">
                                                            Get started
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pricing23_plan _1">
                                                    <div className="pricing23_content">
                                                        <div className="pricing23_content-top">
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="text-align-center-2">
                                                                    <div className="heading-style-h6-2">
                                                                        Business plan
                                                                    </div>
                                                                    <div className="margin-vertical margin-xxsmall">
                                                                        <div className="heading-style-h1-2">
                                                                            $29
                                                                            <span className="heading-style-h4-2">/mo</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pricing23_feature-list">
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a7a00d-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a7a012-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a7a017-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a7a01c-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="button-3 max-width-full w-button">
                                                            Get started
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="pricing23_plan">
                                                    <div className="pricing23_content">
                                                        <div className="pricing23_content-top">
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="text-align-center-2">
                                                                    <div className="heading-style-h6-2">
                                                                        Enterprise plan
                                                                    </div>
                                                                    <div className="margin-vertical margin-xxsmall">
                                                                        <div className="heading-style-h1-2">
                                                                            $49
                                                                            <span className="heading-style-h4-2">/mo</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pricing23_feature-list">
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a7a030-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a7a035-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a7a03a-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a7a03f-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_9d67acce-353c-1509-34f5-80b556a7a044-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div>Feature text goes here</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="button-3 max-width-full w-button">
                                                            Get started
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            data-w-tab="Tab 2"
                                            className="pricing23_tab-pane w-tab-pane w--tab-active"
                                        >
                                            <div className="w-layout-grid pricing23_plans">
                                                <div
                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b200553de-a9f05627"
                                                    className="pricing23_plan"
                                                >
                                                    <div className="pricing23_content">
                                                        <div className="pricing23_content-top">
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="text-align-center-2">
                                                                    <div className="heading-style-h6-2">Basic plan</div>
                                                                    <div className="margin-vertical margin-xxsmall">
                                                                        <div className="heading-style-h1-2">
                                                                            $19
                                                                            <span className="heading-style-h4-2">/mo</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pricing23_feature-list">
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b200553eb-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b200553f0-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b200553f5-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-2">
                                                            <a
                                                                href="#"
                                                                className="button-3 max-width-full w-button"
                                                            >
                                                                Get started
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pricing23_plan _1">
                                                    <div className="pricing23_content">
                                                        <div className="pricing23_content-top">
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="text-align-center-2">
                                                                    <div className="heading-style-h6-2">
                                                                        Business plan
                                                                    </div>
                                                                    <div className="margin-vertical margin-xxsmall">
                                                                        <div className="heading-style-h1-2">
                                                                            $29
                                                                            <span className="heading-style-h4-2">/mo</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pricing23_feature-list">
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b20055409-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b2005540e-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b20055413-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b20055418-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-4">
                                                            <a
                                                                href="#"
                                                                className="button-3 max-width-full w-button"
                                                            >
                                                                Get started
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pricing23_plan">
                                                    <div className="pricing23_content">
                                                        <div className="pricing23_content-top">
                                                            <div className="margin-bottom margin-medium">
                                                                <div className="text-align-center-2">
                                                                    <div className="heading-style-h6-2">
                                                                        Enterprise plan
                                                                    </div>
                                                                    <div className="margin-vertical margin-xxsmall">
                                                                        <div className="heading-style-h1-2">
                                                                            $49
                                                                            <span className="heading-style-h4-2">/mo</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="pricing23_feature-list">
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b2005542c-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b20055431-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b20055436-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b2005543b-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                                <div
                                                                    id="w-node-_5c08ef13-d23b-af8d-58ec-f05b20055440-a9f05627"
                                                                    className="pricing23_feature"
                                                                >
                                                                    <div className="pricing23_icon-wrapper">
                                                                        <div className="icon-embed-xsmall w-embed">
                                                                            <svg
                                                                                width="100%"
                                                                                height="100%"
                                                                                viewBox="0 0 24 24"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                                                                                    fill="currentColor"
                                                                                />
                                                                            </svg>
                                                                        </div>
                                                                    </div>
                                                                    <div className="text-block">
                                                                        Feature text goes here
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="div-block-3">
                                                            <a
                                                                href="#"
                                                                className="button-3 max-width-full w-button"
                                                            >
                                                                Get started
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>




            <>

                <section id="faq" className="section_faq4">
                    <div className="padding-global-3">
                        <div className="container-medium">
                            <div className="padding-section-large-5">
                                <div className="margin-bottom margin-xxlarge">
                                    <div className="text-align-center-3">
                                        <div className="max-width-large">
                                            <div className="margin-bottom margin-small">
                                                <h2>FAQs</h2>
                                            </div>
                                            <p className="text-size-medium-5">
                                                Have questions about how Analyzify can transform your website's
                                                SEO? Below are some of the most common inquiries we receive from
                                                our users. If you still have more questions, feel free to reach
                                                out!
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="faq4_component">
                                    <div className="w-layout-grid faq4_list">

                                        <Accordin
                                            answer='Analyzify is an advanced AI-powered SEO tool that analyzes
                                                        every aspect of your website, from text and images to code
                                                        structure. It provides detailed reports to help you improve
                                                        your website’s SEO and ranking on search engines.'
                                            question='What is Analyzify and how can it benefit my website' />
                                        <Accordin
                                            answer='Analyzify reviews various elements like content, design,
                                        links, and page load speed. It delivers personalized
                                        recommendations based on industry best practices to optimize
                                        your website comprehensively.'
                                            question=' What kind of analysis does Analyzify perform on my site'
                                        />

                                        <Accordin
                                            question='How long does it take to generate a report'
                                            answer='Analyzify conducts a complete analysis of your website in
                                        just seconds. Once you input your URL, you’ll instantly
                                        receive a detailed report with all the improvement
                                        suggestions. Depending of your website complexity, it can be
                                        from 5 to 45 seconds.' />

                                        <Accordin
                                            answer='No, Analyzify is designed to be user-friendly, even if you
                                                        have no technical experience. Our intuitive interface and
                                                        detailed reports guide you through the steps needed to
                                                        enhance your SEO.'
                                            question='Do I need technical knowledge to use Analyzify' />
                                        <Accordin
                                            question='Is Analyzify compatible with any type of website'
                                            answer='Yes, Analyzify works with any website, regardless of the
                                                        platform it’s built on. You can use it to analyze blogs,
                                                        online stores, corporate sites, and more.' />

                                    </div>


                                </div>
                                <div className="margin-top margin-xxlarge">
                                    <div className="text-align-center-3">
                                        <div className="max-width-medium-2 align-center">
                                            <div className="margin-bottom margin-xsmall">
                                                <h4 className="heading-5">Still have questions?</h4>
                                            </div>
                                            <p className="text-size-medium-5">
                                                Write an e-mail to <strong>hello@analyzify.ai </strong>and you
                                                will receve an answer in less than 24 hours
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="home" className="section is-hero is-bottom">
                        <div className="padding-global relative iii">
                            <div className="container-large relative">
                                <div className="padding-section-medium relative is-bottom">
                                    <div className="hero_wrappar">
                                        <div className="w-layout-vflex max-width-large lkad">
                                            <div className="btn--hero-parent">
                                                <div>
                                                    <span className="text-span"></span>Obtain more sells
                                                </div>
                                            </div>
                                            <h1 className="hero_heading text-align-center sdf" style={{margin : 0}}>Start now</h1>
                                        </div>
                                        <div className="w-layout-vflex margin-top margin-large">
                                            <div className="w-layout-vflex max-width-xlarge text-align-center auto">
                                                <p className="hero_paragraph text-size-medium _1">
                                                    Get all the power of the Al to analyze your website with a
                                                    comprehensive report in seconds.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="hero-form-wrp">
                                            <div className="form-block w-form">
                                                <form
                                                    id="email-form-2"
                                                    name="email-form-2"
                                                    data-name="Email Form 2"
                                                    method="get"
                                                    className="form"
                                                    data-wf-page-id="65cc776f094151ffa9f05627"
                                                    data-wf-element-id="3f9e729f-5497-5ff8-2548-85e754c4b550"
                                                >
                                                    <input
                                                        className="text-field w-input"
                                                        maxLength={256}
                                                        name="name-2"
                                                        data-name="Name 2"
                                                        placeholder="Introduce your website URL"
                                                        type="text"
                                                        onChange={(e) => setURL(e.target.value)}
                                                        value={url}
                                                        id="name-2"
                                                    />
                                                    <div className="hero-form-btn-wrap" onClick={() => mutate.mutate(url)}>
                                                        <div
                                                            className="lottie-animation-2"
                                                            data-w-id="3f9e729f-5497-5ff8-2548-85e754c4b553"
                                                            data-animation-type="lottie"
                                                            data-src="documents/Animation---1708478095981-2.json"
                                                            data-loop={1}
                                                            data-direction={1}
                                                            data-autoplay={1}
                                                            data-is-ix2-target={0}
                                                            data-renderer="svg"
                                                            data-default-duration="1.468134741669782"
                                                            data-duration={0}
                                                        />
                                                        <input
                                                            type="submit"
                                                            data-wait="Please wait..."
                                                            className="submit-button w-button"
                                                            defaultValue="Analyze"
                                                        />
                                                    </div>
                                                </form>
                                                <div className="w-form-done">
                                                    <div>Thank you! Your submission has been received!</div>
                                                </div>
                                                <div className="w-form-fail">
                                                    <div>
                                                        Oops! Something went wrong while submitting the form.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </>


        </>

    )

}