import React from 'react';
import { render } from '@testing-library/react';
import { RootDirectory } from '../RootDirectory';
import { mockTree } from '../__mocks__/Tree.mock';

describe('<RootDirectory />', () => {
    const component = render(<RootDirectory tree={mockTree} />);
    test('should render the sub and root dir', () => {
        expect(component.getByTestId('src')).toBeDefined();
        expect(component.getByTestId('webpack.config')).toBeDefined();
    });
});
