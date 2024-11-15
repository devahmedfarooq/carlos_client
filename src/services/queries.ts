import { useQuery } from "@tanstack/react-query";
import { AnalyzeReport, getReport, paymentSuccess, ScraperReport, senderReportModel } from "./api";


export const useReport = (id: string | undefined) => {
  return useQuery({
    queryKey: ['report', id!],
    queryFn: () => getReport(id)
  })
}

export const useGenereate = (id: string) => {
  return useQuery({
    queryKey: ['generate', id],
    queryFn: async () => {
      try {
        await paymentSuccess(id)
      } catch {
        console.log("Payment Error!")
      }
      try {
        // Analyze the report
        await AnalyzeReport(id);
      } catch (error) {
        console.log('Analyzing Images Error!');
      }

      try {
        // Scrape the report
        await ScraperReport(id);
      } catch (error) {
        console.log('Scraping Code Error!');
      }

      // Return the final report model
      return await senderReportModel(id);
    },
  });
};