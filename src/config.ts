import * as FSUtils from './fsUtils';

export const parseValidRegexArray = (value: Array<string>) => {
    if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
        throw new Error('Not an array of strings.');
    }
    return value.map((regexp) => new RegExp(regexp));
};

export const parseValidNonnegativeInteger = (value: number) => {
    if (!Number.isInteger(value) || value < 0) {
        throw new Error('Is not an integer >= 0.');
    }
    return value;
};

export const parseValidString = (value: string) => {
    if (typeof value !== 'string') {
        throw new Error('Is not a string.');
    }
    return value;
};

const configSchema = {
    header: {
        doc: 'A string of HTML to prepend to the generated markdown file.',
        default: '',
        parse: parseValidString
    },
    exclude: {
        doc: 'Array of JavaScript RegEx string paths to be excluded.',
        default: ['\\.git', 'node_modules'],
        parse: parseValidRegexArray
    },
    include: {
        doc:
            'What paths shall be included (exclude is preferred to include). Array of JavaScript RegEx strings.',
        default: ['.*\\.md$'],
        parse: parseValidRegexArray
    },
    maxDepth: {
        doc: 'Maximum depth of recursion. Source root directory is 0.',
        default: Number.MAX_SAFE_INTEGER,
        parse: parseValidNonnegativeInteger
    },
    rootFileName: {
        doc:
            'The root file name. Directory roots shall have the same name as the directory itself.',
        default: 'Home.md',
        parse: parseValidString
    },
    source: {
        doc: 'Source root directory.',
        default: '.',
        parse: parseValidString
    },
    output: {
        doc: 'Output file for the directory tree md/html file.',
        default: 'MDTREE.md',
        parse: parseValidString
    }
};

const config = {};

export const initConfig = async (configPath) => {
    try {
        const configExists = await FSUtils.existsPromise(configPath);
        const userConfig = configExists
            ? // @ts-ignore
              JSON.parse(await FSUtils.readfilePromise(configPath))
            : {};

        Object.keys(configSchema).forEach((key) => {
            const userValue = userConfig[key];
            const schema = configSchema[key];
            if (typeof userValue === 'undefined') {
                config[key] = schema.parse(schema.default);
            } else {
                try {
                    config[key] = schema.parse(userValue);
                } catch (error) {
                    throw new Error(`'${key}': ${error && error.message}`);
                }
            }
        });
    } catch (error) {
        throw new Error(`Cannot parse config file '${configPath}'. ` + error && error.message);
    }
};

export const getConfig = (key) => config[key];
