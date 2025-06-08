type uuser = {
  readonly id: number; // This property is read-only
  name: string;
};

let myUser: uuser = { id: 1, name: "Jane" };

myUser.name = "Janet";   // ✅ Allowed
// user.id = 2;         // ❌ Error: Cannot assign to 'id' because it is a read-only property.