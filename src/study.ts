let a: string = "Hello, World!";
console.log(a);
console.log("\n1\n\t2\n3");
console.log("\n*\n**\n***\n*\n*\n*");
console.log("\n   *\n  ***\n *****\n*******\n   *\n   *\n   *\n");
console.log('\\"');
console.log('SIKI说："What is \\n\"');
let a1: number = 1;
let a2: number = 2;
console.log(a1 + a2);
let a3: number = (a1 + a2) / 2;
console.log(a3);
let class1: number[] = [1, 2, 3, 4, 5];
let class2: number[] = [1, 2, 3, 4, 5, 6];
let names: string[] = ["SIKI", "LILI", "MIMI"];
console.log(names[0], class1[0]);
class1[0] = 100;
console.log(class1);
console.log(class1.length);
class1.push(6);
console.log(class1);
class1.pop();
console.log(class1);
class1.unshift(1);
console.log(class1);
class1.shift();
console.log(class1);
class1.splice(1, 2);
console.log(class1);
let class3 = [100, 200, 300];
class1 = class1.concat(class3);
console.log(class1);
let index = class1.indexOf(100);
console.log(index); //返回第一个出现的100的索引
let index2 = class1.lastIndexOf(100);
console.log(index2); //返回最后一个出现的100的索引
class1.sort((a, b) => a - b); //升序排序
console.log(class1);
class1.reverse(); //数组反转
console.log(class1);
let scoreDict: { [key: number]: number } = {
  1: 90,
  2: 80,
  3: 40,
  4: 20,
  78: 800,
};
console.log(scoreDict[3]);
console.log(scoreDict[41]);
scoreDict[89] = 200;
delete scoreDict[2];
console.log(scoreDict[2]);
let nameDict: { [key: number]: string } = {
  45: "siki",
  80: "trigger",
  90: "libai",
};
console.log(nameDict[45]);
let scoreDict1: { [key: string]: number } = {
  siki: 100,
  trigger: 59,
};
console.log(scoreDict1["siki"]);
console.log(scoreDict1.siki);
let x: number = 0;
console.log(x == 0 && x < 1);
x = 3;
let y: number = x++ + x++;
console.log(y);
x = 3;
y = x++ + ++x;
console.log(y);
let num = 629;
let ge = num % 10;
let shi = ((num - ge) / 10) % 10;
let bai = (num - ge - shi * 10) / 100;
console.log("" + ge + shi + bai);
enum RoleType {
  Student,
  Teacher,
  Instructor,
  Administrator,
  President,
}
let roleType = RoleType.Teacher;
switch (roleType as number) {
  case RoleType.Teacher:
    console.log("welcome,teacher");
    break;
  case RoleType.Administrator:
    console.log("welcome,administrator");
    break;
  case RoleType.Instructor:
    console.log("welcome,instructor");
    break;
  case RoleType.President:
    console.log("welcome,president");
    break;
  case RoleType.Student:
    console.log("welcome,student");
    break;
  default:
    console.log("welcome");
    break;
}
let num1 = 12;
if (num1 % 2 == 0) {
  console.log("偶数");
} else {
  console.log("奇数");
}
let scores = [3, 32, 4, 324, 3, 43, 543];
for (let temp of scores) {
  console.log(temp);
}
for (let tempi in scores) {
  console.log(tempi, scores[tempi]);
}
function methodName(a: number, b: number): number {
  let c = a + b;
  return c;
}
class Monster {
  static count: number = 0; //所有对象共享属性
  private _name: string = "";
  private _type: string = "";
  private _level: number = 0;
  private _maxHP: number = 0;
  private _currentHP: number = 0; //需要初始值

  constructor(n: string, t: string, l: number, mHP: number, cHP: number) {
    this._currentHP = cHP;
    this._name = n;
    this._type = t;
    this._maxHP = mHP;
    this._level = l;
    Monster.count++;
  }

  public attack(target: Monster) {
    target._currentHP = target._currentHP - this._level;
    console.log(
      `${this._name}攻击了${target._name},造成了${this._level}伤害，剩余血量为${target._currentHP}`,
    );
  }

  //属性寄存器
  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get type(): string {
    return this._type;
  }

  public set type(type: string) {
    this._name = type;
  }

  public get maxHP(): number {
    return this._maxHP;
  }

  public set maxHP(maxHP: number) {
    this._maxHP = maxHP;
  }

  public get currentHP(): number {
    return this._currentHP;
  }

  public set currentHP(currentHP: number) {
    if (currentHP <= 0) {
      this._currentHP = 0;
      return; //方法结束，方法没有返回值
    }
    this._currentHP = currentHP;
  }
}

let monster1 = new Monster("gui", "gui", 999, 99999, 99999);
console.log(monster1.name);
monster1.name = "大白骨精";
console.log(monster1.name);

let monster2 = new Monster("niumowang", "roudun", 10, 200, 100);
console.log(monster2);

monster1.attack(monster2);
monster2.attack(monster1);
console.log(Monster.count);

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log(`${this.name}移动了${distance}米.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("wolf");
  }
}

class Cat extends Animal {
  meow() {
    console.log("meow");
  }
  move(distance: number) {
    console.log(`${this.name}跑了${distance}米.`);
  }
}

class Bird extends Animal {
  jizha() {
    console.log("jizha");
  }
}

let dog = new Dog("a");
let cat = new Cat("b");
let bird = new Bird("c");

dog.bark();
dog.move(3);
cat.meow();
cat.move(3);
bird.jizha();
bird.move(3);

interface Animal1 {
  name: string;
  age: number;
  makeSound(): void;
}

class Dog1 implements Animal1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log(this.name + "wolf");
  }
}

class Cat1 implements Animal1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): void {
    console.log(this.name + "meow");
  }
}
let ani: Animal1 = new Cat1("cola", 9);
ani.makeSound();
