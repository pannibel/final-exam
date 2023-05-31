import styles from "../styles/page.module.scss";
import { useRef, useState } from "react";
import { sendGloryHole } from "./database";
import Form from "./form";

export default function GloryHole() {
  const [confirmation, setConfirmation] = useState(false);
  const [nameInput, setNameInput] = useState();
  const [messageInput, setMessageInput] = useState();

  function prepareData() {
    console.log("sending", nameInput, messageInput);
    sendGloryHole({
      nickname: nameInput,
      message: messageInput,
    });
    setConfirmation(true);
  }

  const handleButtonClick = () => {
    setConfirmation(false);
  };

  return (
    <div className={`${styles.gridSetup} ${styles.gridGH}`}>
      {/* <div className={styles.ghLine}></div> */}
      <div className={styles.title}>
        <h1>GloryHole®</h1>
        <h2>(your secrets are safe with us)</h2>
      </div>
      <div className={styles.ghText}>
        <p>
          GloryHole® is a system of anonymous messages that you can send
          directly to our band. It sdiujk sdsdgjjsdg sdjsdgkjsd gou asofiuafd .
          avpifuipuaf ipiudfg i ipu.<br></br>
          <br></br>
          <div id={styles.ghList}>
            <li>Did you hate our last performance?</li>
            <li> Want to know our favourite type of furniture?</li>
            <li>Are you feeling bored, lonely and it’s after 10pm?</li>
          </div>
          <br></br>
          <span>Let us know what you’re up for.</span>
        </p>
      </div>

      {confirmation ? (
        <div className={styles.confirmationCont}>
          <h2>
            Thank you for your message. It has been sent to our servers and will
            be evaluated very soon
          </h2>
          {confirmation && (
            <button onClick={handleButtonClick} className={styles.ghButt}>
              Send another
            </button>
          )}
        </div>
      ) : (
        <Form
          prepareData={prepareData}
          nameInput={nameInput}
          setNameInput={setNameInput}
          messageInput={messageInput}
          setMessageInput={setMessageInput}
        />
      )}
    </div>
  );
}
