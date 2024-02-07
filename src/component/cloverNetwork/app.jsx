import {
    FC,
    PropsWithChildren,
    useState,
    createContext,
    useContext,
  } from "react";
  import "./styles.css";
  
  type AccordionContextType = {
    openItemId: string | null;
    toggleItem: (id: string) => void;
  };
  
  // create context
  const AccordionContext = createContext<AccordionContextType | undefined>(
    undefined
  );
  // create useAccordion context to be consumed in component
  const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
      throw new Error("useAccordion must be used within an AccordionProvider");
    }
    return context;
  };
  
  // accordina Provider which will be available globally and can be used using useAccordion
  const AccordionProvider: FC<PropsWithChildren> = ({ children }) => {
    const [openItemId, setOpenItemId] = useState<string | null>(null);
  
    const toggleItem = (id: string) => {
      setOpenItemId(openItemId === id ? null : id);
    };
  
    return (
      <AccordionContext.Provider value={{ openItemId, toggleItem }}>
        {children}
      </AccordionContext.Provider>
    );
  };
  
  const Accordion: FC<PropsWithChildren> = ({ children }) => {
    return (
      <div>
        <AccordionProvider>{children}</AccordionProvider>
      </div>
    );
  };
  
  const AccordionItem: FC<PropsWithChildren<{ id: string }>> = ({ children }) => {
    // Wrap each child in a context provider with the item ID
    return <div className="accordion-item">{children}</div>;
  };
  
  const AccordionToggle: FC<PropsWithChildren<{ id: string }>> = ({
    children,
    id,
  }) => {
    const { toggleItem } = useAccordion();
    return (
      <div className="accordion-toggle" onClick={() => toggleItem(id)}>
        {children}
      </div>
    );
  };
  
  const AccordionPanel: FC<PropsWithChildren<{ id: string }>> = ({
    children,
    id,
  }) => {
    const { openItemId } = useAccordion();
    return (
      <div>
        {openItemId === id && <div className="accordion-panel">{children}</div>}
      </div>
    );
  };
  
  /**
   * Exercise: create a React accordion used in the way shown below.
   *
   * For context, an accordion is a list of expandable items where only
   * one item can be expanded at a time, so if the item '2' is opened
   * while item '1' is open already, '1' should close when '2' opens.
   *
   * AccordionItems should only show the content in AccordionPanel
   * when opened, and AccordionToggle should open or close the item
   * when clicked.
   */
  export default function App() {
    return (
      <Accordion>
        <AccordionItem id="1">
          <AccordionToggle id="1">First accordion item!</AccordionToggle>
          <AccordionPanel id="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem id="2">
          <AccordionToggle id="2">
            This is the second accordion item.
          </AccordionToggle>
          <AccordionPanel id="2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ullamcorper velit sed ullamcorper morbi tincidunt ornare. At tellus at
            urna condimentum mattis. Elit ullamcorper dignissim cras tincidunt
            lobortis feugiat. Aliquet lectus proin nibh nisl condimentum id
            venenatis. Viverra aliquet eget sit amet tellus cras adipiscing enim.
            Nisl condimentum id venenatis a. Enim facilisis gravida neque
            convallis a cras semper auctor neque. Vulputate ut pharetra sit amet
            aliquam id diam maecenas. Eget nunc lobortis mattis aliquam faucibus
            purus in massa. Curabitur vitae nunc sed velit dignissim sodales ut
            eu.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }
  