import { LastReview } from "@/components/lastReview/lastReview";
import { Menu } from "@/components/menu/itemsMenu";
import { Rank } from "@/components/rank/rank";
import { PageTemplate } from "@/templates/PageTemplate";


export default function Home() {
  return (
    <PageTemplate>
      <Rank />
      <LastReview />
      <Menu />
    </PageTemplate>
  );
}
