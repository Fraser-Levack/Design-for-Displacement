import { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { deleteBlockData } from '../../firebase';
import '../../css/admin/ContentEdit.css';

interface props {
    blockId?: number;
    blockContent?: string;
    blockPath?: string;
}

function ContentEdit ({blockId, blockContent, blockPath}: props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDeleteBox, setIsDeleteBox] = useState<boolean>(false);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const deleteBoxRef = useRef<HTMLDivElement>(null);

    function handleOpen() {
        setIsOpen(!isOpen);
    }

    function handleDeleteBoxShow() {
        setIsDeleteBox(!isDeleteBox);
    }

    function handleDeleteBlock() {
        deleteBlockData(blockId, blockPath);
        setIsDeleteBox(false);
    }

    function handleEditing() {
        setIsEditing(!isEditing);
        if (!isOpen) {
            setIsOpen(true);
        }
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
                    <h3 onClick={handleDeleteBlock}>Yes</h3>
                    <h3 onClick={handleDeleteBoxShow}>No</h3>
                </div>
            </section>
            <section className={'top-section-options'}>
                <h3>{blockId}</h3>
                <div className={'icon-options'}>

                    <img src='/icons/x-square.svg' alt={'cancel'}
                         className={`cancel-icon ${isEditing ? 'active-edit' : 'not-edit'}`} onClick={handleEditing}/>

                    <img src='/icons/check-square.svg' alt={'save'}
                         className={`save-icon ${isEditing ? 'active-edit' : 'not-edit'}`} onClick={handleEditing}/>

                    <img src='/icons/edit.svg' alt={'edit'}
                         className={`edit-icon ${isEditing ? 'active-edit' : 'not-edit'}`} onClick={handleEditing}/>

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