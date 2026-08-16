// TypeScript 示例文件 —— 编译验证用
// 运行 `npm run build` 后会在 dist/ 目录生成对应的 .js 文件

function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

interface User {
  id: number;
  name: string;
  email?: string;
}

const users: User[] = [
  { id: 1, name: "Ten", email: "ten@example.com" },
  { id: 2, name: "TenRobot" },
];

users.forEach((user) => {
  console.log(greet(user.name));
  if (user.email) {
    console.log(`  📧 ${user.email}`);
  }
});
