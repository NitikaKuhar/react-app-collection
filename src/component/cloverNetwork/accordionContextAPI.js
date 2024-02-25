import React, {createContext, useContext, useState, useEffect} from 'react';

const accordionData = [
    {
        id: "1",
        title:'This is first accordion Item',
        content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ullamcorper velit sed ullamcorper morbi tincidunt ornare. At tellus at
        urna condimentum mattis. Elit ullamcorper dignissim cras tincidunt
        lobortis feugiat. Aliquet lectus proin nibh nisl condimentum id
        venenatis. Viverra aliquet eget sit amet tellus cras adipiscing enim.
        Nisl condimentum id venenatis a. Enim facilisis gravida neque
        convallis a cras semper auctor neque. Vulputate ut pharetra sit amet
        aliquam id diam maecenas. Eget nunc lobortis mattis aliquam faucibus
        purus in massa. Curabitur vitae nunc sed velit dignissim sodales ut
        eu.`
    },
    {
        id: "2",
        title:'This is second accordion Item',
        content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ullamcorper velit sed ullamcorper morbi tincidunt ornare. At tellus at
        urna condimentum mattis. Elit ullamcorper dignissim cras tincidunt
        lobortis feugiat. Aliquet lectus proin nibh nisl condimentum id
        venenatis. Viverra aliquet eget sit amet tellus cras adipiscing enim.
        Nisl condimentum id venenatis a. Enim facilisis gravida neque
        convallis a cras semper auctor neque. Vulputate ut pharetra sit amet
        aliquam id diam maecenas. Eget nunc lobortis mattis aliquam faucibus
        purus in massa. Curabitur vitae nunc sed velit dignissim sodales ut
        eu.`
    }
]

const AccordionContext = createContext();
const AccordionProvider = ({children}) =>{
    const [openItemId, setOpenItemId] = useState('');

    const toggleItem = (id) =>{
        setOpenItemId(openItemId === id ? null : id);
    }

    return(
        <AccordionContext.Provider value={{openItemId, toggleItem}}>
            {children}
        </AccordionContext.Provider>
    )
}

const Accordion = ({children}) =>{
    return(
        <div>
            <AccordionProvider>{children}</AccordionProvider>
        </div>
    )
}

const AccordionItem = ({ children, id}) =>{
    return <div>{children}</div>
}

const AccordionToggle = ({children, id}) =>{
    // console.log("AccordionToggle",id)
    const {toggleItem} = useContext(AccordionContext);
    return(
        <div onClick={() => toggleItem(id)}>
            {children}
        </div>
    )
}

const AccordionPanel = ({children , id}) =>{
    // console.log("AccordionPanel",id)
    const {openItemId} = useContext(AccordionContext);
    return(
        <div>
            {openItemId === id && <div>{children}</div>}
        </div>
    )
}

export default function AccordionApp  () {
    return(
        <Accordion>
            {/* <AccordionItem id="1">
                <AccordionToggle id="1">
                    This is first accordion Item
                </AccordionToggle>
                <AccordionPanel id="1">
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
            <AccordionItem id="2">
                <AccordionToggle id="2">
                    This is second accordion Item
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
            </AccordionItem> */}

            {accordionData.map((item, idx) =>{
                return (
                    <AccordionItem key={idx} id={item.id}>
                        <AccordionToggle id={item.id}>{item.title}</AccordionToggle>
                        <AccordionPanel id={item.id}>{item.content}</AccordionPanel>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}