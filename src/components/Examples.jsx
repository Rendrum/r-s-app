import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';
import TabButton from "./TabButton/TabButton";
import Tabs from './Tabs.jsx';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic</p>
    if (selectedTopic) {
        tabContent = (<div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs
                // buttonsContainer = ""
                buttons={
                    <>
                        <TabButton
                            isActive={selectedTopic === 'components'}
                            onClick={() => handleSelect('components')}
                        >
                            Components
                        </TabButton>
                        <TabButton
                            isActive={selectedTopic === 'jsx'}
                            onClick={() => handleSelect('jsx')}
                        >
                            JSX
                        </TabButton>
                        <TabButton
                            isActive={selectedTopic === 'props'}
                            onClick={() => handleSelect('props')}
                        >
                            Props
                        </TabButton>
                        <TabButton
                            isActive={selectedTopic === 'state'}
                            onClick={() => handleSelect('state')}
                        >
                            State
                        </TabButton>
                    </>}
            >
                {tabContent}
            </Tabs>
        </Section>
    )
}