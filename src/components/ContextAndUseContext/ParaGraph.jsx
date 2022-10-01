import {useContext} from "react";
import { ThemeContext } from "./ThemeContextProvider";

export default function ParaGraph() {

    const theme = useContext(ThemeContext)
  return (
    <div className={theme}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero vero quasi
      animi quos exercitationem nesciunt voluptatem illum laudantium corporis,
      sunt repellat doloribus aliquid repellendus iusto a quae recusandae
      quaerat nobis.
    </div>
  );
}
