import { useState } from 'react';
import { EXAMPLES } from '../data.js';
import TabButton from "./TabButton/TabButton";

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
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isActive={selectedTopic === 'components'} onSelect={() => handleSelect('components')}> Components </TabButton>
                <TabButton isActive={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}> JSX </TabButton>
                <TabButton isActive={selectedTopic === 'props'} onSelect={() => handleSelect('props')}> Props </TabButton>
                <TabButton isActive={selectedTopic === 'state'} onSelect={() => handleSelect('state')}> State </TabButton>
            </menu>
            {tabContent}
        </section>
    )
}