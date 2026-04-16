export const highlights = [
  { value: '2+', label: 'Years of experience' },
  { value: 'Logistics', label: 'Industry experience' },
  { value: 'Reliable', label: 'Production support' },
];

export const skillCategories = [
  {
    category: 'Backend',
    skills: ['.NET Core', 'ASP.NET Web API', 'Entity Framework', 'LINQ'],
  },
  {
    category: 'Frontend',
    skills: ['React JS', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
  },
  {
    category: 'Database',
    skills: ['SQL Server', 'Stored Procedures', 'Query Optimization'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Azure basics', 'ServiceNow', 'CI/CD'],
  },
  {
    category: 'Concepts',
    skills: ['REST API', 'JWT Authentication', 'Agile'],
  },
];

export const projects = [
  {
    title: 'Gemar USA Warehouse Management',
    description:
      'Warehouse management system with packing slip generation, barcode scanning, and inventory workflows for faster fulfillment operations.',
    tech: ['.NET Core', 'SQL Server', 'React'],
    link: 'https://github.com/hariram-shankar/gemar-usa-warehouse-management',
  },
  {
    title: 'Invoice Management System',
    description:
      'Role-based invoice workflow for users, vendors, and approvers with REST API validation and SQL debugging support.',
    tech: ['REST API', 'Validation', 'SQL Server'],
    link: 'https://github.com/hariram-shankar/invoice-management-system',
  },
  {
    title: 'E-Cart Web Application',
    description:
      'ASP.NET MVC e-commerce application with CRUD operations for products, orders, and customer management.',
    tech: ['ASP.NET MVC', 'C#', 'CRUD'],
    link: 'https://github.com/hariram-shankar/e-cart-web-application',
  },
  {
    title: 'One Vision Agency',
    description:
      'Production support and EDI integration solution with BizTalk workflows for reliable data exchange across systems.',
    tech: ['EDI', 'BizTalk', 'Production Support'],
    link: 'https://github.com/hariram-shankar/one-vision-agency',
  },
];

export const experiences = [
  {
    role: '.NET Developer',
    company: 'MSC Technology',
    period: 'Current role',
    location: 'Chennai',
    highlights: [
      'Production support for enterprise systems',
      'SQL debugging and query optimization',
      'BizTalk monitoring and incident resolution',
    ],
  },
  {
    role: 'Associate Software Engineer',
    company: 'Majestic People Infotech',
    period: 'Previous role',
    location: 'Chennai',
    highlights: [
      'Developed packing slip workflows for logistics operations',
      'Implemented API features for partner integration',
      'Built React UI enhancements for internal systems',
    ],
  },
  {
    role: 'Intern',
    company: 'J Square',
    period: 'Internship',
    location: 'Chennai',
    highlights: [
      'Built e-cart functionality using ASP.NET MVC',
      'Implemented CRUD operations for product and order management',
    ],
  },
];

export const codeSnippets = [
  {
    id: 'jwt-auth',
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
    description: 'Secure JWT token generation for API authentication',
  },
  {
    id: 'react-hook',
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
    description: 'Reusable React hook for API data fetching',
  },
  {
    id: 'sql-index',
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
    description: 'Database query optimization with proper indexing',
  },
];

export const contactInfo = {
  email: 'hariram19102000@gmail.com',
  linkedInUrl: 'https://linkedin.com/in/hariram-shankar-g-4ab8221b0',
  linkedInLabel: 'hariram-shankar-g-4ab8221b0',
  location: 'Chennai',
  subject: '.NET Full Stack Developer Position - Hariram Shankar G',
  body:
    'Dear Hariram Shankar G,%0A%0AI came across your impressive portfolio website and was particularly impressed by your experience in .NET Full Stack development, especially your work with logistics domain solutions, EDI, BizTalk, and production support.%0A%0AWe are currently looking for a skilled .NET developer to join our team. Your background in C#, .NET Core, React JS, and SQL Server aligns perfectly with our project requirements.%0A%0AI would love to discuss potential opportunities and learn more about your experience. Are you available for a quick call or meeting?%0A%0ALooking forward to hearing from you.%0A%0ABest regards,%0A',
};
