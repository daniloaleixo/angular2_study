## Novice Level

At this level an interviewer wants to know whether the interviewee is a coachable self-learner. Hence, he/she might ask questions about basic terminology, your ability to build a simple app, and your comprehension of basic concepts.  


### Familiarity of Basic Terminology
1. What are the differences between AngularJS (angular 1.x) and Angular (Angular 2.x and beyond)?
> Angular2 is entirely component-based. Controllers and $scope are no longer used. They have been replaced by components and directives. Components are directives with a template. Angular 2 is using Typescript which is super set of javascript. Angular 1.x was not built with mobile support in mind, where Angular 2 is mobile oriented.

2. What is a component? Why would you use it? 
> In Angular 2, “everything is a component.” Components are the main way we build and specify elements and logic on the page, through both custom elements and attributes that add functionality to our existing components.

3. What is the minimum definition of a component?
4. What is a module, and what does it contain?
> NgModules help organize an application into cohesive blocks of functionality. NgModules consolidate components, directives, and pipes into cohesive blocks of functionality, each focused on a feature area, application business domain, workflow, or common collection of utilities.
5. What is a service, and when will you use it?
> Services are JavaScript functions that are responsible for doing a specific task only. Angular services are injected using Dependency Injection mechanism and include the value, function or feature which is required by the application. Using a separate service keeps components lean and focused on supporting the view.
6. What is a promise? Explain it laymen's terms.
7. What are the lifecycle hooks for components and directives?
8. What are pipes? Give me an example.
9. What are the differences between reactive forms and template driven forms?
10. What is a dumb, or presentation, component? What are the benefits of using dumb components?



### Ability to Build Simple App
1. How do components communicate with each other?
2. How would you use http to load data from server? 
3. How do you create routes?
4. How can you get the current state of a route?
5. How do you create two-way data binding?
6. How do you load external modules?
7. How would you display form validation errors?
8. Which lifecycle hook would you use to unsubscribe an observable?
9. How are services injected to your application?
10. How would you create route parameters and access them from a component?



### Basic Concepts
1. Why would you use Angular instead of another framework, e.g., React?
2. What is the difference between an observable and a promise?
3. What is the difference between a component and a directive?
4. Why would you use typescript aka benefits of typescript?
5. Why different life cycle hooks are needed for a component/directive?
6. Why does angular use rxjs?
7. What is the purpose of using zone.js?
8. What is the difference between ngOnInit() and the constructor() of a component?
9. When will ngOnInit() be called? How would you make use of ngOnInit()?
10. What are the benefits of using formBuilder?