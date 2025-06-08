type Course = {
  name: string;
  isActive: boolean;
};

function createCourse(): Course {
  return { name: "TypeScript Basics", isActive: true };
}