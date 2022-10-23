export { Main } from "./1-Main/Main.jsx";
export {default as About} from "./2-About/About.jsx";
export { Cards } from "./3-Cards/Cards.jsx";
export { Events } from "./4-Events/Events.jsx";
export { Contact } from "./5-Contact/Contact.jsx";

<main>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
      }}>
          <h1 className='title'>
            Hack Club ASIET
          </h1>
        </motion.div>
      </main>