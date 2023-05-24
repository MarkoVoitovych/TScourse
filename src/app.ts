class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key, private name: string) {}
  getKey(): Key {
    return this.key;
  }
  getName(): string {
    return this.name;
  }
}

abstract class House {
  protected door: "open" | "close" = "close";
  private tenants: Person[] = [];
  constructor(protected key: Key) {
    this.key = key;
  }
  comeIn(p: Person): void {
    if (this.door === "open") {
      this.tenants.push(p);
      console.log(`${p.getName()}'s inside`);
    }
  }

  getTenants(): Person[] {
    return this.tenants;
  }
  public abstract openDoor(k: Key): string;
}

class MyHouse extends House {
  constructor(k: Key) {
    super(k);
  }
  openDoor(k: Key): string {
    if (k.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }
    return (this.door = "open");
  }
}

const key = new Key();
const bob = new Person(key, "Bob");
const cottege = new MyHouse(key);
cottege.openDoor(bob.getKey());
cottege.comeIn(bob);
console.log(cottege.getTenants());
