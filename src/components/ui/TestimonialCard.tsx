import { motion } from "framer-motion";

const TestimonialCard = () => {
    return (
        <div className="testimonial24_slide w-slide" >
            <motion.div
                data-w-id="6b0012c8-7573-9ce4-3d6a-7bf6ff25b3d9"
                className="testimonial24_content"
                initial={{ opacity: 0.75, scale: 0.75, cursor: "pointer" }}
                whileInView={{ opacity: 1, scale: 1, transition: { type: 'tween', delay: 0.1 } }}
                whileHover={{ scale: 1.08 }}
            >
                {/* Client Section with Motion Animation */}
                <motion.div
                    data-w-id="6b0012c8-7573-9ce4-3d6a-7bf6ff25b3da"
                    initial={{ opacity: 1, scale: 1 }}
                    className="testimonial24_client"
                >
                    <div className="testimonial24_client-image-wrapper">
                        <img
                            src="images/review1.jpg"
                            loading="lazy"
                            sizes="48px"
                            srcSet="images/review1-p-500.jpg 500w, images/review1-p-800.jpg 800w, images/review1.jpg 938w"
                            alt=""
                            className="testimonial24_customer-image"
                        />
                    </div>
                    <div className="testimonial24_client-info">
                        <p className="text-weight-semibold">Name Surname</p>
                        <p>Position, Company name</p>
                    </div>
                </motion.div>

                {/* Testimonial Text */}
                <motion.div
                    data-w-id="6b0012c8-7573-9ce4-3d6a-7bf6ff25b3e2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="margin-bottom margin-small"
                >
                    <div className="text-size-medium-6">
                        Analyzify revolutionized our SEO strategy, delivering detailed
                        insights that drove our traffic up by 300% in just 6 months!
                    </div>
                </motion.div>

                {/* Demo Section with Motion Animation */}
                <motion.div
                    data-w-id="6b0012c8-7573-9ce4-3d6a-7bf6ff25b3e5"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "tween", duration: 0.4 }}
                    className="testimonial_demo"
                >
                    <div className="testimonial24_client-image-wrapper">
                        <img
                            src="images/review_bottom_1.jpg"
                            loading="lazy"
                            alt=""
                            className="testimonial_demo_image"
                        />
                    </div>
                    <div className="testimonial24_client-info">
                        <a href="#" className="text-weight-semibold">
                            See demo report <span className="text-span-2"></span>
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default TestimonialCard;
