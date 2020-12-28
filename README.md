<div>
  <div>
    <h1>🌳 React MD Tree</h1>
    <p>Generate your folder structure with ease.</p>
    <p>First install:<br />
    <pre><code class='lang-js'>npm install react-md-tree --save-dev</code></pre>
    </p>
    <p>Then run the script:<br />
    <pre><code class='lang-js'>react-md-tree --exclude dist</code></pre>
    </p>
    <h2>Example Output:</h2>
  </div>
  <ul style="list-style-type:none;padding:0" data-testid="react-md-tree" id="react-md-tree">
    <li>bin<ul id="bin" data-testid="bin">
        <li><span data-testid="cli">cli.js</span></li>
      </ul>
    </li>
    <li>dist<ul id="dist" data-testid="dist">
        <li><span data-testid="bundle">bundle.js</span></li>
      </ul>
    </li>
    <li>src<ul id="src" data-testid="src">
        <li>components<ul id="components" data-testid="components">
            <li>__mocks__<ul id="__mocks__" data-testid="__mocks__">
                <li><span data-testid="Tree.mock">Tree.mock.ts</span></li>
              </ul>
            </li>
            <li>__tests__<ul id="__tests__" data-testid="__tests__">
                <li><span data-testid="RootDirectory.spec">RootDirectory.spec.tsx</span></li>
              </ul>
            </li>
            <li><span data-testid="Directory.interface">Directory.interface.ts</span></li>
            <li><span data-testid="Directory">Directory.tsx</span></li>
            <li><span data-testid="File">File.tsx</span></li>
            <li><span data-testid="RootDirectory">RootDirectory.tsx</span></li>
          </ul>
        </li>
        <li><span data-testid="config">config.ts</span></li>
        <li><span data-testid="fsUtils">fsUtils.ts</span></li>
        <li><span data-testid="globals.d">globals.d.ts</span></li>
        <li><span data-testid="index">index.tsx</span></li>
      </ul>
    </li>
    <li><span data-testid=".eslintrc">.eslintrc.js</span></li>
    <li><span data-testid=".prettierrc">.prettierrc.js</span></li>
    <li><span data-testid="README">README.md</span></li>
    <li><span data-testid="babel.config">babel.config.js</span></li>
    <li><span data-testid="jest.config">jest.config.js</span></li>
    <li><span data-testid="webpack.config">webpack.config.js</span></li>
  </ul>
</div>
