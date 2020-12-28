import React from 'react';
import * as FSUtils from '../fsUtils';

interface IFileProps {
    fileName: any;
}

const File = ({ fileName }: IFileProps) => {
    const fileNameTrimmed = FSUtils.trimExtension(fileName.rootName);
    return (
        <li>
            <span>{fileNameTrimmed}</span>
        </li>
    );
};

export { File };
