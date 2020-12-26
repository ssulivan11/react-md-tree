import React, { Fragment } from 'react';
import { File } from './File';
import { IDirectoryProps, ITree } from './Directory.interface';

const Directory = ({ tree, depth }: IDirectoryProps) => {
    const { hasRootMd, rootName, childDirs, childFiles }: ITree = tree;
    return (
        <li>
            {hasRootMd ? <a href={rootName}>{rootName}</a> : <Fragment>{rootName}</Fragment>}
            <ul id={rootName} data-testid={rootName}>
                {childDirs.map((childDir, index) => {
                    const hasChildren = childDir.childDirs.length + childDir.childFiles.length > 0;
                    return hasChildren ? (
                        <Directory key={index} tree={childDir} depth={depth + 1} />
                    ) : (
                        <File key={index} fileName={childDir.rootName} />
                    );
                })}
                {childFiles.map((childFile, index) => (
                    <File key={index} fileName={childFile} />
                ))}
            </ul>
        </li>
    );
};

export { Directory };
