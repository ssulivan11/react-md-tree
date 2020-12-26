import React from 'react';
import { render } from '@testing-library/react';
import { RootDirectory } from '../RootDirectory';

describe('<RootDirectory />', () => {
    const tree = {
        header: 'Heading',
        rootName: 'src',
        rootPath: 'react-md-tree/src',
        hasRootMd: false,
        childDirs: [
            {
                header: 'Heading',
                rootName: 'folder-1',
                rootPath: 'react-md-tree/folder-1',
                hasRootMd: false,
                childDirs: [],
                childFiles: [
                    {
                        header: 'Heading',
                        rootName: 'file.tsx',
                        rootPath: 'react-md-tree/folder-1/file.tsx'
                    }
                ]
            }
        ],
        childFiles: []
    };
    const component = render(<RootDirectory tree={tree} />);
    test('should render the sub and root dir', () => {
        expect(component.getByTestId('src')).toBeDefined();
        expect(component.getByTestId('folder-1')).toBeDefined();
    });
});
