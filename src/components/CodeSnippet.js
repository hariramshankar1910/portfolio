import React from 'react';
import Section from './Section';

const CodeSnippet = () => {
  const snippets = [
    {
      title: 'REST API with JWT Authentication',
      language: 'csharp',
      code: `// JWT Token Generation
public string GenerateToken(User user)
{
    var claims = new[]
    {
        new Claim(JwtRegisteredClaimNames.Sub, user.Username),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        new Claim(ClaimTypes.Role, user.Role)
    };

    var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
    var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

    var token = new JwtSecurityToken(
        _config["Jwt:Issuer"],
        _config["Jwt:Audience"],
        claims,
        expires: DateTime.Now.AddMinutes(30),
        signingCredentials: creds);

    return new JwtSecurityTokenHandler().WriteToken(token);
}`,
      description: 'Secure JWT token generation for API authentication'
    },
    {
      title: 'React State Management',
      language: 'javascript',
      code: `// Custom Hook for API Calls
const useApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};`,
      description: 'Reusable React hook for API data fetching'
    },
    {
      title: 'SQL Query Optimization',
      language: 'sql',
      code: `-- Optimized Query with Indexing
CREATE NONCLUSTERED INDEX IX_Orders_CustomerDate
ON Orders (CustomerID, OrderDate DESC)
INCLUDE (TotalAmount, Status);

SELECT
    o.OrderID,
    c.CustomerName,
    o.OrderDate,
    o.TotalAmount
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID
WHERE o.OrderDate >= '2024-01-01'
    AND o.Status = 'Completed'
ORDER BY o.OrderDate DESC;`,
      description: 'Database query optimization with proper indexing'
    }
  ];

  return (
    <Section
      id="code-snippets"
      title="Code Snippets"
      subtitle="Showcasing technical expertise through code"
    >
      <div className="row g-4">
        {snippets.map((snippet, index) => (
          <div key={index} className="col-lg-6">
            <div className="code-snippet-card">
              <div className="code-snippet-header">
                <h5 className="code-snippet-title">{snippet.title}</h5>
                <span className="code-snippet-language">{snippet.language}</span>
              </div>
              <p className="code-snippet-description">{snippet.description}</p>
              <div className="code-snippet-code">
                <pre><code className={`language-${snippet.language}`}>{snippet.code}</code></pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CodeSnippet;