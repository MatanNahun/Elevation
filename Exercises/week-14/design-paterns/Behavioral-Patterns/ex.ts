interface VisitorEx {
  visitUser(user: User): string;
  visitAsset(asset: Asset): string;
  visitGroup(group: Group): string;
}

class ExportingJSON implements VisitorEx {
  visitUser(user: User): string {
    return `{
            id: ${user.id},
            name: ${user.name},
            password: ${user.password}
        }`;
  }
  visitAsset(asset: Asset): string {
    return `{
            serialNumber: ${asset.serialNumber},
            owner: ${asset.owner},
            rating: ${asset.rating}
        }`;
  }
  visitGroup(group: Group): string {
    return `{
            id: ${group.id},
            size: ${group.size},
        }`;
  }
}

interface Details {
  accept(visitor: VisitorEx): string;
}

class User implements Details {
  public id: number;
  public name: string;
  public password: string;
  constructor(id: number, name: string, password: string) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
  accept(visitor: VisitorEx): string {
    return visitor.visitUser(this);
  }
}

class Asset implements Details {
  public serialNumber: number;
  public owner: string;
  public rating: number;
  constructor(serialNumber: number, owner: string, rating: number) {
    this.serialNumber = serialNumber;
    this.owner = owner;
    this.rating = rating;
  }
  accept(visitor: VisitorEx): string {
    return visitor.visitAsset(this);
  }
}
class Group implements Details {
  public id: number;
  public size: number;
  constructor(id: number, size: number) {
    this.id = id;
    this.size = size;
  }
  accept(visitor: VisitorEx): string {
    return visitor.visitGroup(this);
  }
}

const details: Details[] = [];
details.push(new User(1, "Itay", "123456"));
details.push(new User(2, "Dekal", "987654"));
details.push(new User(3, "Ohad", "456987"));
details.push(new Asset(4, "Itay", 5));
details.push(new Asset(5, "Dekel", 10));
details.push(new Group(6, 100));
details.push(new Group(7, 200));

const exportingJSON: ExportingJSON = new ExportingJSON();

for (const detailed of details) {
  console.log(detailed.accept(exportingJSON));
}
