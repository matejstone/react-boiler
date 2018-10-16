const fs = require('fs');
const prompt = require('prompt-sync')();

const COMPONENTS_DIR_PATH = './src/components';

const INPUT_PROPERTIES = [
    {
      name: 'component', 
      validator: /^[a-zA-Z\s\-]+$/,
      warning: 'Component name must be only letters, spaces, or dashes'
    },
];

const filedata = require('./createComponent/filedata.js');

// Get CLI arguments
const args = process.argv.slice(2);

if (args.length < 1) {
    console.log("Usage: yarn create-component [component-name]");
    return 1;
}

run(args[0]);

function run(componentName) {
    if (!componentDirExists()) {
        console.log(`Could not find a components directory (${COMPONENTS_DIR_PATH}). Exiting.`);
        return 0;
    }

    console.log(`Creating component '${componentName}'`);

    // if (componentAlreadyExists(componentName)) {
    //     console.log(`Component '${componentName}' already exists. Exiting.`);
    //     return 1;
    // }

    // const path = createComponentDirectory(componentName);
    const path = `${COMPONENTS_DIR_PATH}/${componentName}`;
    createFiles(componentName, path);
}

function componentDirExists() {
    if (fs.existsSync(COMPONENTS_DIR_PATH)) {
        return true;
    }

    return false;
}

function componentAlreadyExists(componentName) {
    if (fs.existsSync(`${COMPONENTS_DIR_PATH}/${componentName}`)) {
        return true;
    }

    return false;
}

function createComponentDirectory(componentName) {
    const path = `${COMPONENTS_DIR_PATH}/${componentName}`;
    fs.mkdirSync(path);
    console.log('Created directory:', path);
    return path;
}

function createFiles(componentName, path) {
    const react_file_data = filedata.get_react_component_file_data(componentName);
    createFile(`${path}/${componentName}.jsx`, react_file_data);

    const stories_file_data = filedata.get_story_component_file_data(componentName);
    createFile(`${path}/${componentName}.stories.jsx`, stories_file_data);

    const index_file_data = filedata.get_index_component_file_data(componentName);
    createFile(`${path}/index.jsx`, index_file_data);
}

function createFile(path, content) {
    fs.writeFile(path, content, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }

        console.log(`File ${path} created`);
    }); 
}
