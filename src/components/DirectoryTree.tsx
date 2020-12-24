import React, { Fragment } from 'react';
import { Directory } from './Directory';
import { IDirectoryProps, ITree } from './Directory.interface';
import { File } from './File';

const RootDirectory = ({ tree }: IDirectoryProps) => {
    const { rootName, childDirs, childFiles, header }: ITree = tree;
    return (
        <div>
            {header && (
                <div
                    dangerouslySetInnerHTML={{
                        __html: header
                    }}
                />
            )}
            <ul style={{ listStyleType: 'none', padding: 0 }} id={rootName}>
                {childDirs.map((childDir, index) => (
                    <Directory key={index} tree={childDir} depth={1} />
                ))}
                {childFiles.map((childFile, index) => (
                    <File key={index} fileName={childFile} />
                ))}
            </ul>
        </div>
    );
};

export default RootDirectory;
