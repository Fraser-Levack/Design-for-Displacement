import { useState } from 'react';
import '../../css/admin/ContentEdit.css';

interface props {
    blockId?: number;
    blockContent?: string;
}

function ContentEdit ({blockId, blockContent}: props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <div className={'content-edit'}>
            <section className={'top-section-options'}>
                <h3>{blockId}</h3>
                <img src='/icons/chevron-right.svg' alt={'options'}
                     className={isOpen ? 'chevron-open' : 'chevron-closed'} onClick={handleOpen}/>
            </section>
            <section className={`lower-section-content ${!isOpen ? 'closed' : ''}`}>
                <p>{blockContent}</p>
            </section>

        </div>
    );
}

export default ContentEdit;