export interface IDirectoryProps {
    tree: any;
    depth: number;
}

interface IChildDirs {
    rootName: string;
    childDirs: Array<string>;
    childFiles: Array<string>;
}

export interface ITree {
    header?: string;
    hasRootMd: boolean;
    rootName: string;
    childDirs: Array<IChildDirs>;
    childFiles: Array<string>;
}
