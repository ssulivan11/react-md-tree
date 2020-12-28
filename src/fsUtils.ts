import fs from 'fs';
import path from 'path';
import pretty from 'pretty';

export const readfilePromise = (filePath: string) =>
    new Promise((resolve, reject) =>
        fs.readFile(filePath, (error, data) => (error ? reject(error) : resolve(data)))
    );

export const readdirPromise = (dirPath: string) =>
    new Promise((resolve, reject) =>
        fs.readdir(dirPath, (error, files) => (error ? reject(error) : resolve(files)))
    );

export const writeFilePromise = (filepath: string, data: string, options: string) => {
    const prettyData = pretty(data);

    return new Promise((resolve, reject) =>
        fs.writeFile(
            filepath,
            prettyData,
            options,
            // @ts-ignore
            (error) => (error ? reject(error) : resolve())
        )
    );
};

export const statPromise = (filePath: string) =>
    new Promise((resolve, reject) =>
        fs.stat(filePath, (error, stats) => (error ? reject(error) : resolve(stats)))
    );

export const trimExtension = (fileName: string) => {
    const dotSplit = fileName.split('.');
    return dotSplit.length > 1 ? dotSplit.slice(0, -1).join('.') : fileName;
};

export const resolveHome = (filepath: string) =>
    filepath[0] === '~' ? path.join(process.env.HOME, filepath.slice(1)) : filepath;

export const existsPromise = (filePath: string) =>
    new Promise((resolve) => {
        fs.exists(filePath, (exists) => resolve(exists));
    });
