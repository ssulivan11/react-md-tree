import React from 'react';
import * as FSUtils from '../fsUtils';

interface IFileProps {
    fileName: string;
}

const File = ({ fileName }: IFileProps) => {
    const fileNameTrimmed = FSUtils.trimExtension(fileName);
    return (
        <li>
            <a href={fileNameTrimmed}>{fileNameTrimmed}</a>
        </li>
    );
};

export { File };
