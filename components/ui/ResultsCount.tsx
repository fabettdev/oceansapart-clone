import "./results-count.css";
import { PER_PAGE } from "@/utils/constants";

interface ResultsCountProps {
  pages: number;
  currentPage: number;
  results: number;
}

export default function ResultsCount({
  currentPage,
  pages,
  results,
}: ResultsCountProps): React.ReactElement {
  function getContent(): string {
    if (pages === 1) {
      return results === 1 ? "1 prodotto" : results + " prodotti";
    } else {
      const resultsString: string = ` di ${results} prodotti`,
        start: number = (currentPage - 1) * PER_PAGE + 1,
        end: number = start + (PER_PAGE - 1);

      if (currentPage === pages) {
        return start + "-" + results + resultsString;
      }

      return start + "-" + end + resultsString;
    }
  }

  return <div id="results-count">{getContent()}</div>;
}
