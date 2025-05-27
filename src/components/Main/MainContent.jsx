import Item from "./Item";

const MainContent = () => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex minima perspiciatis voluptate optio adipisci molestias iste itaque numquam aliquid delectus temporibus, corrupti ab nam quas, sit a repellat, sed quod?";
  return (
    <article className="main-content">
      <Item
        title="COF V2"
        subTitle="La nouvelle version du JDR facile d'accès"
        picture="https://www.gameontabletop.com/contenu/partners/tonyb/COF2/BBE_Cover%20V2_final.jpg"
        description={text}
      />
      <p></p>
      <Item
        title="L'ombre du Seigneur Démon"
        subTitle="Pour des parties rapides et intenses"
        picture="https://www.gameontabletop.com/contenu/image/ks_projet_img/931_qwdHkx7bg_Yohc8vx_wpt_yf9zpm"
        description={text}
      />
    </article>
  );
};

export default MainContent;
