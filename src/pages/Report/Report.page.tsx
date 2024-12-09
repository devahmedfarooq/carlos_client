import './Report.page.css'
import Item, { Recomendation, SeoItem } from '../../types/Item'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import LoadPage from '../Loading/Loading.page';
import { useReport } from '../../services/queries';
import { useParams } from 'react-router-dom';
import ErrorPage from '../Error/Error.page';
import useLocale from '../../redux/useLocale';
import { useRef, useEffect, useState } from 'react'
import RandomBold from '../../components/ui/Boldtext';
type ReportProps = {
    data: Item,
    index: number,
    imgSrc: string
}

type PageProps = {
    seo: SeoItem,
    report: Item[],
    preview: string[],
    recommendation: Recomendation
}



function SectionReport({ data, index, imgSrc }: ReportProps) {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Element is in viewport
                }
            });
        });

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);


    return <section ref={sectionRef} className={`fade-in-section ${isVisible ? 'fade-in-visible' : ''}`} >
        <div className="section-report" >
            <div className="container-large">
                <div className="head-wrapper center d-none">
                    <h1 className="heading-style-h2">Points</h1>
                </div>
                <div className="top-bottom-marign _24x50">
                    <div className="div-blocl">
                        <div className="color-stlye-black">
                            <div className="f-flex vertical_flex point-title">
                                <h5 className="sumary-card_heading-2">{data.title}</h5>
                                <div className="h-flex">
                                    <div className={data.score >= 80 ? "score-bar point-title" : data.score >= 50 && data.score < 80 ? "score-bar medium-score point-title" : "score-bar red-score point-title"}>
                                        <div className={data.score >= 80 ? "score-bar-inside point-title" : data.score >= 50 && data.score < 80 ? "score-bar-inside medium-score point-title" : "score-bar-inside red-score point-title"} style={{ width: `${data.score * 3}px` }} />
                                    </div>
                                    <div>
                                        <a href="#" className={data.score >= 80 ? "link green-score" : data.score >= 50 && data.score < 80 ? "link medium-score" : "link red-score"}>
                                            <strong className="bold-text">{data.score} / 100</strong>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden">
                            <div className="text-size-medium fix-width">
                                {data.description}.
                                <br />
                                <br />
                                <strong>What to do:</strong>
                            </div>
                        </div>
                        <div className="tick-item-wrapper">
                            {data.actionItems.map((e) => <div className="item no-border">
                                <div className="tick" />
                                <div className="text-block-6">
                                    <RandomBold text={e} />
                                </div>
                            </div>)}


                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="section-report">
            <div className="container-large">
                <div className="top-bottom-marign _24x50">
                    <div style={{ background: "transparent" }}  >
                        <img
                            key={index}
                            src={imgSrc}
                            alt={`Part ${index + 1}`}
                            className="cropped-img"
                            style={{
                                borderRadius: '20px',
                            }} />
                    </div>
                </div>
                <div className="_2x2-grid">

                    {
                        data.subactionItems.map((e) => <div
                            id="w-node-c9d1a23f-c528-a46d-020d-81b27d07200c-5503738b"
                            className="item no-border no-bg"
                        >
                            <div className="tick" />
                            <div className="text-block-6">
                                <RandomBold text={e} />
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </div>


    </section>
}

function ReportPage(props: PageProps) {

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);




    const pageRef = useRef<HTMLDivElement>(null);

    const { preview: imgs, report, seo, recommendation/* , recommendation */ } = props //useData()

    console.log(recommendation)


    const handleDownloadPdf = async () => {
        const pageElement = pageRef.current;

        if (!pageElement) return;

        // Convert the page into a canvas image
        const canvas = await html2canvas(pageElement, { useCORS: true });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 width in mm
        const pageHeight = 295; // A4 height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        // First page
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add extra pages if the content is larger than one page
        while (heightLeft > 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        // Save the PDF
        pdf.save('SEO-Report.pdf');
    };

    useEffect(() => {
        const section = sectionRef.current;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true); // Element is in viewport
                }
            });
        });

        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);


    return <section ref={pageRef}>

        {
            report && seo && <div id="featured" ref={sectionRef}
                className={`fade-in-section section-2 ${isVisible ? 'fade-in-visible' : ''}`}>
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
                                <div className="margin-bottom margin-xxlarge text-align-center section-report">
                                    <div
                                        data-w-id="a358809b-5274-3bb2-85c8-786bbbae894e"

                                        className="max-width-large report-ready"
                                    >
                                        <img
                                            src="/images/extra-02.svg"
                                            loading="lazy"
                                            width={260}
                                            alt=""
                                        />
                                        <div className="w-layout-vflex flex-block">
                                            <div className="btn--hero-parent">
                                                <div>
                                                    <span className="text-span"></span>www.testweb.com
                                                </div>
                                            </div>
                                        </div>
                                        <div className="margin-bottom margin-small">
                                            <h2 className="heading-6">
                                                <strong>Your SEO Report is Ready!</strong>
                                            </h2>
                                        </div>
                                        <p className="text-size-medium-6">
                                            We have analyzed your website. From the code to the pictures.
                                            From the beginning to the end. These are the results and
                                            suggestions of how to improve.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    data-w-id="8c566056-e277-45b0-3fd7-7df37794b4fb"

                                    className="sumary_wrappar margin-top margin-large"
                                >
                                    <div className="left_sumary">
                                        <div className="circular-progress"  style={{
                                            "--percentage": seo.score * 3.6
                                        } as React.CSSProperties }  >
                                            <div className="value-container">
                                                <div id="progress"> {seo.score}</div>
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
                                            {seo.desc}
                                        </p>

                                        <div className="sumary-ran--wrap">
                                            {
                                                Array.isArray(seo.tags) && seo.tags.map((e) => e.tagType == "PRO" ? <a href="#" className="btn-wrap green-score w-button">
                                                    <span className="score-icon">
                                                        <strong></strong>
                                                    </span>
                                                    <strong>{e.txt}</strong>
                                                </a> : <a href="#" className="btn-wrap red-score w-button">
                                                    <span className="score-icon">
                                                        <strong></strong>
                                                    </span>
                                                    <strong>{e.txt}</strong>
                                                </a>)
                                            }



                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="sumari_more-section grid-responsive">
                                <div className="loading_wrapp-left">


                                    <div
                                        data-w-id="a358809b-5274-3bb2-85c8-786bbbae897b"

                                        className={report[0].score >= 80 ? "left_lottie green-score vertical" : report[0].score >= 50 && report[0].score > 80 ? "left_lottie  vertical" : "left_lottie red-score vertical"}
                                    >
                                        <div className="f-flex">
                                            <div className="wrap_loader">
                                                {
                                                    report[0].score > 95 && <div className="top-flair">
                                                        <div>
                                                            <span className="text-span">
                                                                <strong></strong>
                                                            </span>
                                                            Top
                                                        </div>
                                                    </div>
                                                }

                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="a358809b-5274-3bb2-85c8-786bbbae8983"
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
                                                    <a href="#" className={report[0].score >= 80 ? "link green-score" : report[0].score >= 50 && report[0].score > 80 ? "link" : "link red-score"}>
                                                        {report[0].title}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={report[0].score >= 80 ? "score-bar green-score" : report[0].score >= 50 && report[0].score > 80 ? "score-bar medium-score" : "score-bar red-score"}>
                                                <div className={report[0].score >= 80 ? "score-bar-inside green-score" : report[0].score >= 50 && report[0].score > 80 ? "score-bar-inside medium-score" : "score-bar-inside red-score"} style={{ width: `${report[0].score * 2}px` }} />
                                            </div>
                                            <div>
                                                <a href="#" className={report[0].score >= 80 ? "link green-score" : report[0].score >= 50 && report[0].score > 80 ? "link medium-score" : "link red-score"}>
                                                    <strong>{report[0].score} / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="s-text">
                                            {report[0].description}
                                        </div>
                                    </div>



                                    <div
                                        data-w-id="a358809b-5274-3bb2-85c8-786bbbae897b"

                                        className={report[2].score >= 80 ? "left_lottie green-score vertical" : report[2].score >= 50 && report[2].score > 80 ? "left_lottie  vertical" : "left_lottie red-score vertical"}
                                    >
                                        <div className="f-flex">
                                            <div className="wrap_loader">
                                                {
                                                    report[2].score > 95 && <div className="top-flair">
                                                        <div>
                                                            <span className="text-span">
                                                                <strong></strong>
                                                            </span>
                                                            Top
                                                        </div>
                                                    </div>
                                                }

                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="a358809b-5274-3bb2-85c8-786bbbae8983"
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
                                                <div style={{ maxWidth: "200px" }}>
                                                    <a href="#" className={report[2].score >= 80 ? "link green-score" : report[2].score >= 50 && report[2].score > 80 ? "link" : "link red-score"}>
                                                        {report[2].title}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={report[2].score >= 80 ? "score-bar green-score" : report[2].score >= 50 && report[2].score > 80 ? "score-bar medium-score" : "score-bar red-score"}>
                                                <div className={report[2].score >= 80 ? "score-bar-inside green-score" : report[2].score >= 50 && report[2].score > 80 ? "score-bar-inside medium-score" : "score-bar-inside red-score"} style={{ width: `${report[2].score * 2}px` }} />
                                            </div>
                                            <div>
                                                <a href="#" className={report[2].score >= 80 ? "link green-score" : report[2].score >= 50 && report[2].score > 80 ? "link medium-score" : "link red-score"}>
                                                    <strong>{report[2].score} / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="s-text">
                                            {report[2].description}
                                        </div>
                                    </div>


                                    <div
                                        data-w-id="a358809b-5274-3bb2-85c8-786bbbae897b"

                                        className={report[4].score >= 80 ? "left_lottie green-score vertical" : report[4].score >= 50 && report[4].score > 80 ? "left_lottie  vertical" : "left_lottie red-score vertical"}
                                    >
                                        <div className="f-flex">
                                            <div className="wrap_loader">
                                                {
                                                    report[4].score > 95 && <div className="top-flair">
                                                        <div>
                                                            <span className="text-span">
                                                                <strong></strong>
                                                            </span>
                                                            Top
                                                        </div>
                                                    </div>
                                                }

                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="a358809b-5274-3bb2-85c8-786bbbae8983"
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
                                                <div style={{ maxWidth: "200px" }}>
                                                    <a href="#" className={report[4].score >= 80 ? "link green-score" : report[4].score >= 50 && report[4].score > 80 ? "link" : "link red-score"}>
                                                        {report[4].title}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={report[4].score >= 80 ? "score-bar green-score" : report[4].score >= 50 && report[4].score > 80 ? "score-bar medium-score" : "score-bar red-score"}>
                                                <div className={report[4].score >= 80 ? "score-bar-inside green-score" : report[4].score >= 50 && report[4].score > 80 ? "score-bar-inside medium-score" : "score-bar-inside red-score"} style={{ width: `${report[4].score * 2}px` }} />
                                            </div>
                                            <div>
                                                <a href="#" className={report[4].score >= 80 ? "link green-score" : report[4].score >= 50 && report[4].score > 80 ? "link medium-score" : "link red-score"}>
                                                    <strong>{report[4].score} / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="s-text">
                                            {report[4].description}
                                        </div>
                                    </div>


                                </div>
                                <div className="rign-sumari">


                                    <div
                                        data-w-id="a358809b-5274-3bb2-85c8-786bbbae897b"

                                        className={report[1].score >= 80 ? "left_lottie green-score vertical" : report[1].score >= 50 && report[1].score > 80 ? "left_lottie  vertical" : "left_lottie red-score vertical"}
                                    >
                                        <div className="f-flex">
                                            <div className="wrap_loader">
                                                {
                                                    report[1].score > 95 && <div className="top-flair">
                                                        <div>
                                                            <span className="text-span">
                                                                <strong></strong>
                                                            </span>
                                                            Top
                                                        </div>
                                                    </div>
                                                }

                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="a358809b-5274-3bb2-85c8-786bbbae8983"
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
                                                    <a href="#" className={report[1].score >= 80 ? "link green-score" : report[1].score >= 50 && report[1].score > 80 ? "link" : "link red-score"}>
                                                        {report[1].title}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={report[1].score >= 80 ? "score-bar green-score" : report[1].score >= 50 && report[1].score > 80 ? "score-bar medium-score" : "score-bar red-score"}>
                                                <div className={report[1].score >= 80 ? "score-bar-inside green-score" : report[1].score >= 50 && report[1].score > 80 ? "score-bar-inside medium-score" : "score-bar-inside red-score"} style={{ width: `${report[1].score * 2}px` }} />
                                            </div>
                                            <div>
                                                <a href="#" className={report[1].score >= 80 ? "link green-score" : report[1].score >= 50 && report[1].score > 80 ? "link medium-score" : "link red-score"}>
                                                    <strong>{report[1].score} / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="s-text">
                                            {report[1].description}
                                        </div>
                                    </div>


                                    <div
                                        data-w-id="a358809b-5274-3bb2-85c8-786bbbae897b"

                                        className={report[3].score >= 80 ? "left_lottie green-score vertical" : report[3].score >= 50 && report[3].score > 80 ? "left_lottie  vertical" : "left_lottie red-score vertical"}
                                    >
                                        <div className="f-flex">
                                            <div className="wrap_loader">
                                                {
                                                    report[3].score > 95 && <div className="top-flair">
                                                        <div>
                                                            <span className="text-span">
                                                                <strong></strong>
                                                            </span>
                                                            Top
                                                        </div>
                                                    </div>
                                                }

                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="a358809b-5274-3bb2-85c8-786bbbae8983"
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
                                                <div style={{ maxWidth: "200px" }}>
                                                    <a href="#" className={report[3].score >= 80 ? "link green-score" : report[3].score >= 50 && report[3].score > 80 ? "link" : "link red-score"}>
                                                        {report[3].title}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={report[3].score >= 80 ? "score-bar green-score" : report[3].score >= 50 && report[3].score > 80 ? "score-bar medium-score" : "score-bar red-score"}>
                                                <div className={report[3].score >= 80 ? "score-bar-inside green-score" : report[3].score >= 50 && report[3].score > 80 ? "score-bar-inside medium-score" : "score-bar-inside red-score"} style={{ width: `${report[3].score * 2}px` }} />
                                            </div>
                                            <div>
                                                <a href="#" className={report[3].score >= 80 ? "link green-score" : report[3].score >= 50 && report[3].score > 80 ? "link medium-score" : "link red-score"}>
                                                    <strong>{report[3].score} / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="s-text">
                                            {report[3].description}
                                        </div>
                                    </div>



                                    <div
                                        data-w-id="a358809b-5274-3bb2-85c8-786bbbae897b"

                                        className={report[5].score >= 95 ? "left_lottie green-score vertical" : report[5].score >= 50 && report[5].score > 80 ? "left_lottie  vertical" : "left_lottie red-score vertical"}
                                    >
                                        <div className="f-flex">
                                            <div className="wrap_loader">
                                                {
                                                    report[5].score > 95 && <div className="top-flair">
                                                        <div>
                                                            <span className="text-span">
                                                                <strong></strong>
                                                            </span>
                                                            Top
                                                        </div>
                                                    </div>
                                                }

                                                <div
                                                    className="lottie_loading-animation"
                                                    data-w-id="a358809b-5274-3bb2-85c8-786bbbae8983"
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
                                                <div style={{ maxWidth: "200px" }}>
                                                    <a href="#" className={report[5].score >= 80 ? "link green-score" : report[5].score >= 50 && report[5].score > 80 ? "link" : "link red-score"}>
                                                        {report[5].title}
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={report[5].score >= 80 ? "score-bar green-score" : report[5].score >= 50 && report[5].score > 80 ? "score-bar medium-score" : "score-bar red-score"}>
                                                <div className={report[5].score >= 80 ? "score-bar-inside green-score" : report[5].score >= 50 && report[5].score > 80 ? "score-bar-inside medium-score" : "score-bar-inside red-score"} style={{ width: `${report[5].score * 2}px` }} />
                                            </div>
                                            <div>
                                                <a href="#" className={report[5].score >= 80 ? "link green-score" : report[5].score >= 50 && report[5].score > 80 ? "link medium-score" : "link red-score"}>
                                                    <strong>{report[5].score} / 100</strong>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="s-text">
                                            {report[5].description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }





        {
            imgs && <div className="section-report">
                <div className="container-large-2">
                    <div
                        data-w-id="dbf974ee-8912-2c5b-34f4-077a9c7ed5d6"

                        className="max-width-large align-center bottom-margin_new"
                    >
                        <div className="w-layout-vflex flex-block">
                            <div className="btn--hero-parent">
                                <div>
                                    <span className="text-span"></span>Preview
                                </div>
                            </div>
                        </div>
                        <div className="margin-bottom margin-small">
                            <h2>
                                <strong>Preview</strong>
                            </h2>
                        </div>
                        <p className="text-size-medium-6">
                            This is how your website is first seen, but the full website has been
                            used in the analysis.
                        </p>
                    </div>
                    <div className="grid-2">
                        <div
                            id="w-node-_55059a23-d404-f27c-c906-3718b1d4ad6d-5503738b"
                            data-w-id="55059a23-d404-f27c-c906-3718b1d4ad6d"

                            className="card-wrapper"
                        >
                            <img
                                src={imgs[0]}
                                loading="lazy"
                                sizes="(max-width: 479px) 100vw, (max-width: 991px) 90vw, (max-width: 1439px) 66vw, 948px"
                                alt=""
                                className="image-100"

                            />
                            <div className="text-block-5">
                                <strong>Desktop Preview</strong>
                                <br />
                                [1920 x 1080]
                            </div>
                        </div>
                        <div
                            id="w-node-_023e2d77-7814-c8f3-093a-6555f7640140-5503738b"
                            data-w-id="023e2d77-7814-c8f3-093a-6555f7640140"

                            className="card-wrapper"
                        >
                            <img
                                src={imgs[1]}
                                loading="lazy"
                                alt=""
                                className="image-100"
                            />
                            <div className="text-block-5">
                                <strong>Mobile Preview</strong>
                                <br />
                                [1080x1920]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }



        {
            Array.isArray(report) && report.map((item, i) => <SectionReport data={item} index={i} imgSrc={imgs[i]} />)
        }


        {
            recommendation && recommendation.alt_attributes && <div className="section-repot">
                <div className="container-large">
                    <div
                        data-w-id="2c4842a0-9035-15b4-daa3-47a916335abb"
                        className="max-width-large align-center bottom-margin_new left-align_new section-report"
                    >
                        <div className="w-layout-vflex flex-block">
                            <div className="btn--hero-parent">
                                <div>
                                    <span className="text-span"></span>First steps
                                </div>
                            </div>
                        </div>
                        <div className="margin-bottom margin-small">
                            <h2>
                                <strong>How to start</strong>
                            </h2>
                        </div>
                        <p className="text-size-medium-6">
                            5 points of most immediate and effective specific actions to start
                            improving the website based on the full report.
                        </p>
                    </div>
                    <div className="tick-item-wrapper">
                        <div className="item">
                            <div className="tick" />
                            <div className="text-block-6">
                                <RandomBold text={recommendation.alt_attributes.recommendation} />
                            </div>
                        </div>
                        <div className="item">
                            <div className="tick" />
                            <div className="text-block-6">

                                <RandomBold text={recommendation.title_tag.recommendation} />


                            </div>
                        </div>
                        <div className="item">
                            <div className="tick" />
                            <div className="text-block-6">

                                <RandomBold text={recommendation.meta_description.recommendation} />


                            </div>
                        </div>
                        <div className="item">
                            <div className="tick" />
                            <div className="text-block-6">

                                <RandomBold text={recommendation.content_length} />

                            </div>
                        </div>
                        <div className="item">
                            <div className="tick" />
                            <div className="text-block-6">
                                <RandomBold text={recommendation.keyword_optimization} />


                            </div>
                        </div>

                    </div>
                    <div className="margin-bottom margin-xxlarge text-align-center section-report">
                        <div
                            data-w-id="ddfb35ab-44c1-fd93-a1f4-5c8c5f926f75"
                            className="max-width-large report-ready"
                        >
                            <img src="/images/extra-03.svg" loading="lazy" width={260} alt="" />
                            <div className="w-layout-vflex flex-block">
                                <div className="btn--hero-parent">
                                    <div>
                                        <span className="text-span"></span>www.testweb.com
                                    </div>
                                </div>
                            </div>
                            <div className="margin-bottom margin-small">
                                <h2 className="heading-6">
                                    <strong>Download your report</strong>
                                </h2>
                            </div>
                            <p className="text-size-medium-6">
                                You can access your report in this page always, but if you want it in
                                a more portable format, you can download it here.
                            </p>
                            <div className="div-block-6">
                                <a
                                    href="#"
                                    className="button-6 is-secondary flex-horizontal w-inline-block"
                                >
                                    <img
                                        src="/images/download-1.png"
                                        loading="lazy"
                                        alt=""
                                        className="download-icon"
                                    />
                                    <div onClick={handleDownloadPdf}>Download .pdf</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }





    </section>
}


export default function ReportPageWrapper() {
    const { id } = useParams()
    const reportData = useReport(id)
    const { locale } = useLocale()

    if (reportData.isPending) {
        return <LoadPage message={locale?.loading.analyze!} />
    }

    if (reportData.isError) {
        return <ErrorPage />
    }

    if (!reportData.data.report.report || !reportData.data.report.report.general_recommendations && !reportData.data.report.seo && !reportData.data.report.analysis && !reportData.data.preview) {
        return <ErrorPage />
    }

    return <ReportPage recommendation={reportData.data.report.report.general_recommendations} seo={reportData.data.report.seo} report={reportData.data.report.analysis} preview={reportData.data.preview} />
}