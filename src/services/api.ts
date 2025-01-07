import axios from "axios";
import Item, { ReportData } from '../types/Item'

const BASEURL =  "http://localhost:3000/v1/api/" //'https://server-empty-dawn-1818.fly.dev/v1/api/'
const axiosInstance = axios.create({
    baseURL: BASEURL
})

interface ResponseGetReport {
    report: ReportData,
    preview: string[],
    id: string | undefined,
    msg: string
}

interface SchemaReportGenerateReportModel {
    is_paid: boolean,
    url: string,
    _id: string,
    analysis: Item[]
}

interface SchemaReportSenderReportModel {
    report: {
        is_paid: boolean,
        _id: string
    }
}

interface ResposnseGenerateReportModel {
    msg: string,
    schemaReport: SchemaReportGenerateReportModel
}

interface ResposnseGenerateReportModel {
    msg: string,
    report: SchemaReportGenerateReportModel
}

interface PaymentResponse {
    msg: string,
    url: string,
    session: any
}

interface PaymentSuccessResponse {
    msg : string
}

export async function getReport(id: string | undefined) {
    return ((await axiosInstance.get<ResponseGetReport>(`analyze/report-sender?id=${id}`)).data)
}

export async function generateReportModel(url: string) {
    return (((await axiosInstance.get<ResposnseGenerateReportModel>(`analyze/report-generator?url=${url}`)).data))
}

export async function AnalyzeReport(id: string) {
    return ((await axiosInstance.post(`analyze/analyze?id=${id}`)))
}

export async function ScraperReport(id: string) {
    return ((await axiosInstance.post(`analyze/scraper?id=${id}`)))
}

export async function senderReportModel(id: string) {
    return (((await axiosInstance.get<SchemaReportSenderReportModel>(`analyze/report-sender?id=${id}`)).data))
}

export async function paymentIntialize(id: string, ) {
    return ((await axiosInstance.get<PaymentResponse>(`payment?id=${id}`)).data)
}
export async function paymentSuccess(id: string) {
    return ((await axiosInstance.get<PaymentSuccessResponse>(`payment/success?id=${id}`)).data)
}