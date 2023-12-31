import classes from "./Behaviour.module.css";

const Behaviour = () => {
  return (
    <div className={classes.background}>
      <section className={classes.container}>
        <h2>MOPCON行為準則</h2>
        <p>
          MOPCON
          致力維護社群互動環境，旨在提供一個安全、友善並令人感到歡迎的環境，我們要求參與本活動的聽眾、演講者、贊助商和志工，都必須同意遵守下列行為準則，以打造一個所有人都享有安全及正向的參與者體驗。
        </p>
        <p>
          不得對任何與會者的恐嚇、騷擾、辱罵、歧視、貶損或貶低行為。
          騷擾包括有關性別，性別認同、年齡、性向、殘疾、外貌、體型、種族、宗教的攻擊性言語，或是在公共場合散播色情圖片、蓄意恐嚇、跟踪、騷擾性的攝影或錄影、多次打斷活動、不恰當的身體接觸，和讓人感到不舒服的性關注。
        </p>
        <p>
          參與者必須停止任何騷擾行為並且立即遵守行為準則。
          贊助商也必須遵守行為準則。贊助商不應該使用帶有性意味的圖像、活動，或其它材料。工作人員（包括志工）不該穿著帶有性意味的衣服/制服/裝扮，或是建立一個具有性意味的環境。
        </p>
        <p>
          如果參與者從事騷擾行為，工作人員會採取其認為適當的任何手段，包括警告或是請離會場，並且不會退費。
        </p>
        <p>
          MOPCON
          會幫助參與者聯繫酒店/場地警衛或當地警察、提供護送，或以其他方式幫助那些遇到騷擾的參與者感到安全。我們非常重視您的參與。
          我們希望參與者在各活動場合、會議有關的社群活動都能遵循這些規則。
          此行為準則是基於 Conference Code of Conduct 而訂定。
        </p>
      </section>
    </div>
  );
};
export default Behaviour;
