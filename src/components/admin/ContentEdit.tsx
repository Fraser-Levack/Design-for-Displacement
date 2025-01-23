import { useState, useEffect, useRef } from 'react';
import '../../css/admin/ContentEdit.css';

interface props {
    blockId?: number;
    blockContent?: string;
}

function ContentEdit ({blockId, blockContent}: props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDeleteBox, setIsDeleteBox] = useState<boolean>(false);
    const deleteBoxRef = useRef<HTMLDivElement>(null);

    function handleOpen() {
        setIsOpen(!isOpen);
    }

    function handleDeleteBoxShow() {
        setIsDeleteBox(!isDeleteBox);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (deleteBoxRef.current && !deleteBoxRef.current.contains(event.target as Node)) {
                setIsDeleteBox(false);
            }
        }

        if (isDeleteBox) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDeleteBox]);

    return (
        <div className={'content-edit'}>
            <section ref={deleteBoxRef} className={`delete-box ${!isDeleteBox ? 'null-del-box' : ''}`}>
                <h2> Are you sure you would like to delete block {blockId}?</h2>
                <div className={'delete-options'}>
                    <h3>Yes</h3>
                    <h3 onClick={handleDeleteBoxShow}>No</h3>
                </div>
            </section>
            <section className={'top-section-options'}>
                <h3>{blockId}</h3>
                <div className={'icon-options'}>
                    <img src='/icons/trash.svg' alt={'delete'} className={'delete-icon'} onClick={handleDeleteBoxShow}/>

                    <img src='/icons/chevron-right.svg' alt={'options'}
                         className={isOpen ? 'chevron-open' : 'chevron-closed'} onClick={handleOpen}/>
                </div>
            </section>
            <section className={`lower-section-content ${!isOpen ? 'closed' : ''}`}>
                <p>{blockContent}</p>
            </section>

        </div>
    );
}

export default ContentEdit;