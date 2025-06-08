// any
var hero;
function getHero() {
    return 'thor';
}
hero = getHero();
// The type of `hero` is inferred as `any` because it is not explicitly typed
// and the function `getHero` does not have a return type annotation.
// This means `hero` can be assigned any type of value later on, which is not ideal for type safety.
// let hero: string;
// function getHero(): string {
//   return 'thor';
// }
// hero = getHero();
