import { useMutation } from "@tanstack/react-query";
import { generateReportModel, paymentIntialize, senderReportModel } from "./api";

export const useAnalysis = () => {
    return useMutation({
        mutationKey: ["analysis"],
        mutationFn: (url: string) => mutationFn(url),
    })
}

const mutationFn = async (url: string) => {
    const generateReport = await generateReportModel(url)
    try {
        const payment = await paymentIntialize(generateReport.schemaReport._id)
        //console.log("Payment: ", payment.url)
        window.location.assign(payment.url)
    } catch (error) {
        console.log("Payment Error!")
    }

    return senderReportModel(generateReport.schemaReport._id)
}