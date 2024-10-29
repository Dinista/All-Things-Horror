import { LastReview } from "@/components/lastReview/lastReview";
import { Rank } from "@/components/rank/rank";
import { PageTemplate } from "@/templates/PageTemplate";


export default function Home() {
  return (
    <PageTemplate>
      <Rank />
      <LastReview />
    </PageTemplate>
  );
}
