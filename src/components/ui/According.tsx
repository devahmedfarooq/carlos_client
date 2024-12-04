import  { useState } from 'react'

interface ComponentProps {
    answer: string,
    question: string
}

export default function Accordin({ answer, question }: ComponentProps) {
    const [clicked, setClicked] = useState(false)
    return <div className="faq4_accordion" onClick={() => setClicked(!clicked) }>
        <div
            data-w-id="3c306d42-2501-9e46-2c5f-c2ac28bc6930"
            className="faq4_question"
            
        >
            <div className="text-size-medium-5 text-weight-bold">
                {question}?
            </div>
            <div className="faq4_icon-wrappper">
                <div className="icon-embed-small w-embed">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25.3333 15.667V16.3336C25.3333 16.7018 25.0349 17.0003 24.6667 17.0003H17V24.667C17 25.0351 16.7015 25.3336 16.3333 25.3336H15.6667C15.2985 25.3336 15 25.0351 15 24.667V17.0003H7.3333C6.96511 17.0003 6.66663 16.7018 6.66663 16.3336V15.667C6.66663 15.2988 6.96511 15.0003 7.3333 15.0003H15V7.33365C15 6.96546 15.2985 6.66699 15.6667 6.66699H16.3333C16.7015 6.66699 17 6.96546 17 7.33365V15.0003H24.6667C25.0349 15.0003 25.3333 15.2988 25.3333 15.667Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
            </div>
        </div>
        <div style={{ width: "100%", height: !clicked ? 0 : '' }}  className="faq4_answer">
            <div className="margin-bottom margin-small">
                <p className="paragraph">
                    {answer}
                </p>
            </div>
        </div>
    </div>
}