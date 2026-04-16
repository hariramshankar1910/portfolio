import React from 'react';
import Section from './Section';

const CodeSnippet = ({ snippets }) => {
  return (
    <Section
      id="code-snippets"
      title="Code Snippets"
      subtitle="Showcasing technical expertise through code"
    >
      <div className="row g-4">
        {snippets.map((snippet) => (
          <div key={snippet.id} className="col-lg-6">
            <div className="code-snippet-card">
              <div className="code-snippet-header">
                <h5 className="code-snippet-title">{snippet.title}</h5>
                <span className="code-snippet-language">{snippet.language}</span>
              </div>
              <p className="code-snippet-description">{snippet.description}</p>
              <div className="code-snippet-code">
                <pre>
                  <code className={`language-${snippet.language}`}>
                    {snippet.code}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CodeSnippet;
